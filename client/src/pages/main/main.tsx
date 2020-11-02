import { IonCol, IonContent, IonRow } from '@ionic/react';
import { request } from 'http';
import React, { useCallback, useEffect, useState } from 'react';
// import { axios } from '../../axios';
import { Header } from '../../components/header';

export const Main: React.FC = () => {
    // const [products, setProducts] = useState([]);

    // const getData = useCallback(async () => {
        // try {
            // const res = await axios.get('/all/get-products');
            // setProducts(
            //     ...products,
            //     res.data.product
            // );
    //     } catch (e) { }
    // }, [request]);

    // useEffect(() => {
    //     const socket = io('http://localhost:8000');
    //     socket.on('newProduct', soketData => {
    //         setProducts(
    //             ...products,
    //             soketData.product
    //         );
    //     })
    //     return () => socket.disconnect();
    // }, []);

    // useEffect(() => {
    //     getData();
    // }, [getData]);

    return (
        <>
            <Header
                title={'Main'}
                key={'main'}
            />
            <IonContent>
                <IonCol>
                    <IonRow>
                    </IonRow>
                </IonCol>
            </IonContent>
        </>
    );
}