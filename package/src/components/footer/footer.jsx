/* eslint-disable */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <div className="footer4 b-t spacer">
            <Container>
                <Row>
                    <Col lg="3" md="6" className="title1">
                        <h5 className="title3">Direccion</h5>
                        <p>Piedra Bolivar Cartagena de Indias, Colombia</p>
                    </Col>
                    <Col lg="3" md="6" className="title1">
                        <h5 className="title3">Telefono</h5>
                        <p>Recepcion :  +57 313 830 8583 <br />Offina :  +605 657 2345</p>
                    </Col>
                    <Col lg="3" md="6" className="title1">
                        <h5 className="title3">Email</h5>
                        <p><a href="#" className="title1">Ecobooking@hotmail.com</a></p>
                    </Col>
                    <Col lg="3" md="6">
                        <h5 className="m-b-20">Redes Sociales</h5>
                        <div className="round-social light">
                            <a href="#" className="link"><i className="fa fa-facebook"></i></a>
                            <a href="#" className="link"><i className="fa fa-twitter"></i></a>
                            <a href="#" className="link"><i className="fa fa-google-plus"></i></a>
                            <a href="#" className="link"><i className="fa fa-youtube-play"></i></a>
                            <a href="#" className="link"><i className="fa fa-instagram"></i></a>
                        </div>
                    </Col>
                </Row>
                <div className="f4-bottom-bar">
                    <Row>
                        <Col md="12">
                            <div className="d-flex font-14 justify-content-between">
                                <div className="m-t-10 m-b-10 copyright">Ecobooking.com</div>
                                <div className="links ms-auto m-t-10 m-b-10">
                                    <a href="#" className="p-10">Inicio</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}
export default Footer;
