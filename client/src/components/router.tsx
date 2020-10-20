import React from 'react';
import {
    IonPage,
    IonRouterOutlet,
} from '@ionic/react';
import { Route } from 'react-router';
import { Cart } from '../pages/cart/cart';
import { LogIn } from '../pages/log-in/log-in';
import { Main } from '../pages/main/main';
import { NotFound } from '../pages/not-found/not-found';
import { Order } from '../pages/order/order';
import { SignUp } from '../pages/sign-up/sign-up';

export const MainRoute: React.FC = () => {
    return (
        <IonPage id="main">
            <IonRouterOutlet>
                <Route exact path="/" component={Main} />
                <Route path="/Cart" component={Cart} />
                <Route path="/Order" component={Order} />
                <Route path="/log-in" component={LogIn} />
                <Route path="/sign-up" component={SignUp} />
                <Route component={NotFound} />
            </IonRouterOutlet>
        </IonPage>
    );
}