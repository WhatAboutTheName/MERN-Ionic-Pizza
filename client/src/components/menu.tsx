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

interface ChildProp  {
    history: History
}

const Menu: React.FC<ChildProp> = ({ history }) => {

    return (
        <IonMenu contentId="main" menuId="main-menu">
            <IonHeader>
                <IonToolbar color="warning">
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonMenuToggle>
                    <IonItem onClick={() => history.push('/')}>Home</IonItem>
                </IonMenuToggle>
                <IonMenuToggle>
                    <IonItem onClick={() => history.push('/add-product')}>Add product</IonItem>
                </IonMenuToggle>
                <IonMenuToggle>
                    <IonItem onClick={() => history.push('/Cart')}>Cart</IonItem>
                </IonMenuToggle>
                <IonMenuToggle>
                    <IonItem onClick={() => history.push('/Order')}>Order</IonItem>
                </IonMenuToggle>
                <IonMenuToggle>
                    <IonItem onClick={() => history.push('/log-in')}>Log in</IonItem>
                </IonMenuToggle>
                <IonMenuToggle>
                    <IonItem onClick={() => history.push('/sign-up')}>Sign up</IonItem>
                </IonMenuToggle>
            </IonContent>
        </IonMenu>
    );
}

export default withRouter(Menu);
