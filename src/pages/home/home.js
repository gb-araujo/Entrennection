import './home.css';
import avatarRedondo  from '../../img/avatar-redondo.png';
import { Col,Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Post from '../../components/post/post';
import { FiSend  } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';



function Home() {
  return (
    <div className='Home'>
      <Row className='m-0 p-0'>
        <Col xs={12} sm={12} md={12} lg={10} xl={10} className='p-0'>
          <div className='Feed pt-0 pb-3 mx-0'> 
            <Row className='d-flex m-0'>
              {/* container de nova publicação  */}
              <Col xs={12} sm={12} md={12} lg={12} xl={12} className='d-flex justify-content-center p-0'>
                <Row className='FacaPub d-flex align-items-center py-4'>
                  <Col xs={2} sm={2} md={1} lg={2} xl={1} className='pe-lg-1 d-flex justify-content-center'>
                    <img src={avatarRedondo} width="48px" height="48px"></img>
                  </Col>
                  <Col xs={8} sm={8} md={10} lg={8} xl={10}>
                    <Form.Control aria-label="First name" />
                  </Col>
                  <Col xs={2} sm={2} md={1} lg={2} xl={1} className='d-flex justify-content-center'>
                    <Button className='send'>
                      <FiSend />
                    </Button>    
                  </Col>
                </Row>
              </Col>

              {/* container de postagens */}
              <Col xs={12} sm={12} md={12} lg={12} xl={12} className='p-0 d-flex justify-content-center' style={{height: "fit-content"}}>
                <div className='post-home'>
                  <Post/>
                  <Post/>
                  <Post/>
                  <Post/>
                  <Post/>
                  <Post/>
                </div>
              </Col>
            </Row>
          </div>
        </Col>

        <Col lg={2} xl={2} className='p-0 d-none d-sm-none d-md-none d-lg-block' style={{backgroundColor: "#023859"}}>
          <div className='Trending'>
            <div className='Noticias'>
              <p>Notícias do momento</p>
            </div>
            <div className='CardsNoticiais'>
              <div className='Noticia1'>
                <p>Texto da Noticia1</p>
              </div>
              <div className='Noticia2'>
                <p>Texto da Noticia2</p>
              </div>
              <div className='Noticia3'>
                <p>Texto da Noticia3</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>


      
    </div>
  );
}

export default Home;