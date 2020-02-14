import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import mod2 from '../img/mod2.jpg'
import $ from 'jquery';


//$(function() {

//});



var Mode = function(){
  return(
    <>
      <div>
        <h5>ini pwa</h5>
      </div>
      <div>
        <img src={mod2} alt="HTML5" height="229" width="129" />
      </div>

    </>
  )
}

export default Mode
