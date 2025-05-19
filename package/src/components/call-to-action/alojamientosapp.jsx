import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';


const AlojamientosApp = () => {
  const [ciudad, setCiudad] = useState('');
  const [fecha1, setFecha1] = useState('');
  const [fecha2, setFecha2] = useState('');
  const [numAdultos, setNumAdultos] = useState(1);
  const [numNiños, setNumNiños] = useState(0);
  const [numHabitaciones, setNumHabitaciones] = useState(1);
  const [soloAreaRural, setSoloAreaRural] = useState(false);
  const [soloServicio, setSoloServicio] = useState('');
  
  const searchAlojamientos = () => {
    // Lógica de búsqueda backend
    console.log('Ciudad:', ciudad);
    console.log('Fecha 1:', fecha1);
    console.log('Fecha 2:', fecha2);
    console.log('Número de adultos:', numAdultos);
    console.log('Número de niños:', numNiños);
    console.log('Número de habitaciones:', numHabitaciones);
    console.log('Solo área rural:', soloAreaRural);
    console.log('Solo servicio:', soloServicio);
  
    
  };
 
  return (
    
    <div className="alojamientos-container" style={{ width: '100%', height: '100vh' }}>
    <main className="alojamientos-main" id="alojamientosapp">
    <header className="alojamientos-header">
        <h1>Buscador de <br />Servicios Ecoturisticos</h1>
      </header>
        <Container>
          <Row>
            <Col md="4">
              <label htmlFor="ciudad">Ciudad:</label>
              <input
                type="text"
                id="ciudad"
                className="input-field"
                placeholder="Ingrese la ciudad"
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)}
              />
            </Col>
            <Col md="4">
              <label htmlFor="fecha1">Fecha de inicio:</label>
              <input
                type="date"
                id="fecha1"
                className="input-field"
                value={fecha1}
                onChange={(e) => setFecha1(e.target.value)}
              />
            </Col>
            <Col md="4">
              <label htmlFor="fecha2">Fecha de fin:</label>
              <input
                type="date"
                id="fecha2"
                className="input-field"
                value={fecha2}
                onChange={(e) => setFecha2(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col md="4">
              <label htmlFor="numAdultos">Adultos:</label>
              <input
                type="number"
                id="numAdultos"
                className="input-field"
                value={numAdultos}
                onChange={(e) => setNumAdultos(e.target.value)}
              />
            </Col>
            <Col md="4">
              <label htmlFor="numNiños">Niños:</label>
              <input
                type="number"
                id="numNiños"
                className="input-field"
                value={numNiños}
                onChange={(e) => setNumNiños(e.target.value)}
              />
            </Col>
            <Col md="4">
              <label htmlFor="numHabitaciones">Habitaciones:</label>
              <input
                type="number"
                id="numHabitaciones"
                className="input-field"
                value={numHabitaciones}
                onChange={(e) => setNumHabitaciones(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col md="4">
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    checked={soloAreaRural}
                    onChange={() => setSoloAreaRural(!soloAreaRural)}
                  />
                  Solo área rural
                </label>
              </div>
            </Col>
            <Col md="4">
              <label htmlFor="soloServicio">Servicio:</label>
              <input
                type="text"
                id="soloServicio"
                className="input-field"
                placeholder="Ingrese el servicio"
                value={soloServicio}
                onChange={(e) => setSoloServicio(e.target.value)}
              />
            </Col>
            <Col md="4">
              {/* Este es un espacio vacío para mantener la estructura de las columnas */}
            </Col>
          </Row>

        <Row>
          <Col>
            <div className="search-button-container">
              <button className="btn btn-success-gradiant font-14"  onClick={searchAlojamientos}>
              Buscar Servicio
              </button>
            </div>
       </Col>
    </Row>
      </Container>
      </main>
      <div>
       <Link to="/alojamientosapp"></Link> 
      </div>
       <br />
      <a href="/" className="title2 ">Volver al Inicio</a>
    </div>


  );
};

export default AlojamientosApp;
