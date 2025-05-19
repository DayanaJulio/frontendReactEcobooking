import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

const HeaderBanner = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para manejar la autenticación
        console.log('Se ha hecho clic en el botón de inicio de sesión');
    };

    return (
        <div className="static-slider-head banner2" style={{ width: '100%', height: '100vh' }}>
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h1 className="title">Ingresar</h1>
                        <Form onSubmit={handleLogin} className="row">
                            <FormGroup className="col-md-6">
                                <Label htmlFor="username">Usuario</Label>
                                <Input type="usermane" className="form-control" id="username" placeholder="Ingresa tu usuario" required />
                            </FormGroup>
                            <FormGroup className="col-md-6">
                                <Label htmlFor="password">Contraseña</Label>
                                <Input type="password" className="form-control" id="password" placeholder="Contraseña" required />
                            </FormGroup>
                            <div className="col-12">
                                <h4 className="subtitle font-light">¿Olvidastes tu contraseña?</h4>
                                <button type="submit" className="btn btn-success-gradiant  font-14">Iniciar Sesión</button>
                                
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBanner;
