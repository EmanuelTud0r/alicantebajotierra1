import React, { Component } from 'react';

export default class Routes extends Component {
  state = {
    selectedText: 'Ruta 1',
    mapColor: 'blue',
    mapText: 'Texto para Ruta 1',
    mapParagraph: 'El punto de encuentro será la Plaza de los Luceros, donde una vez reunido el grupo, el guía comenzará el itinerario y llevará el grupo hacia los tres refugios de la ruta. El primero será el Refugio General Marvá, ubicado en las escalinatas del IES Jorge Juan; el siguiente será el Refugio Marqués de Molins, al lado de la Escuela Oficial de Idiomas; y el último será el Refugio Plaza Músico Óscar Tordera, a una calle del párking de la lonja. Una vez terminada la visita de los refugios, el guía finalizará la ruta en la Plaza 25 de Mayo, detrás del Mercado Central de Alicante.La ruta durará 2h.',
    ruta1: {
      mapText: 'Texto para Ruta 1',
      mapParagraph: 'El punto de encuentro será la Plaza de los Luceros, donde una vez reunido el grupo, el guía comenzará el itinerario y llevará el grupo hacia los tres refugios de la ruta. El primero será el Refugio General Marvá, ubicado en las escalinatas del IES Jorge Juan; el siguiente será el Refugio Marqués de Molins, al lado de la Escuela Oficial de Idiomas; y el último será el Refugio Plaza Músico Óscar Tordera, a una calle del párking de la lonja. Una vez terminada la visita de los refugios, el guía finalizará la ruta en la Plaza 25 de Mayo, detrás del Mercado Central de Alicante.La ruta durará 2h.',
    },
    ruta2: {
      mapText: 'Texto para Ruta 2',
      mapParagraph: 'Este es un párrafo para la Ruta 2',
    },
    ruta3: {
      mapText: 'Texto para Ruta 3',
      mapParagraph: 'Este es un párrafo para la Ruta 3',
    },
  }

  handleTextClick = (text, color, ruta) => {
    this.setState({ selectedText: text, mapColor: color, ...this.state[ruta] });
  }

  render() {
    let content;
    if (this.state.selectedText === 'Ruta 1') {
      content = <iframe src="https://www.google.com/maps/d/embed?mid=1JzLEvt4nlkRImyJJLuuW9LPAXs7zWPc&ehbc=2E312F" width="900" height="900"></iframe>;
    } else if (this.state.selectedText === 'Ruta 2') {
      content = <iframe src="https://www.google.com/maps/d/embed?mid=1G7l6xVaQGdEgvtkUfMJKsr40lVXRAik&ehbc=2E312F" width="900" height="900"></iframe>;
    } else {
      content = <iframe src="https://www.google.com/maps/d/embed?mid=1u41aJIAsZtw0nHivDYBY-BTiA08sJR4&ehbc=2E312F" width="900" height="900"></iframe>;
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#000', color: '#fff', height: '90px', width: '900px' }}>
          <div style={{height:'90px', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }} onMouseOver={(e) => e.target.style.backgroundColor = '#555'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
            <button onClick={() => this.handleTextClick('Ruta 1', 'blue', 'ruta1')} style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}>Ruta 1</button>
          </div>
          <div style={{height:'90px', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }} onMouseOver={(e) => e.target.style.backgroundColor = '#555'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
            <button onClick={() => this.handleTextClick('Ruta 2', 'red', 'ruta2')} style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}>Ruta 2</button>
          </div>
          <div style={{height:'90px', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }} onMouseOver={(e) => e.target.style.backgroundColor = '#555'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
            <button onClick={() => this.handleTextClick('Ruta 3', 'green', 'ruta3')} style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}>Ruta 3</button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <div style={{ height: '900px', width: '900px', backgroundColor: this.state.mapColor }}>
            {content}
            <p>{this.state.mapText}</p>
            <p>{this.state.mapParagraph}</p>
          </div>
          
        </div>
      </div>
    );
  }
}