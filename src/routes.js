import React, { Component } from 'react';

export default class Routes extends Component {
  state = {
    selectedText: 'Ruta 1',
    mapColor: 'blue',
  }

  handleTextClick = (text, color) => {
    this.setState({ selectedText: text, mapColor: color });
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <hr />
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <div onClick={() => this.handleTextClick('Ruta 1', 'blue')} style={{ margin: '0 10px' }}>Ruta 1</div>
          <div onClick={() => this.handleTextClick('Ruta 2', 'red')} style={{ margin: '0 10px' }}>Ruta 2</div>
          <div onClick={() => this.handleTextClick('Ruta 3', 'green')} style={{ margin: '0 10px' }}>Ruta 3</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <div style={{ height: '600px', width: '600px', backgroundColor: this.state.mapColor }}>
            <h2>Aquí va el mapa interactivo. El texto seleccionado es: {this.state.selectedText} </h2>
          </div>
          <ul>
            <li>Elemento de texto 1</li>
            <li>Elemento de texto 2</li>
            <li>Elemento de texto 3</li>
          </ul>
        </div>
      </div>
    );
  }
}