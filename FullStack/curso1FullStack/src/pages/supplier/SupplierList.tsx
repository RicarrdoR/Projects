import {
    IonButton,
    IonButtons,
    IonCard,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader, IonIcon, IonItem,
    IonMenuButton,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import {useHistory, useParams } from 'react-router';
import React, {useEffect, useState} from "react";
import {add, closeOutline, pencilOutline} from "ionicons/icons";

import {removeSupplier, saveSupplier, searchSuppliers} from "./SupplierApi";
import Supplier from './Supplier';


const SupplierList: React.FC = (props: any) => {
    const { name } = useParams<{ name: string; }>();
    const [suppliers, setSuppliers] = useState<Supplier[]>([]);
    const history = useHistory();

    useEffect(() => {
        search();
    }, [history.location.pathname]);

    const search = async () => {
        let result = await searchSuppliers();
        setSuppliers(result);
    }

    const remove = async (id: string) => {
        await removeSupplier(id);
        search();
    }

    const addSupplier = () => {
        history.push('/page/supplier/new');
    }

    const editSupplier = (id: string) => {
        history.push('/page/supplier/' + id);
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
                        <IonTitle>Gestion De Provedores</IonTitle>
                    <IonItem>
                        <IonButton onClick={addSupplier} color="primary" fill="solid" slot="end" size = "default">
                            <IonIcon icon = {add}/>
                            Agregar Provedor
                        </IonButton>
                    </IonItem>

                <IonGrid  className ="table" >
                    <IonRow  >
                        <IonCol>Nombre </IonCol>
                        <IonCol>Email</IonCol>
                        <IonCol >Telefono</IonCol>
                        <IonCol >Direccion</IonCol>
                        <IonCol >Web</IonCol>
                        <IonCol >Contacto</IonCol>
                        <IonCol >Editar</IonCol>

                    </IonRow>
                    {suppliers.map((supplier: Supplier)=>
                        <IonRow>
                            <IonCol> {supplier.firstName} {supplier.firstName} </IonCol>
                            <IonCol>{supplier.email}</IonCol>
                            <IonCol >{supplier.phone}</IonCol>c
                            <IonCol >{supplier.address}</IonCol>
                            <IonCol >{supplier.contact}</IonCol>
                            <IonCol >{supplier.web}</IonCol>
                            <IonCol >
                        <IonButton color="primary" fill="clear"  onClick={()=> editSupplier(String(supplier.id))}>
                        <IonIcon icon = {pencilOutline} slot={'icon-only'}/>
                        </IonButton>
                        <IonButton   color="danger" fill="clear" onClick={()=> remove(String(supplier.id))}>
                        <IonIcon icon = {closeOutline} slot={'icon-only'}/>
                        </IonButton>

                            </IonCol>
                    </IonRow>
                        )}

                </IonGrid>
                    </IonCard>



</IonContent>
            </IonContent>
        </IonPage>
    );
};

export default SupplierList;