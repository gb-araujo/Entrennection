import './CardPostagens.css'
import { Col, Row } from 'react-bootstrap';
import imagem from "./images/tks.jpg";


function CardPostagens() {
    return (
        <Col xs={12} sm={12} md={6} lg={3} xl={3}>
            <div className="CardPostagens">
                <div className="card shadow my-4">
                    <Row className="card-body">
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} className='d-flex justify-content-center'>
                            <img className="card-img-top quadrado" src={imagem} alt="Card image cap"/>
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <p className="card-text mb-0 font-sobrenome">Agradecimento</p>
                                    <p className="card-text mb-0 font-desc">Esta plataforma está me ajudando bastante.</p>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} className='d-flex justify-content-center pt-2'>
                                    
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    
                </div>
            </div>
        </Col>
    );
  }
  
  export default CardPostagens;