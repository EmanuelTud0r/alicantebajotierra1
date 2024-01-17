import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';



export default class ContactForm extends Component {
  state = {
    name: '',
    phone: '',
    route: 'Ruta 1',
    people: '',
    date: '',
    time: '',
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    emailjs.send('service_yvfvtrb', 'YOUR_TEMPLATE_ID', this.state, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
handleSubmit = async (event) => {
    event.preventDefault();

   
}

render() {
    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const labelStyle = {
        color: '#000',
        marginBottom: '0.5rem',
    };

    const inputStyle = {
        marginBottom: '1rem',
        padding: '0.5rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
    };

    const buttonStyle = {
        backgroundColor: '#343a40',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        padding: '0.5rem 1rem',
        cursor: 'pointer',
    };

    return (
        <Container style={formStyle}>
            <Row className="justify-content-md-center">
                <Col md="8">
                    <h2 style={{ textAlign: 'center', color: '#000' }}>Reserva tu ruta guiada</h2>
                    <Form onSubmit={this.handleSubmit} style={{ color: '#000', backgroundColor: '#f2f2f2' }}>
                        <Form.Group controlId="name">
                            <label style={labelStyle}>Nombre </label>
                            <Form.Control type="text" name="name" style={inputStyle} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="phone">
                            <label style={labelStyle}>Teléfono </label>
                            <Form.Control type="tel" name="phone" style={inputStyle} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="route">
                            <label style={labelStyle}>Ruta </label>
                            <Form.Control as="select" name="route" style={inputStyle} onChange={this.handleChange}>
                                <option>Ruta 1</option>
                                <option>Ruta 2</option>
                                <option>Ruta 3</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="people">
                            <label style={labelStyle}>Número de personas </label>
                            <Form.Control type="number" name="people" style={inputStyle} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="date">
                            <label style={labelStyle}>Fecha </label>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Form.Control type="date" name="startDate" style={inputStyle} onChange={this.handleChange} />
                                <span style={{ margin: '0 0.5rem' }}>hasta</span>
                                <Form.Control type="date" name="endDate" style={inputStyle} onChange={this.handleChange} />
                            </div>
                        </Form.Group>

                        <Form.Group controlId="time">
                            <label style={labelStyle}>Rango horario </label>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Form.Control type="time" name="startTime" style={inputStyle} onChange={this.handleChange} />
                                <span style={{ margin: '0 0.5rem' }}>hasta</span>
                                <Form.Control type="time" name="endTime" style={inputStyle} onChange={this.handleChange} />
                            </div>
                        </Form.Group>

                        <Button variant="dark" type="submit" style={buttonStyle}>
                            Enviar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
}