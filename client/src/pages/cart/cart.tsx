import { IonContent } from '@ionic/react';
import React from 'react';
import { Header } from '../../components/header';

export const Cart = () => {
    return (
        <>
            <Header
                title={'Cart'}
                key={'Cart'}
            />
            <IonContent>
            </IonContent>
        </>
    );
}