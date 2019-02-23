import React from "react";
import "./products.css";
import YouTube from 'react-youtube';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from 'react-responsive-modal';

export default class Products extends React.Component {
    state = {
        open: false,
      };
     
      onOpenModal = () => {
        this.setState({ open: true });
      };
     
      onCloseModal = () => {
        this.setState({ open: false });
      };
    render(){
        const { open } = this.state; 
        const opts = {
            height: '500',
            width: '965',
            playerVars: { autoplay: 0}
          };
        return(
                <div className="line">
                    <div className="products-wrapper">
                        <h1>
                            {this.props.item.name}
                        </h1>
                        <div className="products">
                            <div className="carousel-wrapper">
                                <Carousel className="carousel">
                                    {this.props.item.photo.map(photo => <img src={photo}/>)}
                                </Carousel>
                            </div>           
                            <div className="name">
                                <div>СТОИМОСТЬ</div>
                                <div>{this.props.item.price}</div>
                                <br></br>
                                <p className="about">{this.props.item.description}</p>
                                <button onClick={this.onOpenModal} className="order" type="submit">Заказать</button>
                                <Modal open={open} onClose={this.onCloseModal} center>
                                    <div className="title_order">Ваш заказ: </div>
                                    <div className="name_order"><span style={{color:'red'}}>{this.props.item.name}</span></div>
                                    <div className="name_order">СТОИМОСТЬ: <br/><span style={{color:'red'}}>{this.props.item.price}</span></div>
                                    <div className="name_order">Наш телефон:</div>
                                    <div className="name_order"><a href="tel:+380672570187">+38 (067) 25-70-187</a></div>
                                </Modal>
                            </div>
                        </div>
                </div>
                <br></br>
                    <div className="about-wrapper">
                            <div className="about-contain-1">

                                <div className="header-about">
                                <h3>ТЕХНИЧИСКИЕ ХАРАКТЕРИСТИКИ</h3>
                                </div>
                                        
                                <div className="contain-about">
                                    {this.props.item.row_about.map(row_about => <div className="row-about"> {row_about}</div>)}     
                                </div>
                                    
                            </div>

                            <div className="about-contain-1">

                                <div className="header-about">
                                <h3>ПРЕИМУЩЕСТВА</h3>
                                </div>

                                <div className="contain-about">
                                    {this.props.item.row_about1.map(row_about1 => <div className="row-about"> {row_about1}</div>)}   
                                </div>
                        </div>
                    </div>
                    <YouTube videoId={this.props.item.youtube} opts={opts} onReady={this._onReady} className="youtube"/>
                <br></br>
            </div>
        );
    }
}