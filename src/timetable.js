import React, { Component } from 'react';
import { BLACK, GREY, WHITE } from './resources/colors.js';

export default class Timetable extends Component {
  render() {
    return (
      <div style={{ backgroundColor: WHITE, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ backgroundColor: BLACK, color: GREY, height: '90px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1>Horarios</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          <table style={{ margin: '0 auto', width: '45%', tableLayout: 'fixed' }}>
            <thead>
              <tr>
                <th style={{ padding: '10px', width: '50%' }}>Días de la Semana</th>
                <th style={{ padding: '10px', width: '50%' }}>Horario</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '10px' }}>Jueves a Domingo</td>
                <td style={{ padding: '10px' }}>9:00 a.m. - 13:00 p.m.<br/>16:30 p.m. - 19:00 p.m.</td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>Lunes a Miércoles (Cerrado)</td>
                <td style={{ padding: '10px' }}></td>
              </tr>
            </tbody>
          </table>
          <table style={{ margin: '0 auto', width: '45%', tableLayout: 'fixed' }}>
            <thead>
              <tr>
                <th style={{ padding: '10px', width: '50%' }}>Tipo de entrada</th>
                <th style={{ padding: '10px', width: '50%' }}>Precio (en euros)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '10px' }}>Residentes</td>
                <td style={{ padding: '10px' }}>2</td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>No residentes</td>
                <td style={{ padding: '10px' }}>3.50</td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>Estudiantes y menores</td>
                <td style={{ padding: '10px' }}>Gratis</td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>Jubilados</td>
                <td style={{ padding: '10px' }}>Gratis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}