import React from 'react';
import { Container, Row, Col } from 'reactstrap';



const Images = () => {
    return (
        <div className="conocenos" id="imgs-component" style={{ width: '100%', height: '100vh' }}>
            <div>
            <Container>
    <Row className="justify-content-center">
        <Col md="7" className="text-center">
            <h1 className="title1">CONÓCENOS <br /><strong>SOMOS ECOBOOKING</strong></h1>
            <h3 className="title2">Estamos comprometidos con la creación de experiencias de viaje únicas y sostenibles. Que te brinden recuerdos de calidad y amor por el medio ambiente.</h3>
            <Row>
                <Col md="6">
                    <div className="border-box">
                        <h6 className="title2"><strong>Misión:</strong> Nos dedicamos a ofrecer a nuestros clientes una plataforma innovadora y amigable para explorar y reservar experiencias ecoturísticas y alojamientos sostenibles. Nuestro compromiso es promover el turismo responsable y el respeto por la naturaleza, conectandolos con destinos que conserven el medio ambiente y el bienestar de las comunidades locales.</h6>
                    </div>
                </Col>
                <Col md="6">
                    <div className="border-box">
                        <h6 className="title2"><strong>Visión:</strong> Nuestra visión es convertirnos en líderes en la industria del turismo sostenible, siendo reconocidos por nuestra calidad de servicio, compromiso con la preservación del medio ambiente y contribución al desarrollo económico y social de las regiones que visitamos. Queremos inspirar a otros a viajar de manera responsable y consciente.  <br />    <br /></h6>
                    </div>
                </Col>
            </Row>
        </Col>
    </Row>
</Container>
 </div>
        </div>
    );
}

export default Images;
