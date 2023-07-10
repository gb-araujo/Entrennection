import React, { useState, useEffect } from 'react';
import MeuPerfil from '../../pages/meu-perfil/meu-perfil';
import Empresas from '../../pages/empresas/empresas';
import Mentorias from '../../pages/mentorias/mentorias';
import Plus from '../../pages/plus/plus';
import Home from '../../pages/home/home';

import './menu.css';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import SegundaConexao from '../../pages/conexoes/segunda';
import imagem from "./LOGO DEDMODAY.png";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FiMenu } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';

const Menu = (props) => {
  const [key, setKey] = useState('home');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension(){
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
  }

  useEffect(() => {
      const updateDimension = () => {
          setScreenSize(getCurrentDimension())
      }
      window.addEventListener('resize', updateDimension);
      // console.log("largura:", screenSize.width);
      // console.log("altura:", screenSize.height);
  
  
      return(() => {
          window.removeEventListener('resize', updateDimension);
      })
  }, [screenSize])

  const Navigate = useNavigate();
  
  useEffect(() => {
    setSelectedTab(window.location.pathname.substring(1));
    console.log(selectedTab)
  }, []);

  const [selectedTab, setSelectedTab] = useState("home");
  function handleClick(e) {
    console.log(e);
    setSelectedTab(e);
    window.history.replaceState({}, "", "/" + e);
  }

  return (
    <Tab.Container
      id="controlled-tab-example"
      activeKey={selectedTab}
      onSelect={(e) => handleClick(e)}
      className="tabs"
      style={{ backgroundColor: 'PINK !important' }}
    >

      {
        screenSize.width > 768 ?

        // menu desktop
        <Row className='p-0 m-0'>
          <Col md={2} lg={2} className='tabs' style={{ height: "100vh" }}>

            <Nav.Link className='homeImg' eventKey="home">
              <img src={imagem} width={64} height={64} className='my-3 imageredonda' />
            </Nav.Link>

            <Nav variant="pills" className="flex-column">
              <Nav.Item>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="home" title="Home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="meu-perfil" title="Meu Perfil">Meu Perfil</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="conexoes" title="SegundaConexao">Conexões</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="empresas" title="Empresas">Empresas</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="mentorias" title="Mentorias">Mentorias</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="plus" title="Plus">Plus</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/login" className='btn-log px-3 py-2'>Sair</Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col md={10} lg={10} className='offset-md-2 offset-lg-2 p-0'>
            <Tab.Content className='h-100 fundo'>
              <Tab.Pane eventKey="home">
                <Home />
              </Tab.Pane>
              <Tab.Pane eventKey="meu-perfil">
                <MeuPerfil />
              </Tab.Pane>
              <Tab.Pane eventKey="conexoes">
                <SegundaConexao />
              </Tab.Pane>
              <Tab.Pane eventKey="empresas">
                <Empresas />
              </Tab.Pane>
              <Tab.Pane eventKey="mentorias">
                <Mentorias />
              </Tab.Pane>
              <Tab.Pane eventKey="plus">
                <Plus /> 
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>

        :

        // menu mobile
        <Row className='p-0 m-0'>
          <Col xs={12} sm={12} style={{backgroundColor: "#023859"}}>
            <Row>
              <Col className='d-flex align-items-center' xs={2} sm={1}>
                <FiMenu color='white' onClick={handleShow} size={48}/>
              </Col>
              <Col xs={10} sm={11}>
                <Nav.Link className='homeImg' eventKey="home" >
                  <img src={imagem} width={64} height={64} className='my-3 imageredonda' />
                </Nav.Link>
              </Col>
            </Row>
          </Col>

          <Col xs={12} sm={12} className='p-0'>
            <Tab.Content className='h-100 fundo'>
              <Tab.Pane eventKey="home">
                <Home />
              </Tab.Pane>
              <Tab.Pane eventKey="meu-perfil">
                <MeuPerfil />
              </Tab.Pane>
              <Tab.Pane eventKey="conexoes">
                <SegundaConexao />
              </Tab.Pane>
              <Tab.Pane eventKey="empresas">
                <Empresas />
              </Tab.Pane>
              <Tab.Pane eventKey="mentorias">
                <Mentorias />
              </Tab.Pane>
              <Tab.Pane eventKey="plus">
                <Plus />
              </Tab.Pane>
              
            </Tab.Content>
          </Col>
        </Row>
      }

      <Offcanvas style={{backgroundColor:"#023859"}} show={show} onHide={handleClose}>
        <div className='w-100 d-flex justify-content-end py-3'>
          <Offcanvas.Header closeButton closeVariant='white'></Offcanvas.Header>
        </div>
        <Offcanvas.Body>
          <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="home" title="Home" onClick={handleClose}>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="meu-perfil" title="Meu Perfil" onClick={handleClose}>Meu Perfil</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="conexoes" title="SegundaConexao" onClick={handleClose}>Conexões</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="empresas" title="Empresas" onClick={handleClose}>Empresas</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="mentorias" title="Mentorias" onClick={handleClose}>Mentorias</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="plus" title="Plus" onClick={handleClose}>Plus</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/login" className='btn-log px-3 py-2'>Sair</Link>
              </Nav.Item>
            </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Tab.Container>
  );
}

export default Menu;
