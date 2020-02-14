import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import mode from '../img/mode.jpg'
import $ from 'jquery';


$(function() {
  $('#i1').text("jq text")
});



var Main = function(){
  return(
    <>
      <div>
        <h5>ini pwa</h5>
      </div>
      <div>
        <img src={mode} alt="HTML5" height="229" width="129" />
      </div>
        <a href="./check">go to check</a>
        <div id="i1">input for jq</div>
    </>
  )
}

export default Main
