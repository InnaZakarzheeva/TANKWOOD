import React from "react";
import "./head_line.css";
import { slide as Menu } from 'react-burger-menu'



export default class Head_line extends React.Component {

    render () {
      return (
        <div className="wrapper">
        <div className="menu">
           <Menu>
            <a className="menu-item" href="#">Home</a>
            <a className="menu-item" href="#">Block1</a>
            <a className="menu-item" href="#">Block2</a>
            <a className="menu-item" href="#">Block3</a>
            <a className="menu-item" href="#">Footer</a>
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