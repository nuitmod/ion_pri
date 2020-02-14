//import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import $ from 'jquery';
import '../css/style.css';


$(function(){
  $('.mobileTab').hide();
  $('#burg').on('click', function(){
  $('.mobileTab').slideToggle(600)
});

})

var Header = function() {
  return(
    <>
     <div className="bar">
      <nav id="desktop">
        <ul>
          <li><a href="#main">main</a></li>
          <li><a href="#mode">mode</a></li>
          <li><a href="#rii">rii</a></li>
          <li><a href="rend">rend</a></li>
          <li><a href="https://yoox.com">yoox.com</a></li>
        </ul>
      </nav>
      </div>
      <div id="burg">
      <a>
        <span className="bar" id="top"></span>
        <span className="bar" id="middle"></span>
        <span className="bar" id="bottom"></span>
      </a>
      </div>
      <div className="mobileTab">
      <nav id="mobile">
        <ul>
          <li><a href="#main">main</a></li>
          <li><a href="mode">mode</a></li>
          <li><a href="rii">rii</a></li>
          <li><a href="#rend">rend</a></li>
          <li><a href="https://yoox.com">yoox.com</a></li>
        </ul>
      </nav>
      </div>
    </>
  )
}

export default Header
