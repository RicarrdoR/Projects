import React, { useState } from "react";
import {
    IonContent,
    IonPage,
    IonInput,
    IonButton,
    IonLabel,
    IonItem,
    IonGrid,
    IonRow,
    IonCol,
    IonLoading,
} from "@ionic/react";
import "./LoginPage.css";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = () => {
        setIsLoading(true);
        // Aquí puedes agregar la lógica de autenticación
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    };

    return (
        <IonPage>
            <IonContent fullscreen className="ion-padding">
                <IonGrid>
                    <IonRow className="ion-align-items-center ion-justify-content-center">
                        <IonCol size="10" size-md="6" size-lg="4">
                            <div className="login-logo">
                                {/* Aquí puedes agregar tu logo */}
                            </div>
                            <IonItem>
                                <IonLabel position="floating">Correo electrónico</IonLabel>
                                <IonInput
                                    type="email"
                                    value={email}
                                    onIonChange={(e) => setEmail(e.detail.value!)}
                                />
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Contraseña</IonLabel>
                                <IonInput
                                    type="password"
                                    value={password}
                                    onIonChange={(e) => setPassword(e.detail.value!)}
                                />
                            </IonItem>
                            <IonButton
                                expand="block"
                                className="ion-margin-top"
                                onClick={handleLogin}
                            >
                                Iniciar sesión
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonLoading isOpen={isLoading} message={"Iniciando sesión..."} />
            </IonContent>
        </IonPage>
    );
};

export default LoginPage;
