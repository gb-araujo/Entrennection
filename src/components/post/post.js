import './post.css'
import { Button, Col, Row } from 'react-bootstrap';
import imagem from "../../img/cachorro.jpg"
import fotoPublicacao from '../../img/conexões.jpeg';
import { AiOutlineLike } from 'react-icons/ai';
import { BiCommentAdd } from 'react-icons/bi';
import { BiShare  } from 'react-icons/bi';
import { BiMailSend  } from 'react-icons/bi';
import { FiSend  } from 'react-icons/fi';
import { MdOutlineAddReaction  } from 'react-icons/md';
import Form from 'react-bootstrap/Form';
import avatarRedondo  from '../../img/avatar-redondo.png';

function Post() {
    return (
        <div className="Post">
            <div className="card shadow my-4">
                <Row className="card-body">
                    {/* imagem de perfil de quem postou */}
                    <Col xs={2} sm={2} md={2} lg={1} xl={1} className='d-flex justify-content-center'>
                        <img className="card-img-top circulo" src={imagem} alt="Card image cap"/>
                    </Col>
                    {/* nome e profissao de quem postou */}
                    <Col xs={10} sm={10} md={10} lg={10} xl={10}>  
                        <p className="card-text mb-0 font-nome">Caique de Oliveira</p>
                        <p className="card-text mb-0 font-empresa">Google - Mentor</p>
                    </Col>

                    {/* legenda do post */}
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='py-1'>
                        <p>Encontro realizado no dia 01/05/2023. Apenas amigos próximos. Foi um ótimo passeio e fico feliz de reencontrar vocês</p>
                    </Col>

                    {/* imagem do post */}
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <img src={fotoPublicacao} width='100%' height='100%' style={{objectFit: "cover"}}></img>
                    </Col>

                    <Row className='p-0 m-0'>
                        <Col xs={3} sm={3} md={3} lg={3} xl={3} className='react'>
                            <button className='iconeLike'>
                                <AiOutlineLike className='icon-react'/>
                                <p className='icon-react'>Gostei</p>
                            </button>
                        </Col>
                        <Col xs={3} sm={3} md={3} lg={3} xl={3} className='react'>
                            <button className='iconeLike'>
                                <BiCommentAdd className='icon-react'/>
                                <p className='icon-react'>Comentar</p>
                            </button>
                        </Col>
                        <Col xs={3} sm={3} md={3} lg={3} xl={3} className='react'>
                            <button className='iconeLike'>
                                <BiShare className='icon-react'/>
                                <p className='icon-react'>Compartilhar</p>
                            </button>
                        </Col>
                        <Col xs={3} sm={3} md={3} lg={3} xl={3} className='react'>
                            <button className='iconeLike'>
                                <BiMailSend className='icon-react'/>
                                <p className='icon-react'>Enviar</p>
                            </button>
                        </Col>
                    </Row>

                    <Row> 
                        {/* <Col  xs={2} sm={2} md={2} lg={1} xl={1} className='d-none d-sm-block'>
                            <img className="card-img-top circulo" src={avatarRedondo} alt="Card image cap"/>
                        </Col> */}
                        <Col xs={11} sm={11} md={11} lg={11} xl={11} > 
                            <Form.Control placeholder='Comentar...'/> 
                        </Col>
                        <Col xs={1} sm={1} md={1} lg={1} xl={1} className='m-0 p-0 d-flex just'>
                            <Button className='send'>
                                <FiSend />
                            </Button>    
                        </Col>
                    </Row>
                </Row>
            </div>
        </div>
    );
  }
  
  export default Post;