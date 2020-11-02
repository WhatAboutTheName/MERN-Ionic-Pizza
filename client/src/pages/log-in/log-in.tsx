import { IonButton, IonContent, IonInput, IonItem, IonLabel } from '@ionic/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Header } from '../../components/header';
import { useDispatch } from 'react-redux';
import { autonotification } from '../../store/actions/auth-actions';

export const LogIn = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [authData, setAuthData] = useState({
        email: '',
        password: ''
    });

    const setValue = (event: Event) => {
        const target = event.target as HTMLInputElement;
        setAuthData({
            ...authData,
            [target.name]: target.value
        });
    }
    
    const identification = async () => {
        try {
            await dispatch(autonotification(authData.email, authData.password));
            history.push('/');
        } catch(e) {}
    }

    return (
        <>
            <Header
                title={'LogIn'}
                key={'LogIn'}
            />
            <IonContent>
                <IonItem>
                    <IonLabel>Email:</IonLabel>
                    <IonInput name="email" type="email" onIonChange={setValue} />
                </IonItem>
                <IonItem>
                    <IonLabel>Password:</IonLabel>
                    <IonInput name="password" type="password" onIonChange={setValue} />
                </IonItem>
                <IonButton
                    color="warning"
                    onClick={identification}
                    className="btnMaxWidth btnBottom"
                >
                    Accept
                </IonButton>
            </IonContent>
        </>
    );
}