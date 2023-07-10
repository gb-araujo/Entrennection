import './plus.css';
import Button from 'react-bootstrap/Button';
import { Col,Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import CardPagamento from '../cardpagamento/CardPagamento';

function Plus() {
  const [pagamento, setPagamento] = useState(false)
 

  return (
    <div className="Plus m-0 p-0">
      {
        pagamento == false ?
        <>
          <h1 className='tituloempresa py-4'>Torne-se Plus</h1>
          <Row className='p-0 m-0'>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} >
              <div className='video-area'>
                <iframe src="https://player.vimeo.com/video/818941970?h=ee85426980" className='videoPlus' frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className='d-flex align-items-center'>
              <p className='textPlus text-center p-4'>Descubra seu potencial empreendedor e alcance o sucesso com nossas mentorias exclusivas. Assine nosso plano "Plus" e tenha acesso a aulas, consultorias e mentorias conduzidas por especialistas renomados do Sebrae e SENAC. Aproveite essa oportunidade única de aprimorar suas habilidades, desenvolver estratégias eficientes e impulsionar o crescimento do seu negócio. Junte-se a uma comunidade de microempreendedores visionários e colabore para alcançar resultados ainda mais expressivos. Assine agora nosso plano "Plus" e descubra o caminho para o sucesso empreendedor.</p>
            </Col>

            <Col xs={12} sm={12} md={12} lg={12} xl={12} className='d-flex justify-content-center py-3'>
              <Button variant="dark" className='botao-login' onClick={() => setPagamento(true)}><p>Quero me tornar PLUS</p></Button>
            </Col>
          </Row>
        </>
        :
        <>
          <h1 className='tituloempresa py-4'>Planos</h1>
          <CardPagamento />
        </>
      }
    </div>
  );
}

export default Plus;
