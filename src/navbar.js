import React, { Component } from 'react';
import logo from './resources/logo.jpeg';
import { BLACK, GREY, WHITE } from './resources/colors.js'; // Importa los colores

export default class Navbar extends Component {
  render() {
    return (
      <nav style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: BLACK, color: WHITE, height: '90px' }}>
        <div>
          <img src={logo} alt="logo" style={{ height: '90px' }} />
        </div>
        <div style={{height:'90px', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }} onMouseOver={(e) => e.target.style.backgroundColor = GREY} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
          <a >Info</a>
        </div>
        <div style={{ height:'90px', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }} onMouseOver={(e) => e.target.style.backgroundColor = GREY} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
          <a >Timetables</a>
        </div>
        <div style={{height:'90px', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }} onMouseOver={(e) => e.target.style.backgroundColor = GREY} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
          <a >Photos</a>
        </div>
        <div style={{height:'90px', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }} onMouseOver={(e) => e.target.style.backgroundColor = GREY} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
          <a >Infrastructure</a>
        </div>
        <div style={{height:'90px', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }} onMouseOver={(e) => e.target.style.backgroundColor = GREY} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
          <a >Contact</a> {/* Nuevo enlace a Contacto */}
        </div>
        <div>
          <select style={{ color: BLACK }}>
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="es">VAL</option>
            <option value="es">RO</option>
          </select>
        </div>
      </nav>
    );
  }
}