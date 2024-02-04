import './landing.css';
import { useNavigate } from "react-router-dom";
import imagem from "../../img/landingpage.png";

import { Row, Col, Button } from 'react-bootstrap';
import Footer from '../../components/footer/footer';


function Landing(props) {
    const Navigate = useNavigate();

    const goToLogin = () => {
        Navigate("/login")
    }

    function conhecaAPlataforma() {
        window.location.href="#conheca-a-plataforma";
    }

    return (
        <div className="container-fluid p-0">
            <header className='header-landing'>
                <img src={imagem}></img>
                <div className="centered">
                    <div >
                        <h1 className='text-logo'>ENTRENNECTION</h1>
                        <p>Unindo talentos, tranformando negócios.</p>
                        <button className="btn botao" type="button" onClick={() => conhecaAPlataforma()}>Conheça nossa plataforma</button>
                    </div>
                </div>
            </header>

            <div className='white'>
                <div className='text'>
                    <h2>Nossos métodos de trabalho</h2>
                    <br/>
                    <br/>
                    <br/>
                </div>

                <Row className='m-0 px-5'>
                    <Col xs={12} sm={6} md={6} lg={6} xl={3} className='p-3 d-flex justify-content-center'>
                        <div class="cardcont">
                            <div class="img">
                                <span>Conexões</span>
                            </div>

                            <div class="content">
                                <span class="title">Conexões</span>
                                <p class="desc">Bem-vindo à nossa plataforma, o lugar perfeito para conectar-se com pessoas de todo o mundo. Aqui, você encontrará um espaço dedicado a estabelecer novas conexões, expandir sua rede e compartilhar experiências únicas.</p>
                                <p class="descMobile">Bem-vindo à nossa plataforma, o lugar perfeito para conectar-se com pessoas de todo o mundo. Aqui, você encontrará um espaço dedicado a estabelecer novas conexões, expandir sua rede e compartilhar experiências únicas.</p>
                            </div>

                            <div class="arrow">
                                <span>&#8673;</span>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} sm={6} md={6} lg={6} xl={3} className='p-3 d-flex justify-content-center'>
                    <div class="cardcont">
                    <div class="img2">
                        <span>Mentorias</span>
                    </div>

                    <div class="content">
                        <span class="title">Mentorias</span>
                        <p class="desc">Nosso programa de mentoria, onde o conhecimento encontra o crescimento pessoal e profissional. Aqui, acreditamos no poder transformador das conexões mentor-mentorado e nos esforçamos para fornecer uma plataforma que facilite essa jornada enriquecedora.</p>
                        <p class="descMobile">Nosso programa de mentoria, onde o conhecimento encontra o crescimento pessoal e profissional. Aqui, acreditamos no poder transformador das conexões mentor-mentorado e nos esforçamos para fornecer uma plataforma que facilite essa jornada enriquecedora.</p>
                    </div>

                    <div class="arrow">
                        <span>&#8673;</span>
                    </div>
                </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6} xl={3} className='p-3 d-flex justify-content-center'>
                    <div class="cardcont">
                    <div class="img3">
                        <span>Metas</span>
                    </div>

                    <div class="content">
                        <span class="title">Metas</span>
                        <p class="desc">Um espaço dedicado para você traçar seu caminho rumo ao sucesso e realização pessoal. Aqui, acreditamos que metas bem definidas são o combustível que impulsiona grandes conquistas e queremos ajudá-lo a alcançar o máximo do seu potencial.</p>
                        <p class="descMobile">Um espaço dedicado para você traçar seu caminho rumo ao sucesso e realização pessoal. Aqui, acreditamos que metas bem definidas são o combustível que impulsiona grandes conquistas e queremos ajudá-lo a alcançar o máximo do seu potencial.</p>
                    </div>

                    <div class="arrow">
                        <span>&#8673;</span>
                    </div>
                </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6} xl={3} className='p-3 d-flex justify-content-center'>
                    <div class="cardcont">
                    <div class="img4">
                        <span>Ideias</span>
                    </div>

                    <div class="content">
                        <span class="title">Compartilhamento de ideias</span>
                        <p class="desc">Onde a criatividade e a inovação se encontram. Aqui, acreditamos no poder das ideias para transformar o mundo e queremos fornecer um espaço acolhedor e inspirador para que você compartilhe suas perspectivas únicas.</p>
                        <p class="descMobile">Onde a criatividade e a inovação se encontram. Aqui, acreditamos no poder das ideias para transformar o mundo e queremos fornecer um espaço acolhedor e inspirador para que você compartilhe suas perspectivas únicas.</p>
                    </div>

                    <div class="arrow">
                        <span>&#8673;</span>
                    </div>
                </div>
                    </Col>
                </Row>
                <br/><br/>
                <br/>
                <br/>
                <br/>

            </div>

            <div className='bluepart' id="conheca-a-plataforma">
                <div className='conteudo d-flex'>
                    <div className='textbluepart'>
                        <p>Contando sobre a plataforma</p>
                    </div>
                    <div className='video align-self-center'>
                        <iframe src="#" className='iframe-video' frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <br/><br/>
                    <br/><br/>
                </div>
            </div>

            <div className='endpart p-5'>
                <div className='endtext'>
                <br/>
            <br/>
                    <p>Quer ter esses benefícios também?</p>
                </div>
                <div className='btn-cds'>
                    <button className="btn botao2" type="button" onClick={goToLogin}>Cadastre-se em nossa plataforma</button>
                </div>
            </div>
            <br/>
            <br/>
            <Footer></Footer>  
        </div>
    );
}

export default Landing;
