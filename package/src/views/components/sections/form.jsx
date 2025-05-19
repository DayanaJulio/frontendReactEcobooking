import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Registrarse = () => {
    return ( 
        <div className="conocenos" id="imgs-component"  style={{ width: '100%', height: '100vh' }}>
            <div >
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <br />
                            <br />
                            <br />
                            <h1 className="title font-bold">Registro</h1>
                            <h6 className="subtitle">Aquí puedes registrarte para acceder a nuestros servicios. Es fácil y rápido.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col md="12">
                        <Form className="row">
                            <FormGroup className="col-md-6">
                                <Label htmlFor="name">Nombre de usuario</Label>
                                <Input type="text" className="form-control" id="name" placeholder="Ingrese su nombre de usuario" />
                            </FormGroup>
                            <FormGroup className="col-md-6">
                                <Label htmlFor="email">Correo electrónico</Label>
                                <Input type="email" className="form-control" id="email" placeholder="Ingrese su correo electrónico" />
                            </FormGroup>
                            <FormGroup className="col-md-6">
                                <Label htmlFor="password">Contraseña</Label>
                                <Input type="password" className="form-control" id="password" placeholder="Ingrese su contraseña" />
                            </FormGroup>
                            <FormGroup className="col-md-6">
                                <Label htmlFor="confirmpwd">Confirmar contraseña</Label>
                                <Input type="password" className="form-control" id="confirmpwd" placeholder="Confirme su contraseña" />
                            </FormGroup>
                            <FormGroup className="col-md-6">
                                <Label htmlFor="ciudad">Ciudad</Label>
                                <Input type="text" className="form-control" id="ciudad" placeholder="Ingrese su ciudad" />
                            </FormGroup>
                            <FormGroup className="col-md-6">
                                <Label htmlFor="servicio">Tipo de servicio</Label>
                                <Input type="text" className="form-control" id="servicio" placeholder="Ingrese el tipo de servicio" />
                            </FormGroup>
                            <Col md="12">
                                <Button type="submit" className="btn btn-success waves-effect waves-light m-r-10">Registrarse</Button>
                                <Button type="submit" className="btn btn-inverse waves-effect waves-light">Cancelar</Button>
                            </Col>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Registrarse;
