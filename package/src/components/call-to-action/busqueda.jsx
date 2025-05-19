import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import baruImage from '../../assets/images/features/feature13/baru.jpg';
import castilloImage from '../../assets/images/features/feature13/castillo.jpg';
import hiltonImage from '../../assets/images/features/feature13/hotelhilton.jpg';
import acuarioImage from '../../assets/images/features/feature13/acuario.jpg';
import popaImage from '../../assets/images/features/feature13/popa.jpg';
import coralesImage from '../../assets/images/features/feature13/corales.jpg';



const Busqueda = () => {
    return (
        <div className="conocenos" id="imgs-component1"  style={{ width: '100%', height: '900px' }}>
            <div>
            <Container>
                <Row>
                    <h1 className="title1">Destinos Recomendados</h1>
                    <Col lg="4" className="m-b-30">
                        <h4 className="card-title"> Playa Blancas(BARU)</h4>
                        <img src={baruImage} alt="img" className="img-squar" width="360" />
                        <p className="m-t-15 m-b-0"></p>
                    </Col>
                    <Col lg="4" className="text-center m-b-30">
                        <h4 className="card-title"> Hotel Hilton </h4>
                        <img src={hiltonImage} alt="img" className="img-squar" width="350" />
                        <p className="m-t-15 m-b-0"></p>
                    </Col>
                    <Col lg="4">
                        <h4 className="card-title">Castillo San Felipe</h4>
                        <img src={castilloImage} alt="img" className="img-squar" width="400" />
                        <p className="m-t-15 m-b-0"></p>
                    </Col>
                    <Col lg="4" className="m-b-30">
                        <h4 className="card-title"> Acuario San Martin </h4>
                        <img src={acuarioImage} alt="img" className="img-squar" width="360" height="210"/>
                        <p className="m-t-15 m-b-0"></p>
                    </Col>
                    <Col lg="4" className="text-center m-b-30">
                        <h4 className="card-title"> Hotel Corales de Indias</h4>
                        <img src={coralesImage} alt="img" className="img-squar" width="360" />
                        <p className="m-t-15 m-b-0"></p>
                    </Col>
                    <Col lg="4">
                        <h4 className="card-title">Cerro de la Popa</h4>
                        <img src={popaImage} alt="img" className="img-squar" width="360" />
                        <p className="m-t-15 m-b-0"></p>
                    </Col>
                </Row>
            </Container>

 </div>
        </div>
    );
}

export default Busqueda;
