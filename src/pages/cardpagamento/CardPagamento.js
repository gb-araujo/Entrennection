import { Col, Row } from 'react-bootstrap';
import './CardPagamento.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// import { useNavigate } from "react-router-dom";



export default function CardPagamento(props) {
   

//     const goToCompra = () => {
//         Navigate("/compra")
//     }


    return(
    
    <Row className='p-0 m-0'>

        <Col xs={12} sm={6} md={6} lg={6} xl={6} className='d-flex justify-content-center py-4'>
            <Card className='tamanhocard text-center'>
                <Card.Body>
                    <Card.Title className='texttitulo'>Plus Mensal</Card.Title>
                    <Card.Title className='textPreco py-2'><p>(1 Mês)</p></Card.Title>
                    <Card.Text>
                        <span className='TextAzul'>R$39,99</span> / Pagamento Mensal
                    </Card.Text>
                    <br></br>
                    <Card.Text className='PrecoGrandeDois'>
                        R$39,99
                    </Card.Text>
                    <Button className='Assine' >Assine</Button>
                </Card.Body>
            </Card>
        </Col>

        <Col xs={12} sm={6} md={6} lg={6} xl={6} className='d-flex justify-content-center py-4'>
            <Card className='tamanhocard text-center'>
                <Card.Body>
                    <Card.Title className='texttitulo'>Plus Anual</Card.Title>
                    <Card.Title className='textPreco py-2'><p>(12 Meses)</p></Card.Title>
                    <Card.Text>
                        <span className='TextAzul'>R$350,00</span> / A cada 12 Meses
                    </Card.Text>
                    <Card.Text>
                        Equivale a <span className='TextAzul'>R$29,00 / Mês</span>
                    </Card.Text>
                    <Card.Text className='PrecoGrande'>
                        <span classname='TextCinza'>R$350,00</span>
                    </Card.Text>
                    {/* <Button className='Assine' onClick={goToCompra}>Assine</Button> */}
                    <Button className='Assine' >Assine</Button>
                </Card.Body>
            </Card>
        </Col>
        
    </Row>
          
    )
}