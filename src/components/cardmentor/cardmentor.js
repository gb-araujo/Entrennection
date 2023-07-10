import './cardmentor.css'
import { Col, Row } from 'react-bootstrap';
import imagem from "../../img/cachorro.jpg";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Cardmentor = (props) => {
    const [calendario, setCalendario] = useState(false)
    const [passo, setPasso] = useState(3)
    

    const openCalendar = () => {
        console.log(passo)
        props.showCalendar(passo)
    }

    return (
        <Col xs={12} sm={12} md={6} lg={3} xl={3}>
            <div className="Cardmentor">
                <div className="card shadow my-4">
                    <Row className="card-body">
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} className='d-flex justify-content-center'>
                            <img className="card-img-top redondo" src={imagem} alt="Card image cap"/>
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <p className="card-text mb-0 font-nome">Mario</p>
                                    <p className="card-text mb-0 font-descricao">Amo ensinar, adoro ler e meu hobby é andar de bicicleta</p>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} className='d-flex justify-content-center pt-2'>
                                    <Button variant="dark" className='botao-agendar' onClick={openCalendar}><p>Agendar</p></Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </Col>
    );
  }
  
  export default Cardmentor;