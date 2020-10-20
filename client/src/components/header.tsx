import { IonHeader, IonToolbar, IonTitle, IonMenuButton } from '@ionic/react';
import React from 'react';

interface HeadProp  {
    title: string,
    key: string
}

export const Header: React.FC<HeadProp> = (props) => {
    return (
        <IonHeader>
            <IonToolbar color="warning">
                <IonMenuButton slot="start" />
                <IonTitle>{props.title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
}
