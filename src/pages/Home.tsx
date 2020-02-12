import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
//import mode from '../img/mode.jpg'
import Header from './Header'
import Main from './Main'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic proj</IonTitle>
          <Header />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
          <Main />
      </IonContent>
    </IonPage>
  );
};

export default Home;
