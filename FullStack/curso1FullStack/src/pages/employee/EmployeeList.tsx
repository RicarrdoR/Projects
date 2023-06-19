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

import {removeEmployee, saveEmployee, searchEmployees} from "./EmployeeApi";
import Employee from './Employee';


const EmployeeList: React.FC = (props: any) => {
    const { name } = useParams<{ name: string; }>();
    const [employee, setemployees] = useState<Employee[]>([]);
    const history = useHistory();

    useEffect(() => {
        search();
    }, [history.location.pathname]);

    const search = async () => {
        let result = await searchEmployees();
        setemployees(result);
    }

    const remove = async (id: string) => {
        await removeEmployee(id);
        search();
    }

    const addEmployee = () => {
        history.push('/page/employee/new');
    }

    const editEmployee = (id: string) => {
        history.push('/page/employee/' + id);
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
                        <IonTitle>Gestion De Empleados</IonTitle>
                    <IonItem>
                        <IonButton onClick={addEmployee} color="primary" fill="solid" slot="end" size = "default">
                            <IonIcon icon = {add}/>
                            Agregar Empleado
                        </IonButton>
                    </IonItem>

                <IonGrid  className ="table" >
                    <IonRow  >
                        <IonCol>Nombre </IonCol>
                        <IonCol>Email</IonCol>
                        <IonCol >Telefono</IonCol>
                        <IonCol >Direccion</IonCol>
                        <IonCol >Salario</IonCol>
                        <IonCol >Editar</IonCol>
                    </IonRow>
                    {employee.map((employee: Employee)=>
                        <IonRow>
                            <IonCol> {employee.firstName} {employee.lastName} </IonCol>
                            <IonCol>{employee.email}</IonCol>
                            <IonCol >{employee.phone}</IonCol>
                            <IonCol >{employee.address}</IonCol>
                            <IonCol >{employee.salary}</IonCol>
                            <IonCol >
                        <IonButton color="primary" fill="clear"  onClick={()=> editEmployee(String(employee.id))}>
                        <IonIcon icon = {pencilOutline} slot={'icon-only'}/>
                        </IonButton>
                        <IonButton   color="danger" fill="clear" onClick={()=> remove(String(employee.id))}>
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

export default EmployeeList;