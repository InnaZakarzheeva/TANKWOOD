import React, { Component } from 'react' 
import "./footer.css"

export default class Footer extends React.Component {

  render() {
    
    return(
        <div className="footer-wrapper">

        <div className="info-wrapper">
          <div className="tankwood">
          TANKW<img src={require("../../static/image/logo.png")} className="img-logo-footer"></img> D
            </div>
          <div className="social_footer"> 
          {/*<a title="Telegram" href="tg://resolve?domain=380672570187"><img src={require("../../static/image/social/telegram.png")} /> </a>*/}
              <a title="Viber" href="viber://add?number=380672570187"><img src={require("../../static/image/social/viber.png")}></img></a>
              <a title="YouTube" href="https://www.youtube.com/channel/UCr2cIeO_8yhHx0c-yrH8tDw"><img src={require("../../static/image/social/youtube.png")}></img></a>
              <a title="Gmail" href="mailto:andkoff.ua@gmail.com"><img src={require("../../static/image/social/gmail.png")}></img></a>
              {/*<a title="Instagram" href="tel:+380672570187"><img src={require("../../static/image/social/instagramm.png")}></img></a>*/}
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
