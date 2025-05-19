import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';

const HeaderBanner2 = () => {
    return (
        <div className="static-slider-head banner2" style={{ width: '100%', height: '100vh' }}>
            <Container>
                <Row className="justify-content-center align-items-center" style={{ height: '100%' }}>
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h1 className="title">ECOBOOKING</h1>
                        <h4 className="subtitle font-light">TE ANIMAMOS A ELEGIR UN LUGAR PERFECTO PARA TI<br /> "Acogedor y Natural"</h4>
                        <div className="button-container">
                            <Link to="/#imgs-component" className="btn btn-success-gradiant font-14">Conocenos</Link>
                            <Link to="/#alojamientosapp" className="btn btn-success-gradiant font-14">Buscar Servicio</Link>
                            <Link to="/#imgs-component1" className="btn btn-success-gradiant font-14">Destinos Recomendados</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBanner2;
