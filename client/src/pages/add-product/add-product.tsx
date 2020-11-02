import {
    IonButton,
    IonContent,
    IonImg,
    IonInput,
    IonItem,
    IonLabel,
    IonTextarea,
} from '@ionic/react';
import React, { createRef, useState } from 'react';
import { Header } from '../../components/header';
import './add-product.css';

interface IProduct {
    title: string,
    price: string,
    image: any,
    description: string
}

export const AddProduct: React.FC = () => {
    const fileInputRef: React.RefObject<HTMLInputElement> = createRef();
    const [imagePreview, setImagePreview] = useState('');
    const [product, setProduct] = useState({} as IProduct);

    const setValue = (event: Event) => {
        const target = event.target as HTMLInputElement;
        setProduct({
            ...product,
            [target.name]: target.value
        });
    }

    const filePicker = (event: any) => {
        const file = (event.target as HTMLInputElement).files[0];
        setProduct({
            ...product,
            image: file
        });
        const reader = new FileReader();
        reader.onload = () => {
            setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
    }

    const uploadProduct = async () => {
        try {
            const data = new FormData();
            data.append("title", product.title);
            data.append("price", product.price);
            data.append("image", product.image, product.title);
            // await axios.post('/admin/addProduct', data, {
            //     Authorization: `Bearer ${auth.token}`
            // });
        } catch (e) { }
    }

    const filePickerClick = () => {
        (fileInputRef.current as HTMLElement).click();
    }

    return (
        <>
            <Header
                title={'Add product'}
                key={'AddProduct'}
            />
            <IonContent>
                <IonItem>
                    <IonLabel>Title:</IonLabel>
                    <IonInput name="title" type="text" onIonChange={setValue} />
                </IonItem>
                <IonItem>
                    <IonLabel>Price:</IonLabel>
                    <IonInput name="price" type="number" onIonChange={setValue} />
                </IonItem>
                <IonItem>
                    <IonButton
                        color="warning"
                        onClick={filePickerClick}
                        className="btnMaxWidth"
                    >
                        Change Image
                    </IonButton>
                    <input
                        name="image"
                        type="file"
                        ref={fileInputRef}
                        onChange={filePicker}
                        className="imagePicker"
                    />
                </IonItem>
                <IonItem>
                    <div className="imageContainer">
                        {
                            imagePreview ?
                                <IonImg src={imagePreview} alt={product.title} className="imagePreviw" />
                                : <h4>Please load image</h4>
                        }
                    </div>
                </IonItem>
                <IonItem>
                    <IonLabel>Description:</IonLabel>
                    <IonTextarea
                        name="description"
                        placeholder="Enter pizza description..."
                        rows={7}
                        onIonChange={setValue}
                    />
                </IonItem>
                <IonButton
                    color="warning"
                    onClick={uploadProduct}
                    className="btnMaxWidth btnBottom"
                >
                    Accept
                </IonButton>
            </IonContent>
        </>
    );
}