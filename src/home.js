import React, { Component } from 'react';
import Seccion1 from './Seccion1';
import Footer from './footer';
import Info from './info';
import Infrastructure from './infrastructure';
import Navbar from './navbar';
import Photos from './photos';
import Timetable from './timetable';
import Routes from './routes';

export default class Home extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#f2f2f2', minHeight: '100vh' , display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f2f2f2' }}>
        <Navbar />
        
        <Info />
        
        <Routes />
        
        <Timetable />
        
        <Infrastructure />
        
        <Photos />
        
        <Footer />
      </div>
    );
  }
}