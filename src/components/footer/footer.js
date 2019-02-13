import React, { Component } from 'react' 
import "./footer.css"

export default class Footer extends React.Component {

  render() {
    
    return(
        <div className="footer-wrapper">

        <div className="info-wrapper">
          <div className="tankwood">
          TANKW<img src={require("../../static/image/logo.png")} className="img-logo"></img> D
            </div>
          <div className="social_footer"> 
               <img src={require("../../static/image/social/telegram.png")}></img>
               <img src={require("../../static/image/social/viber.png")}></img>
               <img src={require("../../static/image/social/youtube.png")}></img>
               <img src={require("../../static/image/social/gmail.png")}></img>
               <img src={require("../../static/image/social/instagramm.png")}></img>
       </div>
        </div>
          

          <div className="contacts-wrapper">
          Вы можете с нами связаться:

          <div className="contacts">

          <div className="button">
          <form action="tel:+380672570187" >
              <button className="contacts_button" type="submit">
              +38 (067) 257-01-87
              <img src={require("../../static/image/phone.png")} className="img"></img>
              </button>
              
          </form>
          </div>
        
          <div className="button">
          <form action="mailto:andkoff.ua@gmail.com" >
              <button className="contacts_button" type="submit">
              andkoff.ua@gmail.com
              <img src={require("../../static/image/gmail.png")} className="img"></img>
              </button>
              
          </form>
          
          </div>
          </div>

          <div className="post">
          Отправка Новой Поштой
          <img src={require("../../static/image/social/novaposta.png")}></img>
          </div>
          </div>
        </div>
        
    )
  }}
