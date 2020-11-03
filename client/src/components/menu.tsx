import React from 'react';
import { withRouter } from 'react-router-dom';
import { History } from 'history';
import {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonMenuToggle
} from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { IAuth } from '../store/action-interface';
import { logoutMethod } from '../store/actions/auth-actions';

interface ChildProp {
    history: History
}

const Menu: React.FC<ChildProp> = ({ history }) => {

    const dispatch = useDispatch();
    const userId = useSelector((state: IAuth) => state.auth.userId);
    const isLogin = useSelector((state: IAuth) => state.auth.isLogin);
    const isAdmin = useSelector((state: IAuth) => state.auth.isAdmin);

    const logout = async () => {
        try {
            await dispatch(logoutMethod(userId));
        } catch (e) { }
    }

    return (
        <IonMenu contentId="main" menuId="main-menu">
            <IonHeader>
                <IonToolbar color="warning">
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {
                    isLogin ?
                        <>
                            <IonMenuToggle>
                                <IonItem onClick={() => history.push('/')}>Home</IonItem>
                            </IonMenuToggle>
                            {
                                isAdmin ?
                                    <IonMenuToggle>
                                        <IonItem onClick={() => history.push('/add-product')}>Add product</IonItem>
                                    </IonMenuToggle> :
                                    null
                            }
                            <IonMenuToggle>
                                <IonItem onClick={() => history.push('/Cart')}>Cart</IonItem>
                            </IonMenuToggle>
                            <IonMenuToggle>
                                <IonItem onClick={() => history.push('/Order')}>Order</IonItem>
                            </IonMenuToggle>
                            <IonMenuToggle>
                                <IonItem onClick={
                                    () => {
                                        logout()
                                        history.push('/log-in')
                                    }
                                }>Logout</IonItem>
                            </IonMenuToggle>
                        </> :
                        <>
                            <IonMenuToggle>
                                <IonItem onClick={() => history.push('/log-in')}>Log in</IonItem>
                            </IonMenuToggle>
                            <IonMenuToggle>
                                <IonItem onClick={() => history.push('/sign-up')}>Sign up</IonItem>
                            </IonMenuToggle>
                        </>
                }
            </IonContent>
        </IonMenu>
    );
}

export default withRouter(Menu);
