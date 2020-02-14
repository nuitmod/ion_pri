import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
//import mode from '../img/mode.jpg'
import Header from './Header'
import Main from './Main'
import Mode from './Mode'
import Rii from './Rii'
import Footer from "./Footer"
import Checklist from "./Checklist"

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Header />
      </IonHeader>
      <IonContent className="ion-padding">
        <Main />
        <Mode />
        <Rii />
        <Checklist />
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
