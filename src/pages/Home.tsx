import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import mode from '../img/mode.jpg'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic proj</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <div>
        <div>
          <h5>ini pwa amp</h5>
        </div>
        <div>
          <img src={mode} alt="HTML5" height="229" width="129" />
        </div>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
