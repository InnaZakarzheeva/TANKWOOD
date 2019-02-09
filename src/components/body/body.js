import React from "react";
import "./body.css";
import Gallery from 'react-amazon-gallery' 
import YouTube from 'react-youtube';

let images = [
    require("../../static/image/6.png"),
    require("../../static/image/5.png"),
    require("../../static/image/4.png"),
    require("../../static/image/3.png"),
    require("../../static/image/6.png"),
  ];
  let images2 = [
    require("../../static/image/B12/1.jpg"),
    require("../../static/image/B12/2.jpg"),
    require("../../static/image/B12/3.png"),
    require("../../static/image/B12/4.jpg"),
  ];

export default class Header extends React.Component {
    render(){
        const opts = {
            height: '500',
            width: '965',
            playerVars: { autoplay: 0}
          };
        return(
            <div>
            <div className="line"></div>

            <div className="line">
            <br></br>
            <div className="body_wrapper">
                <button className="change_products" type="submit">Каталог</button>
                <button className="change_products" type="submit">Контакты</button>
            </div>
            
            <br></br>
            </div>
            <div className="line">
                 <div className="products-wrapper">
                 
                    <h1>ИЗМЕЛЬЧИТЕЛЬ ВЕТОК ТМ TANKWOOD 120 TT</h1>
                    <div className="products">
                        <Gallery images={images} wrapStyle="flex" width="700px" height="500px"/>
                    
                        <div className="name">
                            <div>СТОИМОСТЬ</div>
                            <div>58000 ГРН</div>
                            <br></br>
                            <p className="about">Измельчитель веток агрегатируется с тракторами. Имеет в своей комплектации Транспортер. Который в свою очередь повышает производительность труда в разы. И служит отличным помощником в загрузке полученной продукции. Тем самым максимально экономит время работы.</p>
                            <button className="change_products" type="submit">Заказать</button>
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
                                <div className="row-about"><div>Максимальный диаметр ветки</div><div>120 мм!</div></div>
                                <div className="row-about"><div>Максимальный диаметр ветки</div><div>120 мм!</div></div>
                                <div className="row-about"><div>Максимальный диаметр ветки</div><div>120 мм!</div></div>
                                <div className="row-about"><div>Максимальный диаметр ветки</div><div>120 мм!</div></div>
                                <div className="row-about"><div>Максимальный диаметр ветки</div><div>120 мм!</div></div>
                                <div className="row-about"><div>Максимальный диаметр ветки</div><div>120 мм!</div></div>
                                <div className="row-about"><div>Максимальный диаметр ветки</div><div>120 мм!</div></div>
                                <div className="row-about"><div>Максимальный диаметр ветки</div><div>120 мм!</div></div>
                                <div className="row-about"><div>Максимальный диаметр ветки</div><div>120 мм!</div></div>
                            </div>
                        </div>

                        <div className="about-contain-1">

                            <div className="header-about">
                            <h3>ПРЕИМУЩЕСТВА</h3>
                            </div>

                            <div className="contain-about">
                                <div className="row-about"><div>Максимальный диаметр ветки</div><div>120 мм!</div></div>
                                <div className="row-about"><div>Максимальный диаметр ветки</div><div>120 мм!</div></div>
                                <div className="row-about"><div>Максимальный диаметр ветки</div><div>120 мм!</div></div>
                                <div className="row-about"><div>Максимальный диаметр ветки</div><div>120 мм!</div></div>
                                <div className="row-about"><div>Максимальный диаметр ветки</div><div>120 мм!</div></div>
                                <div className="row-about"><div>Максимальный диаметр ветки</div><div>120 мм!</div></div>
                                <div className="row-about"><div>Максимальный диаметр ветки</div><div>120 мм!</div></div>
                                <div className="row-about"><div>Максимальный диаметр ветки</div><div>120 мм!</div></div>
                                <div className="row-about"><div>Максимальный диаметр ветки</div><div>120 мм!</div></div>
                            </div>
                    </div>

                </div>
                <br></br>
        
         <br></br> 
<div className="youtube">
         <YouTube videoId="2kCDv7gUUCY" opts={opts} onReady={this._onReady}/>
</div> 
<br></br>
</div>
<br></br> 

<div className="line">
                 <div className="products-wrapper">
                 <h1>ИЗМЕЛЬЧИТЕЛЬ ВЕТОК ТМ TANKWOOD B12</h1>
                    <div className="products">
                        <Gallery images={images2} wrapStyle="flex" width="700px" height="500px"/>
                    
                        <div className="name">
                            <div>СТОИМОСТЬ</div>
                            <div>14 950 ГРН</div>
                            <br></br>
                            <p className="about">Это отличный помощник по переработки веток в дешёвое топливо. Продукция полученная с помощью данного процесса может быть использована как топливо для пиролизных и твердотопливных котлов, каминов, печей, а также при производстве древесного угля. Блок абсолютно универсален и в зависимости от выбранной модификации может агрегатироваться как с двигателями внутреннего згорания, электродвигателями так и с тракторами.</p>
                            <button className="change_products" type="submit">Заказать</button>
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
                               
                                <div className="row-about"><div>Толщина стенок</div><div>20 мм!</div></div>
                                <div className="row-about"><div> От заточки до заточки</div><div>200-250 м3!</div></div>
                                <div className="row-about"><div>Корпус цельносварной! </div><div>Толщина 20 мм!</div></div>
                                <div className="row-about"><div> Валы квадратные</div><div>55*55 мм!</div></div>
        
                                <div className="row-about"><div>Подшипники закрытого типа!</div><div>210; 308;</div></div>
                                <div className="row-about"><div>Приводной вал на выбор:</div><div>6,8 шлицов!</div></div>
                                
                                <div className="row-about"><div>Толщина ножа</div><div>10 мм!</div></div>
                                <div className="row-about"><div> Угол заточки режущей кромки</div><div>30 градусов!</div></div>
                                <div className="row-about"><div>Закалка твердости!</div><div>53 единицы </div></div>
                                <div className="row-about"><div>Габаритные размеры: Высота</div><div>485 мм!</div></div>
                                <div className="row-about"><div> Ширина</div><div>225 мм!</div></div>
                                <div className="row-about"><div>Длинна </div><div>250мм!</div></div>
                                <div className="row-about"><div>Вес </div><div>70 кг!</div></div>
                            </div>
                        </div>

                        <div className="about-contain-1">

                            <div className="header-about">
                            <h3>ПРЕИМУЩЕСТВА</h3>
                            </div>

                            
                            <div className="contain-about">
                                <div className="row-about"><div>Производительность до</div><div>10.5 м3/час!</div></div>
                                <div className="row-about"><div>Максимальный диаметр ветки</div><div>120 мм!</div></div>
                                <div className="row-about"><div>Длинна полученной заготовки</div><div>60-90 мм!</div></div>
                                <div className="row-about"><div>Шестерни Комбайна! На шлицах! Доп крышки!</div></div>
                                <div className="row-about"><div>Ножи сталь</div><div>65 Г!</div></div>
                                <div className="row-about"><div>Магнитогорского Металургического Комбината!</div></div>
                                <div className="row-about"><div>Наличие всех отверстий для крепежа бункеров, защитных крышек и самого аппарата!</div></div>
                                <div className="row-about"><div>официальная гарантия </div><div>12 месяцев</div></div>
                                
                            </div>
                    </div>

                </div>
                <br></br>
        
         <br></br> 
<div className="youtube">
         <YouTube videoId="9rDCr6_TSMk" opts={opts} onReady={this._onReady}/>
</div> 
<br></br>
</div>
            </div>
        );
    }
}
