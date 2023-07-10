import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import avatarConexoes from './images/avatarConexoes.png';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import './CardsConexoes.css';

function BodyShorthandExample() {
  return <Card>
                <Container>
                    <Row>
                        
                        <Col xs={6} sm={2}>
                            <Figure>
                                <Figure.Image
                                    width={120}
                                    height={180}
                                    alt="120x180"
                                    src={avatarConexoes}
                                />
                                <Figure.Caption>
                                 GM CARROS
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col xs={6} sm={2}>
                            <Figure>
                                <Figure.Image
                                    width={120}
                                    height={180}
                                    alt="120x180"
                                    src={avatarConexoes}
                                />
                                <Figure.Caption>
                                    GM CARROS
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col xs={6} sm={2}>
                            <Figure>
                                <Figure.Image
                                    width={120}
                                    height={180}
                                    alt="120x180"
                                    src={avatarConexoes}
                                />
                                <Figure.Caption>
                                    GM CARROS
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col xs={6} sm={2}>
                            <Figure>
                                <Figure.Image
                                    width={120}
                                    height={180}
                                    alt="120x180"
                                    src={avatarConexoes}
                                />
                                <Figure.Caption>
                                    GM CARROS
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col xs={6} sm={2}>
                            <Figure>
                                <Figure.Image
                                    width={120}
                                    height={180}
                                    alt="120x180"
                                    src={avatarConexoes}
                                />
                                <Figure.Caption>
                                    GM CARROS
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col xs={6} sm={2}>
                            <Figure>
                                <Figure.Image
                                    width={120}
                                    height={180}
                                    alt="120x180"
                                    src={avatarConexoes}
                                />
                                <Figure.Caption>
                                    GM CARROS
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        
                    </Row>
                </Container>
        </Card>;
}

export default BodyShorthandExample;