import React, { Component } from 'react' 
import "./footer.css"

export default class Footer extends React.Component {

  render() {
    
    return(
        <div className="footer-wrapper">

        <div className="info-wrapper">
        <div className="tankwood">
          "Tankwood"
          </div>

          <div className="post">
          Отправка Новой Поштой
          </div>
        </div>
          

          <div className="contacts-wrapper">
          <div className="post">Вы можете с нами связаться:</div>

          <div className="contacts">

          <div className="button">
          <form action="tel:+380672570187" >
              <button className="contacts_button" type="submit">
              <div>+38 (067) 257-01-87</div>
              <div><img src={require("../../static/image/phone.png")} className="img"></img></div>
              </button>
              
          </form>
          </div>
        
          <div className="button">
          <form action="mailto:andkoff.ua@gmail.com" >
              <button className="contacts_button" type="submit">
              <div>andkoff.ua@gmail.com</div>
              <div><img src={require("../../static/image/gmail.png")} className="img"></img></div>
              </button>
              
          </form>
          
          </div>
          </div>
          </div>
        </div>
        
    )
  }}
