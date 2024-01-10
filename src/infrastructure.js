// infrastructure.js
import React, { Component } from 'react';
import './Infrastructure.css';
import { Carousel } from 'react-responsive-carousel';

export default class Infrastructure extends Component {
  render() {
    return (
      <div>
        <h1>Infrastructure</h1>
        <Carousel>
          <div className="slide">
            <div className="row">
              <div className="column">
                <img src="./resources/logo.jpeg" alt="Image 1" />
              </div>
              <div className="column">
                <ul>
                  <li>Text item 1</li>
                  <li>Text item 2</li>
                  <li>Text item 3</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="row">
              <div className="column">
                <img src="./resources/logo.jpeg" alt="Image 2" />
              </div>
              <div className="column">
                <ul>
                  <li>Text item 4</li>
                  <li>Text item 5</li>
                  <li>Text item 6</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Add more slides here */}
        </Carousel>
      </div>
    );
  }
}