import './postagens.css';
import img from "../../img/ficante-da-barbie.jpg"
import image from "../../img/homemdeferro.jpg"
import imagem from "../../img/cachorro.jpg"
import { Row, Col } from 'react-bootstrap';
import Post from '../post/post';


function Postagens() {
  return (
    <div className='borderpostagens'>
      <Row>
        <Post img={img} texto={"Consegui meu primeiro job"} ></Post>
        <Post  img={image} texto={"Consegui meu primeiro job"}></Post>
        <Post img={imagem} texto={"Consegui meu primeiro job"}></Post>
        
      </Row>
    </div>
  );
}

export default Postagens;