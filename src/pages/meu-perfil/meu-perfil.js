import './meu-perfil.css';

import CardConexoes from './components/CardConexoes';
import CardPostagens from './components/CardPostagens';
import { Col,Row } from 'react-bootstrap';

function MeuPerfil() {
  return (
    <div className='meuPerfil'>
        <div className='FotoPerfil'>
        </div>
        <div className='Banner'>

        </div>
        
      <div className='BackgroundFundo'>
        <div className='TextosPerfil'>
            <div className='NomePerfil'>
              <p>Bubu Modas</p>
            </div>
            <div className='Produto'>
              <p>Roupas Premium</p>
            </div>
            <div className='DescricaoPerfil'>
            <p>Vendo roupa a 5 anos e meu negocio está precisando de parceiros.</p>
            </div>
        </div>

        <div className='Conexões'>
          <p>Conexões</p>
          <CardConexoes />
        </div>

        <div className='Postagens'>
          <p>Postagens</p>
          <div className='CardsPostagens'>
              <Row className='p-0 m-0'>
                <CardPostagens/>
                <CardPostagens/>
                <CardPostagens/>
                <CardPostagens/>
              </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeuPerfil;