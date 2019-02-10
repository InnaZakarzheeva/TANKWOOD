import React from "react";
import "./head_line.css";
import { slide as Menu } from 'react-burger-menu'
import { Link, animateScrool as scroll} from 'react-scroll';


export default class Head_line extends React.Component {

    render () {
      return (
        <div className="wrapper">
        <div className="menu">
           <Menu>
            <a className="menu-item" href="#main">Главная</a>
            <a className="menu-item" href="#products">Каталог</a>
            <a className="menu-item" href="#contacts" >Контакты</a>
          </Menu>
        </div>
        <div className="block_info">
        
            <div className='logo'>
                TANKW<img src={require("../../static/image/logo.png")} className="img-logo"></img> D
              
               
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


   {/*<a href="tel:+380672570187">+38 (067) 257-01-87</a></div> */}