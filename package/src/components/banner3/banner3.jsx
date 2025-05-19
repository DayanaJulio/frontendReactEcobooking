import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Registrarse = () => {
    const [tipoUsuario, setTipoUsuario] = useState('cliente');

    const handleTipoUsuarioChange = (e) => {
        setTipoUsuario(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar el formulario según el tipo de usuario
        console.log('Tipo de usuario:', tipoUsuario);
        // Más lógica de envío de datos...
    };

    return (
        <div className="static-slider-head banner2" style={{ width: '100%', height: '100vh' }}>
            <Container>
                <Row className="justify-content-center">
                    <Col md="8" className="text-center">
                        <h1 className="title font-bold text-center">Registrarse</h1>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup tag="fieldset">
                                <legend>Seleccione su tipo de usuario:</legend>
                                <FormGroup check inline>
                                    <Label check className="form-check-label">
                                        <Input type="radio" name="tipoUsuario" value="colaborador" checked={tipoUsuario === 'colaborador'} onChange={handleTipoUsuarioChange} />{' '}
                                        Colaborador
                                    </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Label check className="form-check-label">
                                        <Input type="radio" name="tipoUsuario" value="cliente" checked={tipoUsuario === 'cliente'} onChange={handleTipoUsuarioChange} />{' '}
                                        Cliente
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                            <Row>
                                <Col md="4">
                                    <FormGroup>
                                        <Label htmlFor="usuario">Usuario</Label>
                                        <Input type="text" id="usuario" placeholder="Ingrese su usuario" />
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup>
                                        <Label htmlFor="password">Contraseña</Label>
                                        <Input type="password" id="password" placeholder="Ingrese su contraseña" />
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup>
                                        <Label htmlFor="tipoServicio">Tipo de servicio</Label>
                                        <Input type="text" id="tipoServicio" placeholder="Ingrese el tipo de servicio" />
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup>
                                        <Label htmlFor="email">Email</Label>
                                        <Input type="email" id="email" placeholder="Ingrese su correo electrónico" />
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    {tipoUsuario === 'colaborador' && (
                                        <>
                                            <FormGroup>
                                                <Label htmlFor="nombreColaborador">Nombre de colaborador</Label>
                                                <Input type="text" id="nombreColaborador" placeholder="Ingrese su nombre" />
                                            </FormGroup>
                                        </>
                                    )}
                                </Col>
                                <Col md="4">
                                    {tipoUsuario === 'colaborador' && (
                                        <>
                                            <FormGroup>
                                                <Label htmlFor="identificacionColaborador">Número de identificación</Label>
                                                <Input type="text" id="identificacionColaborador" placeholder="Ingrese su identificación" />
                                            </FormGroup>
                                        </>
                                    )}
                                </Col>
                              
                            </Row>
                            <Button type="submit" className="btn btn-success-gradiant font-14">Registrarse</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Registrarse;
