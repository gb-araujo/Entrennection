import './Compra.css';
import { Col, Row } from 'react-bootstrap';
import Parceiros from './Pagamento.png';
import Pix from './logo-pix.png';
import Paypal from './logo-paypal-1536.png';
import Boleto from './imgboleto.png';
import Cartao from './pagamento-com-cartao-de-credito.png';

export default function Compra() {
    return (
       <div className='pagePagamentos'>
        <div className='DadosCompra'>
            <div className='Textos'>
                <div className='nome'>
                    <p className='Pmargin'>Nome</p>
                    <input type="text" id="nome" name="nome" placeholder='Primeiro Nome' required></input>
                </div>
                <div className='sobrenome'>
                    <p className='Pmargin'>Sobrenome</p>
                    <input type="text" id="sobrenome" name="sobrenome" placeholder='Sobrenome' required></input>
                </div>
                <div className='Cpf'>
                    <p className='Pmargin'>CPF</p>
                    <input type="text" id="cpf" name="cpf" placeholder='xxx.xxx.xxx-xx' pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" required></input>
                    </div>
                <div className='Cartao'>
                    <p className='Pmargin'>Número do Cartão</p>
                    <input type="text" id="cartao" name="cartao" placeholder='xxxx xxxx xxxx xxxx' pattern="\d{4}\s\d{4}\s\d{4}\s\d{4}" required></input>
                    </div>
                <div className='Validade'>
                    <p className='Pmargin'>Data de validade</p>
                    <input type="text" id="validade" name="validade" placeholder="MM/AA" pattern="\d{2}/\d{2}" required></input>
                    </div>
                    <p className='Pmargin'>Código de Segurança</p>
                    <input type="text" id="codseguranca" name="codseguranca" placeholder='xxx' pattern="\d{3}" required></input>
                    
                </div>
                <div className='MetodoPagamento'>
                    <p className='TMetodos'>Métodos de Pagamento</p>
                    <div classname='pix'>
                    <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."></input>
                    <img  className='logo' width='30' src={Pix}></img>
                    </div>
                    <div classname='CartaoCredito'>
                    <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."></input>
                    <img className='logo' width='30' src={Cartao}></img>
                    </div>
                    <div classname='Boleto'>
                    <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."></input>
                    <img className='logo' width='30' src={Boleto}></img>
                    </div>
                    <div classname='Paypal'>
                    <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."></input>
                    <img className='logo' width='30' src={Paypal}></img>
                    </div>
                </div>
        </div>
        
        <div className='DetalhesCompra'>
            <h2 className='Detalhes'>Detalhes da Compra</h2>
            <p className='TipoPlano'>Tipo de Plano:<span className='PlanoP'> Plano Plus Mensal</span></p>
            <p className='UmaVez'>Pague uma vez por mês</p>
            <p className='DescPlano'>Inclui: Plano plus mensal, com mais visibilidade e mentorias com mentores renomados.</p>
            <h4 className='Cupom'>Cupom de Desconto</h4>
            <button className='Grey'>Código do Cupom</button>
            <p className='preco'>Valor R$39</p>
            <button className='blue'>Assine</button>
        </div>

        <div className='Parcerias'>
            <h4 className='Parce'>Nossos Parceiros</h4>
            <div className='FundoParcerias'>
                <img className='parceiros' src={Parceiros}></img>
            </div>
        </div>
       </div>
    )
}