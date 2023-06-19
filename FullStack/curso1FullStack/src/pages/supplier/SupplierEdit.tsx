import {
    IonButton,
    IonButtons,
    IonCard, IonCol,

    IonContent,

    IonHeader, IonIcon, IonInput, IonItem, IonLabel,
    IonMenuButton,
    IonPage, IonRow,

    IonTitle,
    IonToolbar
} from '@ionic/react';
import {useHistory, useParams, useRouteMatch} from 'react-router';
import React, {useEffect, useState} from "react";
import {checkmark} from "ionicons/icons";
import {saveSupplier, searchSupplierById} from './SupplierApi';
import Supplier from "./Supplier";




    const SupplierEdit: React.FC = () => {
    const { name } = useParams<{ name: string; }>();

    const [supplier, setSupplier] = useState<Supplier>({});
    const history = useHistory();

    const routeMatch: any = useRouteMatch("/page/supplier/:id");
    const id = routeMatch?.params?.id;

        useEffect(() => {
            search();
        }, [history.location.pathname]);
        const search = async () => {
            if (id === 'new') {
                setSupplier({});
            } else {
                let result = await searchSupplierById(id);
                setSupplier(result);
            }
        }

        const save = async () => {
            await saveSupplier(supplier);
            history.push('/page/suppliers');
        }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{name}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{name}</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <IonCard>
                        <IonTitle>{ id === 'new' ? 'Agregar Provedor': 'Editar Provedor'}</IonTitle>

                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Nombre</IonLabel>
                                    <IonInput onIonChange = {e => supplier.firstName = String(e.detail.value)} value ={supplier.firstName}></IonInput>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                            <IonItem>


                                    <IonLabel position="stacked">Contacto</IonLabel>
                                    <IonInput onIonChange = {e => supplier.contact = String(e.detail.value)} value ={supplier.contact}></IonInput>


                            </IonItem>
                            </IonCol>



                        </IonRow>
                            <IonRow>

                                <IonCol
                                ><IonItem>
                                    <IonLabel position="stacked">Email</IonLabel>
                                    <IonInput onIonChange = {e => supplier.email = String(e.detail.value)} value ={supplier.email}></IonInput>


                            </IonItem>
                                </IonCol>
                                <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Telefono</IonLabel>
                                    <IonInput onIonChange = {e => supplier.phone = String(e.detail.value)} value ={supplier.phone}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>

                        <IonItem>

                            <IonCol>
                                <IonLabel position="stacked">Direccion</IonLabel>
                                <IonInput onIonChange = {e => supplier.address = String(e.detail.value)} value ={supplier.address}></IonInput>
                            </IonCol>
                            </IonItem>
                        </IonRow>
                        <IonRow>

                        <IonItem>
                            <IonCol>
                                <IonLabel position="stacked">Web</IonLabel>
                            <IonInput onIonChange = {e => supplier.web = String(e.detail.value)} value ={supplier.web}></IonInput>
                            </IonCol>

                        </IonItem>
                        </IonRow>





                        <IonItem>
                            <IonButton onClick={save} color="success" fill="solid" slot="end" size = "default">
                                <IonIcon icon = {checkmark}/>
                                Guardar
                            </IonButton>
                        </IonItem>


                    </IonCard>


                </IonContent>
            </IonContent>
        </IonPage>
    );
};

export default SupplierEdit;