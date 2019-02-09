import React from 'react';
import './App.css';
import SmartSlider from "react-smart-slider";
import Head_line from './components/head_line/head_line';
import Body from './components/body/body';
import Footer from './components/footer/footer';



export default class App extends React.Component {
  render() {
    const slidesArray = [
      {
        url: require("./static/image/11.jpg")
      },
      {
        url: require("./static/image/2.jpeg")
      },
      {
        url: require("./static/image/1.jpg")
      },
    ];
    return (
      <div className="App">
      <Head_line/>
      <SmartSlider slides={slidesArray} autoSlide={true} />
      <Body/>
      <Footer/>
      </div>
    );
  }
}


