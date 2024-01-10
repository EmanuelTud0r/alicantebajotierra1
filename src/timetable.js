import React, { Component } from 'react';

export default class Timetable extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Horarios</h1>
        <table style={{ margin: '0 auto', width: '100%', tableLayout: 'fixed' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px', width: '40%' }}>Días de la Semana</th>
              <th style={{ padding: '10px', width: '20%' }}>Horario</th>
              <th style={{ padding: '10px', width: '40%' }}>Precio (en euros)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px' }}>Jueves a Domingo</td>
              <td style={{ padding: '10px' }}>9:00 a.m. - 13:00 p.m.<br/>16:30 p.m. - 19:00 p.m.</td>
              <td style={{ padding: '10px' }}></td>
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Lunes a Miércoles (Cerrado)</td>
              <td style={{ padding: '10px' }}></td>
              <td style={{ padding: '10px' }}></td>
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Residentes</td>
              <td style={{ padding: '10px' }}></td>
              <td style={{ padding: '10px' }}>2</td>
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>No residentes</td>
              <td style={{ padding: '10px' }}></td>
              <td style={{ padding: '10px' }}>3.50</td>
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Estudiantes y menores</td>
              <td style={{ padding: '10px' }}></td>
              <td style={{ padding: '10px' }}>Gratis</td>
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Jubilados</td>
              <td style={{ padding: '10px' }}></td>
              <td style={{ padding: '10px' }}>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}