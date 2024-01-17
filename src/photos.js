import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import logo from './resources/logo.jpeg';
import { BLACK, GREY, WHITE } from './resources/colors.js';


export default class Photos extends Component {
    render() {
        return (
            <div style={{ backgroundColor: GREY }}>
                <h1 style={{ color: BLACK, textAlign: 'center' }}>Fotos</h1>
    
                <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false}>
                    <div>
                        <img src={logo} alt="Imagen 1" style={{ maxHeight: '900px', width: 'auto' }} />
                    </div>
                    <div>
                        <img src={logo} alt="Imagen 2" style={{ maxHeight: '900px', width: 'auto' }} />
                    </div>
                </Carousel>
            </div>
        );
    }
}