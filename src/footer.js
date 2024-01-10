import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#000', marginTop: 'auto', color: '#fff' }}>
        <p>© {year} Alicante Bajo Tierra. Todos los derechos reservados.</p>
      </footer>
    );
  }
}