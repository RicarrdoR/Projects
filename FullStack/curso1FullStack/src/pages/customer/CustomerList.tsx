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

import {removeCustomer, saveCustomer, searchCustomers} from "./CustomerApi";
import Customer from './Customer';


const CustomerList: React.FC = () => {
    const { name } = useParams<{ name: string; }>();
    const [customer,setCustomer] = useState<Customer[]>([]);
    const history = useHistory ();

    useEffect(() => {
        search();
    },[history.location.pathname]);

    const search = async () => {
        let result = await searchCustomers();
        setCustomer(result)
}
    const remove =  (id: string) => {
       removeCustomer(id);
        search();
    }
const pruebaLocalStorage=() =>{
        const ejemplo = {
            id: '1',
            firstName: 'John',
            lastName: 'Doe',
            email: 'upchh@example.com',
            phone: '1234567890',
            address: '1234567890'
        }
    saveCustomer(ejemplo);
    }

    const addCustomer= () => {
    history.push('/page/customer/new');
    }
    const editCustomer= (id : string) => {
        history.push('/page/customer/' + id);
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
sdsdsdsdsdsdsdsd
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{name}</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <IonCard>
                        <IonTitle>Gestion De Clientes</IonTitle>
                    <IonItem>
                        <IonButton onClick={addCustomer} color="primary" fill="solid" slot="end" size = "default">
                            <IonIcon icon = {add}/>
                            Agregar Cliente
                        </IonButton>
                    </IonItem>

                <IonGrid  className ="table" >
                    <IonRow  >
                        <IonCol>Nombre </IonCol>
                        <IonCol>Email</IonCol>
                        <IonCol >Telefono</IonCol>
                        <IonCol >Direccion</IonCol>
                        <IonCol >Editar</IonCol>

                    </IonRow>
                    {customer.map((customer: Customer)=>
                        <IonRow>
                            <IonCol> {customer.firstName} {customer.lastName} </IonCol>
                            <IonCol>{customer.email}</IonCol>
                            <IonCol >{customer.phone}</IonCol>
                            <IonCol >{customer.address}</IonCol>
                            <IonCol >
                        <IonButton color="primary" fill="clear"  onClick={()=> editCustomer(String(customer.id))}>
                        <IonIcon icon = {pencilOutline} slot={'icon-only'}/>
                        </IonButton>
                        <IonButton   color="danger" fill="clear" onClick={()=> remove(String(customer.id))}>
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

export default CustomerList;