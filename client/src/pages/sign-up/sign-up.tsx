import {
    IonButton,
    IonContent,
    IonInput,
    IonItem,
    IonLabel
} from '@ionic/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import { Header } from '../../components/header';
import { axios } from '../../axios';
import 'react-phone-input-2/lib/style.css';
import './sign-up.css';

interface IUser {
    name: string,
    email: string,
    password: string
}

export const SignUp = () => {

    const history = useHistory();
    const [phoneNumber, setPhoneNumber] = useState(undefined);
    const [user, setUser] = useState({} as IUser);

    const setValue = (event: Event) => {
        const target = event.target as HTMLInputElement;
        setUser({
            ...user,
            [target.name]: target.value
        });
    }

    const signup = async () => {
        try {
            const data = {
                name: user.name,
                email: user.email,
                password: user.password,
                phoneNumber: phoneNumber
            };
            console.log(data);
            await axios.put('/auth/signup', data);
            history.push('/log-in');
        } catch(e) {}
    }

    return (
        <>
            <Header
                title={'SignUp'}
                key={'SignUp'}
            />
            <IonContent>
                <IonItem>
                    <IonLabel>Name:</IonLabel>
                    <IonInput name="name" type="text" onIonChange={setValue} />
                </IonItem>
                <IonItem>
                    <IonLabel>Email:</IonLabel>
                    <IonInput name="email" type="email" onIonChange={setValue} />
                </IonItem>
                <IonItem>
                    <IonLabel>Password:</IonLabel>
                    <IonInput name="password" type="password" onIonChange={setValue} />
                </IonItem>
                <div className="phoneContainer">
                    <IonLabel>Phone number:</IonLabel>
                    <PhoneInput
                        country={'by'}
                        value={phoneNumber}
                        onChange={phone => setPhoneNumber(phone)} />
                </div>
                <IonButton
                    color="warning"
                    onClick={signup}
                    className="btnMaxWidth btnBottom"
                >
                    Accept
                </IonButton>
            </IonContent>
        </>
    );
}
