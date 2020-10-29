import { IonContent } from '@ionic/react';
import React from 'react';
import { Header } from '../../components/header';

export const Main: React.FC = () => {
    return (
        <>
            <Header
                title={'Main'}
                key={'main'}
            />
            <IonContent>
            
            </IonContent>
        </>
    );
}