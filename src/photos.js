import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



export default class Photos extends Component {
render() {
    return (
        <div>
            <h1>Photos</h1>
            <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false}>
                <div>
                    <img src="./resources/logo.jpeg" alt="Imagen 1" />
                </div>
                <div>
                    <img src="./resources/logo.jpeg" alt="Imagen 2" />
                </div>
            </Carousel>
        </div>
    );
}
}