import React from "react";
import "./head_line.css";
import { slide as Menu } from 'react-burger-menu'


export default class Head_line extends React.Component {

    render () {
      return (
        <div className="wrapper">
        <div className="menu">
           <Menu>
            <a className="menu-item" href="#main">Главная</a>
            <a className="menu-item" href="#working">Как мы работаем</a>
            <a className="menu-item" href="#products">Каталог</a>
            <a className="menu-item" href="#contacts" >Контакты</a>
          </Menu>
        </div>
        <div className="block_info">
        
            <div className='logo'>
                TANKW<img src={require("../../static/image/logo.png")} className="img-logo"></img> D 
            </div>      
       <div className="social"> 
              <a title="Telegram" href="tg://resolve?domain=AndKoff"><img src={require("../../static/image/social/telegram.png")} /> </a>
              <a title="Viber" href="viber://add?number=380672570187"><img src={require("../../static/image/social/viber.png")}></img></a>
              <a title="YouTube" href="https://www.youtube.com/channel/UCr2cIeO_8yhHx0c-yrH8tDw"><img src={require("../../static/image/social/youtube.png")}></img></a>
              <a title="Gmail" href="mailto:andkoff.ua@gmail.com"><img src={require("../../static/image/social/gmail.png")}></img></a>
              <a title="Instagram" href="https://www.instagram.com/tankwood_1/?utm_source=ig_profile_share&igshid=7puk6gwgyjuk"><img src={require("../../static/image/social/instagramm.png")}></img></a>
       </div>
            <div className="but">   
                  <div><a href="tel:+380672570187" className="number">+38 (067) 257-01-87</a></div>                                                                            
                  <form action="tel:+380672570187"><button className="but_tel" type="submit">ПОЗВОНИТЬ</button></form>
            </div>
        </div>
        </div>
        
      );
    }
  }
