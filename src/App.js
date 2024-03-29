import React, { Component } from 'react';
import './resources/styles.css'
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VunueNfo from './components/venueNfo';
import Highlights from './components/Highlights';
import Description from './components/Highlights/Description';
import Pricing from './components/Pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer'




class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "3000px", background: "#ffffff" }} >
        <Header></Header>
        <Element name="featured">
          <Featured />
        </Element>
        <Element name="venuenfo">
          <VunueNfo />
        </Element>
        <Element name="highlights">
          <Highlights />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>

        <Footer />
      </ div>
    );
  }
}

export default App;
