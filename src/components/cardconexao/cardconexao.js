import './cardconexao.css'
import { Col, Row } from 'react-bootstrap';
import imagem from "../../img/cachorro.jpg"

function Cardconexao() {
    return (
        <div className="Cardconexao">
            <div className="card shadow my-4">
                <Row className="card-body">
                    <Col xs={12} sm={12} md={2} lg={2} xl={2} className='d-flex justify-content-center'>
                        <img className="card-img-top circulo" src={imagem} alt="Card image cap"/>
                    </Col>

                    <Col xs={12} sm={12} md={10} lg={10} xl={10}>
                        <Row>
                            <Col xs={12} sm={12} md={10} lg={11} xl={11}>
                                <p className="card-text mb-0 font-nome">Luiz dos Santos</p>
                                <p className="card-text mb-0 font-empresa">Confeitos e festas</p>
                                <p className="card-text mb-0 font-bio">Eu sou o luiz, gosto de viajar, andar de carro, comprar tenis, desenvolver e beber tambem.</p>
                            </Col>
                            <Col xs={12} sm={12} md={2} lg={1} xl={1} className='d-flex justify-content-center'>
                                <button type="button" className="btn btn-light">+</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
  }
  
  export default Cardconexao;