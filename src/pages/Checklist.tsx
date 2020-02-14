import React from 'react';
import { IonCheckbox, IonList, IonItem, IonLabel, IonContent } from '@ionic/react';

var form = [
  { val: 'Maud', isChecked: true },
  { val: 'Ruth', isChecked: false },
  { val: 'Ivvie', isChecked: false }
];

var Checklist: React.FC = () => (
  <IonContent>
    {/*-- Default Checkbox --*/}


    {/*-- Disabled Checkbox --*/}
    <IonCheckbox disabled={true} />

    {/*-- Checked Checkbox --*/}
    <IonCheckbox checked={true} />

    {/*-- Checkbox Colors --*/}
    <IonCheckbox color="danger" />
    <IonCheckbox color="light" />
    <IonCheckbox color="dark" />

    {/*-- Checkboxes in a List --*/}
    <IonList>
      { form.map(({val, isChecked}) => (
        <IonItem key={val}>
          <IonLabel>{val}</IonLabel>
          <IonCheckbox slot="end" value={val} checked={isChecked} color="dark"  />
        </IonItem>
      )) }
    </IonList>
  </IonContent>
);

export default Checklist
