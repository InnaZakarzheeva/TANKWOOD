import React from "react";
import "./body.css";
import YouTube from 'react-youtube';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default class Body extends React.Component {
    render(){
        const opts = {
            height: '500',
            width: '965',
            playerVars: { autoplay: 0}
          };
        return(
            <div>
<div className="line">
                 <div className="products-wrapper">

                 <h1>ИЗМЕЛЬЧИТЕЛЬ ВЕТОК ТМ TANKWOOD B12</h1>
                    <div className="products">
                    <div className="carousel-wrapper">
                        <Carousel className="carousel">
                            <div><img src={require("../../static/image/B12/1.jpg") }/></div>
                            <div><img src={ require("../../static/image/B12/2.jpg")} /></div>
                            <div><img src={require("../../static/image/B12/3.png")} /></div>
                            <div><img src={require("../../static/image/B12/4.jpg")} /></div>
                        </Carousel>
                        </div>
                   
                        <div className="name">
                            <div>СТОИМОСТЬ</div>
                            <div>14 950 ГРН</div>
                            <br></br>
                            <p className="about">Это отличный помощник по переработки веток в дешёвое топливо. Продукция полученная с помощью данного процесса может быть использована как топливо для пиролизных и твердотопливных котлов, каминов, печей, а также при производстве древесного угля. Блок абсолютно универсален и в зависимости от выбранной модификации может агрегатироваться как с двигателями внутреннего згорания, электродвигателями так и с тракторами.</p>
                            <form action="tel:+380672570187"> <button className="order" type="submit">Заказать</button></form>
                           
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
               

         <YouTube videoId="9rDCr6_TSMk" opts={opts} onReady={this._onReady} className="youtube"/>

<br></br>
</div>
{/* Tankwood 120T */}


<div className="line">
                 <div className="products-wrapper">
                 <h1>ИЗМЕЛЬЧИТЕЛЬ ВЕТОК ТМ TANKWOOD 120 T</h1>
                    <div className="products">
                    <div className="carousel-wrapper">
                        <Carousel className="carousel">
                            <div><img src={require("../../static/image/120T/1.png") }/></div>
                            <div><img src={ require("../../static/image/120T/2.png")} /></div>
                            <div><img src={require("../../static/image/120T/3.png")} /></div>
                            <div><img src={require("../../static/image//120T/4.png")} /></div>
                        </Carousel>
                        </div>
                   
                        <div className="name">
                            <div>СТОИМОСТЬ</div>
                            <div>23 500 ГРН</div>
                            <br></br>
                            <p className="about">Надежный измельчитель веток который агрегатируеться непосредственно с тракторами. Tankwood 120 T с производительностью 60 м3/смену станет отличным партнером Вашей технике. Заготавливать топливо ещё не было так легко. Привод от карданного вала, на выбор: 6 и 8 шлицов.</p>
                            <form action="tel:+380672570187"> <button className="order" type="submit">Заказать</button></form>
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
                            
                                <div className="row-about"><div>Корпус цельносварной! </div><div>Толщина 20 мм!</div></div>
                                <div className="row-about"><div> Валы квадратные</div><div>55*55 мм!</div></div>
        
                                <div className="row-about"><div>Подшипники закрытого типа!</div><div>210;</div></div>
                                <div className="row-about"><div>Подшипники с посадочным местом под вал </div><div>50 мм</div></div>
                                
                                <div className="row-about"><div>Толщина ножа</div><div>10 мм!</div></div>
                                <div className="row-about"><div>Ширина</div><div>180 мм!</div></div>
                                <div className="row-about"><div> Угол заточки режущей кромки</div><div>30 градусов!</div></div>
                                <div className="row-about"><div>Габаритные размеры: Высота</div><div>1080 мм!</div></div>
                                <div className="row-about"><div> Ширина</div><div>680 мм!</div></div>
                                <div className="row-about"><div>Длинна </div><div>1280 мм!</div></div>
                                <div className="row-about"><div>Вес </div><div>100 кг</div></div>
                            </div>
                        </div>

                        <div className="about-contain-1">

                            <div className="header-about">
                            <h3>ПРЕИМУЩЕСТВА</h3>
                            </div>

                            <div className="contain-about">
                                <div className="row-about"><div>Легко агрегатируется с тракторами.</div></div>
                                <div className="row-about"><div>Максимальный диаметр ветки</div><div>120 мм!</div></div>
                                <div className="row-about"><div>Длинна полученной заготовки</div><div>80-90 мм!</div></div>
                                <div className="row-about"><div> Шестерни с коробки передач комбайна.</div></div>
                                <div className="row-about"><div>Посажены на валы на шлицах!Не шпонка! </div></div>
                                <div className="row-about"><div>Дополнительно с обеих сторон установлены металические крышки для защиты подшипников!</div></div>
                                <div className="row-about"><div>Ножи сталь</div><div>65 Г!</div></div>
                                <div className="row-about"><div>Позволяет рубить не только ветки но и доски приличной ширины! </div></div>
                                <div className="row-about"><div>Полуавтоматическая сварка.Порошковая покраска.</div></div>
                                <div className="row-about"><div>Надежность от производителя.</div></div>
                               
                               
                                
                            </div>
                    </div>

                </div>
                

         <YouTube videoId="iYDRoTLO-z0" opts={opts} onReady={this._onReady} className="youtube"/>
 
<br></br>
</div>

{/* Tankwood 120 TPRO */}


<div className="line">
                 <div className="products-wrapper">
                 <h1>ИЗМЕЛЬЧИТЕЛЬ ВЕТОК ТМ TANKWOOD 120 TPRO</h1>
                    <div className="products">
                    <div className="carousel-wrapper">
                        <Carousel className="carousel">
                            <div><img src={require("../../static/image/120TPRO/1.png") }/></div>
                            <div><img src={ require("../../static/image/120TPRO/2.png")} /></div>
                            <div><img src={require("../../static/image/120TPRO/3.png")} /></div>
                            <div><img src={require("../../static/image/120TPRO/4.png")} /></div>
                            <div><img src={require("../../static/image/120TPRO/5.png")} /></div>
                            <div><img src={require("../../static/image/120TPRO/6.png")} /></div>
                        </Carousel>
                        </div>
                   
                        <div className="name">
                            <div>СТОИМОСТЬ</div>
                            <div>26 500 ГРН</div>
                            <br></br>
                            <p className="about">Tankwood 120 Tpro предназначен заготавливать топливо с веток и дров. Главной особенностью является большой диаметр перерабатываемой ветки и наличие конусного дровокола, с помощью которого можно быстро колоть дрова.</p>
                            <form action="tel:+380672570187"> <button className="order" type="submit">Заказать</button></form>
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
                           
                                <div className="row-about"><div>Корпус цельносварной! </div><div>Толщина 20 мм!</div></div>
                                <div className="row-about"><div> Валы квадратные</div><div>55*55 мм!</div></div>
                                <div className="row-about"><div> Дровокол.Производительность </div><div>7.5м3/час.</div></div>
                                
                                <div className="row-about"><div>Подшипники закрытого типа!</div><div>210;</div></div>
                                <div className="row-about"><div>Подшипники с посадочным местом под вал </div><div>50 мм</div></div>
                                <div className="row-about"><div>Ножи высокопрочная сталь</div><div>65 Г. </div></div>
                                <div className="row-about"><div>Толщина ножа</div><div>10 мм!</div></div>
                                <div className="row-about"><div>Ширина</div><div>180 мм!</div></div>
                                <div className="row-about"><div> Угол заточки режущей кромки</div><div>30 градусов!</div></div>
                               
                            </div>
                        </div>

                        <div className="about-contain-1">

                            <div className="header-about">
                            <h3>ПРЕИМУЩЕСТВА</h3>
                            </div>
                        
                           
                            <div className="contain-about">
                               
                                <div className="row-about"><div>Максимальный диаметр ветки</div><div>12 cм!</div></div>
                                <div className="row-about"><div>Длинна полученной заготовки</div><div>80-90 мм!</div></div>
                                <div className="row-about"><div> Шестерни с коробки передач комбайна.</div></div>
                                <div className="row-about"><div>Посажены на валы на шлицах!Не шпонка! </div></div>

                                <div className="row-about"><div>Дополнительно с обеих сторон установлены металические крышки для защиты подшипников!</div></div>
                                
                                <div className="row-about"><div>Позволяет рубить не только ветки но и доски приличной ширины! </div></div>
                                <div className="row-about"><div>Порошковая покраска.Шестерни посажены на шлицы.</div></div>
                                <div className="row-about"><div>Надежность от производителя.</div></div>
                               
                               
                                
                            </div>
                    </div>

                </div>
               
         <YouTube videoId="iYDRoTLO-z0" opts={opts} onReady={this._onReady} className="youtube"/>
<br></br>
</div>

{/*Tankwood 12B16 */}
<div className="line">
                 <div className="products-wrapper">
                 <h1>ИЗМЕЛЬЧИТЕЛЬ ВЕТОК ТМ TANKWOOD 12B16</h1>
                    <div className="products">
                    <div className="carousel-wrapper">
                         <Carousel className="carousel">
                            <div><img src={require("../../static/image/12B16/1.jpg") }/></div>
                            <div><img src={ require("../../static/image/12B16/2.jpg")} /></div>
                            <div><img src={require("../../static/image/12B16/3.jpg")} /></div>
                            <div><img src={require("../../static/image/12B16/4.jpg")} /></div>
                        </Carousel>
                        </div>
                   
                        <div className="name">
                            <div>СТОИМОСТЬ</div>
                            <div>42 000 ГРН</div>
                            <br></br>
                            <p className="about">Служит отличным помощником в заготовке дешёвого топлива. Может устанавливаться на автомобильный прицеп. И быть мобильным. Также его можно устанавливать стационарно. Аппарат полностью автономный. Одной заправки топлива А-92 будет вполне достаточно для рабочей смены.</p>
                            <form action="tel:+380672570187"> <button className="order" type="submit">Заказать</button></form>
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
                            
                                <div className="row-about"><div> Двигатель Weima</div><div>WM-190 FSE.</div></div>
                                <div className="row-about"><div> Мощность </div><div>16 л.с!  </div></div>
                                <div className="row-about"><div>Расход топлива А-92</div><div>= 900 грамм/час! </div></div>
                                <div className="row-about"><div>Максимальный диаметр ветки</div><div>120 мм!</div></div>
                                <div className="row-about"><div>Длинна полученной заготовки</div><div>60-90 мм!</div></div>
                                <div className="row-about"><div>Маховик до </div><div>30 кг.</div></div>
                             
                                <div className="row-about"><div>Габаритные размеры: Высота</div><div>1390 мм!</div></div>
                                <div className="row-about"><div> Ширина</div><div>580 мм!</div></div>
                                <div className="row-about"><div>Длинна </div><div>1280 мм!</div></div>
                                <div className="row-about"><div>Вес </div><div>175 кг</div></div>
                            </div>
                        </div>

                        <div className="about-contain-1">

                            <div className="header-about">
                            <h3>ПРЕИМУЩЕСТВА</h3>
                            </div>
                           
                            <div className="contain-about">
                                <div className="row-about"><div>Блок Tankwood B12!</div></div>
                                <div className="row-about"><div>Мобильность аппарата.Легко устанавливается на авто-прицеп.</div></div>
                                <div className="row-about"><div>Автономность аппарата.</div></div>
                                <div className="row-about"><div>Порошковая покраска.</div></div>
                                <div className="row-about"><div>Максимальная роизводительность</div><div> 10.5 м3/час!</div></div>
                                <div className="row-about"><div>Придаёт большую инерционную силу.</div></div>
                                
                            </div>
                    </div>

                </div>
               

         <YouTube videoId="5rk2xbW01bc" opts={opts} onReady={this._onReady} className="youtube"/>

<br></br>
</div>

{/* Tankwood 12B16K */}

<div className="line">
                 <div className="products-wrapper">
                 <h1>ИЗМЕЛЬЧИТЕЛЬ ВЕТОК ТМ TANKWOOD 12B16K</h1>
                    <div className="products">
                    <div className="carousel-wrapper">
                        <Carousel className="carousel">
                            <div><img src={require("../../static/image/12B16K/1.jpg") }/></div>
                            <div><img src={ require("../../static/image/12B16K/2.jpg")} /></div>
                            <div><img src={require("../../static/image/12B16K/3.jpg")} /></div>
                            <div><img src={require("../../static/image/12B16K/4.jpg")} /></div>
                            <div><img src={require("../../static/image/12B16K/5.jpg")} /></div>
                        </Carousel>
                        </div>
                   
                        <div className="name">
                            <div>СТОИМОСТЬ</div>
                            <div>45 000 ГРН</div>
                            <br></br>
                            <p className="about">Служит отличным помощником в заготовке дешёвого топлива. Имеет колёсную базу. Два фаркопа что в свою очередь позволяет легко транспортировать аппарат и прицеп. Одной заправки топлива А-92 будет вполне достаточно для рабочей смены.</p>
                            <form action="tel:+380672570187"> <button className="order" type="submit">Заказать</button></form>
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
                            
                                <div className="row-about"><div> Двигатель Weima</div><div>WM-190 FSE.</div></div>
                                <div className="row-about"><div> Мощность </div><div>16 л.с!  </div></div>
                                <div className="row-about"><div>Расход топлива А-92</div><div>= 900 грамм/час! </div></div>
                                <div className="row-about"><div>Максимальный диаметр ветки</div><div>120 мм!</div></div>
                                <div className="row-about"><div>Длинна полученной заготовки</div><div>60-90 мм!</div></div>
                                <div className="row-about"><div>Маховик до </div><div>30 кг.</div></div>
                             
                                <div className="row-about"><div>Габаритные размеры: Высота</div><div>1390 мм!</div></div>
                                <div className="row-about"><div> Ширина</div><div>580 мм!</div></div>
                                <div className="row-about"><div>Длинна </div><div>1280 мм!</div></div>
                                <div className="row-about"><div>Вес </div><div>175 кг</div></div>
                            </div>
                        </div>

                        <div className="about-contain-1">

                            <div className="header-about">
                            <h3>ПРЕИМУЩЕСТВА</h3>
                            </div>
 
                            <div className="contain-about">
                                <div className="row-about"><div>Блок Tankwood B12!</div></div>
                                <div className="row-about"><div>Мобильность аппарата.Легко транспортируется.</div></div>
                                <div className="row-about"><div>Два фаркопа.</div></div>
                                <div className="row-about"><div>Порошковая покраска.</div></div>
                                <div className="row-about"><div>Максимальная роизводительность</div><div> 10.5 м3/час!</div></div>
                                <div className="row-about"><div>Максимальная скорость до </div><div> 70 км/час.</div></div>
                                
                            </div>
                    </div>

                </div>
               

         <YouTube videoId="q0abZYe-9Es" opts={opts} onReady={this._onReady} className="youtube"/>

<br></br>
</div>

{/* Tankwood 12B18KPRO */}



<div className="line">
                 <div className="products-wrapper">
                 <h1>ИЗМЕЛЬЧИТЕЛЬ ВЕТОК ТМ TANKWOOD 12B18KPRO</h1>
                    <div className="products">
                    <div className="carousel-wrapper">
                         <Carousel className="carousel">
                            <div><img src={require("../../static/image/12B18KPRO/1.png") }/></div>
                            <div><img src={ require("../../static/image/12B18KPRO/2.png")} /></div>
                            <div><img src={require("../../static/image/12B18KPRO/3.png")} /></div>
                            <div><img src={require("../../static/image/12B18KPRO/4.png")} /></div>
                            <div><img src={require("../../static/image/12B18KPRO/5.png")} /></div>
                        </Carousel>
                    </div>
                  
                        <div className="name">
                            <div>СТОИМОСТЬ</div>
                            <div>52 000 ГРН</div>
                            <br></br>
                            <p className="about">Tankwood 12B18Kpro улучшеный измельчитель веток. Имеет в своём арсенале мощный двигатель, электростартер, большие колёса усиленную раму, широкую колесную базу и маховик.</p>
                            <form action="tel:+380672570187"> <button className="order" type="submit">Заказать</button></form>
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
                           
                                <div className="row-about"><div>Двигатель Weima</div><div>192 FS. 18 л.с! </div></div>
                                <div className="row-about"><div>Расход топлива</div><div> 1.2 л/час!</div></div>
                                <div className="row-about"><div> Габаритные размеры: высота</div><div>1400мм!</div></div>
                                <div className="row-about"><div>Ширина</div><div> 1290 мм!</div></div>
                                <div className="row-about"><div>Длинна</div><div> 2250 мм!</div></div>
                                <div className="row-about"><div>Вес</div><div> 195кг!</div></div>
                                <div className="row-about"><div>Максимальный диаметр</div><div> 120 мм.</div></div>
                                <div className="row-about"><div> Большие колёса </div><div>16*6 50-8.</div></div>
                                
                               
                               
                            </div>
                        </div>

                        <div className="about-contain-1">

                            <div className="header-about">
                            <h3>ПРЕИМУЩЕСТВА</h3>
                            </div>
                        
                            <div className="contain-about">
                                <div className="row-about"><div>Режущий блок Tankwood B12. </div></div>
                                <div className="row-about"><div>Производительность до </div><div>12м3/час.</div></div>
                                <div className="row-about"><div> Электростартер.</div></div>
                                <div className="row-about"><div> Аккумулятор.</div></div>
                                <div className="row-about"><div> Маховик.</div></div>
                               
                                <div className="row-about"><div> Усиленная рама. </div></div>
                                
                            </div>
                    </div>

                </div>
               
         <YouTube videoId="6t7smtVR4AI" opts={opts} onReady={this._onReady} className="youtube"/>

<br></br>
</div>

{/* Tankwood 120 TT*/}

<div className="line">
                 <div className="products-wrapper">
                 
                    <h1>ИЗМЕЛЬЧИТЕЛЬ ВЕТОК ТМ TANKWOOD 120 TT</h1>
                    <div className="products">
                    <div className="carousel-wrapper">
                        <Carousel className="carousel">
                            <div><img src={require("../../static/image/120TT/6.png") }/></div>
                            <div><img src={ require("../../static/image/120TT/5.png")} /></div>
                            <div><img src={require("../../static/image/120TT/4.png")} /></div>
                            <div><img src={require("../../static/image/120TT/3.png")} /></div>
                        </Carousel>
                  </div>
                
                        <div className="name">
                            <div>СТОИМОСТЬ</div>
                            <div>58000 ГРН</div>
                            <br></br>
                            <p className="about">Измельчитель веток агрегатируется с тракторами. Имеет в своей комплектации Транспортер. Который в свою очередь повышает производительность труда в разы. И служит отличным помощником в загрузке полученной продукции. Тем самым максимально экономит время работы.</p>
                            <form action="tel:+380672570187"> <button className="order" type="submit">Заказать</button></form>
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
                                <div className="row-about"><div>Производительность от </div><div>7.5 м3/час.</div></div>
                                <div className="row-about"><div>Длинна полученой заготовки</div><div>80 - 90 мм.</div></div>
                               
                            </div>
                        </div>

                        <div className="about-contain-1">

                            <div className="header-about">
                            <h3>ПРЕИМУЩЕСТВА</h3>
                            </div>

                            <div className="contain-about">
                                <div className="row-about"><div>Полуавтоматическая сварка.</div></div>
                                <div className="row-about"><div>Порошковая покраска.</div></div>
                                <div className="row-about"><div>Наличие транспортера.</div></div>
                                
                            </div>
                    </div>

                </div>
               
         <YouTube videoId="2kCDv7gUUCY" opts={opts} onReady={this._onReady} className="youtube"/>

<br></br>
</div>

{/* Tankwood 12B18KT */}

<div className="line">
                 <div className="products-wrapper">
                 <h1>ИЗМЕЛЬЧИТЕЛЬ ВЕТОК ТМ TANKWOOD 12B18KT</h1>
                    <div className="products">
                    <div className="carousel-wrapper">
                         <Carousel className="carousel">
                            <div><img src={require("../../static/image/12B18KT/1.jpg") }/></div>
                            <div><img src={require("../../static/image/12B18KT/2.jpg")} /></div>
                            <div><img src={require("../../static/image/12B18KT/3.jpg")} /></div>
                            <div><img src={require("../../static/image/12B18KT/4.jpg")} /></div>
                            <div><img src={require("../../static/image/12B18KT/5.jpg")} /></div>
                            <div><img src={require("../../static/image/12B18KT/6.jpg")} /></div>
                            <div><img src={ require("../../static/image/12B18KT/7.jpg")} /></div>
                        </Carousel>
                        </div>
                  
                        <div className="name">
                            <div>СТОИМОСТЬ</div>
                            <div>83 500 ГРН</div>
                            <br></br>
                            <p className="about">Tankwood 12B18KT улучшеный измельчитель веток. Имеет транспортёр. Служит для быстрой заготовки дров в больших количествах. С малыми трудовыми затратами.</p>
                            <form action="tel:+380672570187"> <button className="order" type="submit">Заказать</button></form>
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
                            
                                <div className="row-about"><div> Двигатель Weima 192 FS.</div><div>18 л.с!</div></div>
                                <div className="row-about"><div>  Расход топлива</div><div>1.2 л/час! </div></div>
                                <div className="row-about"><div>Большой диаметр ветки</div><div>120 мм!</div></div>
                                <div className="row-about"><div>Габаритные размеры: Высота</div><div>2900 мм!</div></div>
                                <div className="row-about"><div> Ширина</div><div>1290 мм!</div></div>
                                <div className="row-about"><div>Длинна </div><div>1300 мм!</div></div>
                                <div className="row-about"><div>Вес </div><div>275 кг</div></div>
                            </div>
                        </div>

                        <div className="about-contain-1">

                            <div className="header-about">
                            <h3>ПРЕИМУЩЕСТВА</h3>
                            </div>
                            

                            <div className="contain-about">
                                <div className="row-about"><div>Режущий блок Tankwood B12.</div></div>
                                <div className="row-about"><div>Наличие транспортёра!</div></div>
                                <div className="row-about"><div>Большие колёса.</div></div>
                                <div className="row-about"><div>Фаркоп.</div></div>
                                <div className="row-about"><div>Производительность</div><div> 10.5 м3/час!</div></div>
                                
                            </div>
                    </div>

                </div>
               

         <YouTube videoId="oYZ-aJTtOBk" opts={opts} onReady={this._onReady} className="youtube"/>
 
<br></br>
</div>

            {/* Tankwood 12B18KAT */}

<div className="line">
                 <div className="products-wrapper">
                 <h1>ИЗМЕЛЬЧИТЕЛЬ ВЕТОК ТМ TANKWOOD 12B18KAT</h1>
                    <div className="products">
                    <div className="carousel-wrapper">
                         <Carousel className="carousel">
                            <div><img src={require("../../static/image/12B18KAT/1.jpg") }/></div>
                            <div><img src={require("../../static/image/12B18KAT/2.jpg")} /></div>
                            <div><img src={require("../../static/image/12B18KAT/3.jpg")} /></div>
                            <div><img src={require("../../static/image/12B18KAT/4.jpg")} /></div>
                        </Carousel>
                        </div>
                  
                        <div className="name">
                            <div>СТОИМОСТЬ</div>
                            <div>95 000 ГРН</div>
                            <br></br>
                            <p className="about">Измельчитель веток TANKWOOD 12B18KAT превосходный помощник как фермерским хозяйствам так и большим предприятиям. Обеспечивает быструю слаженную работу по переработки древесины в деловое топливо в больших количествах. </p>
                            <form action="tel:+380672570187"> <button className="order" type="submit">Заказать</button></form>
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
                                <div className="row-about"><div>Длинна полученной заготовки</div><div>50-70мм! </div></div>
                                <div className="row-about"><div>Производительность</div><div>12 м3/час!</div></div>
                                <div className="row-about"><div>Расход топлива</div><div>1.2-1.5 л/час А-92!</div></div>
                                <div className="row-about"><div> Высота выгрузки</div><div>2.9 м!</div></div>
                            </div>
                        </div>

                        <div className="about-contain-1">

                            <div className="header-about">
                            <h3>ПРЕИМУЩЕСТВА</h3>
                            </div>
                            

                            <div className="contain-about">
                                <div className="row-about"><div>Большая колёсная база!</div></div>
                                <div className="row-about"><div>Наличие транспортёра!</div></div>
                                <div className="row-about"><div>При рабочем положении не требуется подпорок!</div></div>
                                <div className="row-about"><div>Высокая производительность!</div></div>
                                <div className="row-about"><div>Порошковая покраска!</div><div>
                                
                            </div>
                    </div>

                </div>
               

         <YouTube videoId="oYZ-aJTtOBk" opts={opts} onReady={this._onReady} className="youtube"/>
 
<br></br>
</div>

            </div>
        );
    }
}
