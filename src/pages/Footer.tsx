import React from 'react';
import { IonContent, IonFooter, IonToolbar, IonTitle } from '@ionic/react';

var Footer: React.FC = () => (
  <>
    <IonContent />

    {/*-- Footer without a border --*/}
    <IonFooter className="ion-no-border">
      <IonToolbar>
        <IonTitle>Footer - No Border</IonTitle>
      </IonToolbar>
    </IonFooter>
  </>
);


export default Footer
