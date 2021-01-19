import React from 'react';
import { Container, Content } from './styles';
import Plus from '../../assets/plus.png';
import Wallet from '../../assets/wallet.png';
import cardImg from '../../assets/card.svg';
import {
  FaCreditCard,
  FaExclamationCircle,
  FaCheckCircle,
} from 'react-icons/fa';

const SolicitationDetails: React.FC = () => {
  return (
    <Container>
      <Content>
        <div className='title'>
          <img src={Plus} alt='plus' />
          <img src={Wallet} className='wallet' alt='wallet' />
          <h1>Solicitar Empréstimo</h1>
        </div>
        <section>
          <div className='main'>
            <div className='rectangle'>
              <h1>Solicitação gerada por</h1>
              <span>Sistema Credfica</span>
            </div>
            <div className='row'>
              <div className='card'>
                <h1>Valor Total</h1>
                <strong>R$ 6.000,00</strong>
              </div>
              <div className='card'>
                <h1>Valor a depositar</h1>
                <strong>R$ 6.000,00</strong>
              </div>
            </div>
            <div className='row'>
              <div className='card'>
                <h1>Frente do cartão</h1>
                <img src={cardImg} alt='card-image' />
                <a href='/'>Ver comprovante</a>
              </div>
              <div className='card'>
                <h1>Verso do cartão</h1>
                <img src={cardImg} alt='card-image' />
                <a href='/'>Ver comprovante</a>
              </div>
            </div>
            <div className='row'>
              <div className='card'>
                <h1>Selfie com cartão</h1>
                <img src={cardImg} alt='card-image' />
                <a href='/'>Ver comprovante</a>
              </div>
            </div>
          </div>
          <div className='main'>
            <div className='rectangle'>
              <h1>Fluxo da Solicitação:</h1>
              <span>Manual</span>
            </div>

            <div className='box'>
              <span>Modalidade:</span>
              <div>
                <h1>Cartão de Crédito</h1>
                <FaCreditCard color={'#EF9C4B'} size={32} />
              </div>
              <h2>Número do cartão: 5252 0565 6526 6552</h2>
              <h2>
                Validade: 03/27
                <span>CVC: 254</span>
              </h2>
              <h2>
                1 parcelas de: <span className='money'>R$ 2000,00</span>
              </h2>
              <h2>Tabela: Tabela padrão</h2>
            </div>

            <div className='box'>
              <span>Informações do Cliente:</span>
              <div className='clientData'>
                <h3>Nome: Lara B Esquivel</h3>
                <h3>CPF: 866.666.965.87</h3>
                <h3>Agência: 1235</h3>
                <h3>Banco: 029 - Banco Itaú Consignado S.A.</h3>
                <h3>Tipo de Conta: Poupança</h3>
                <h3>Número da conta: 222245</h3>
              </div>
            </div>

            <div className='box info'>
              <span>Informações Gerais:</span>
              <div className='clientData'>
                <div>
                  <h1>Data: 09/03/2020</h1>
                </div>
                <button className='orange'>
                  <FaExclamationCircle color={'white'} size={30} />
                  Aguardando
                </button>
                <div className='buttons'>
                  <button className='blue'>
                    <FaCheckCircle color={'white'} size={30} />
                    Pré Aprovar
                  </button>
                  <button className='red'>
                    <FaExclamationCircle color={'white'} size={30} />
                    Reprovar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Content>
    </Container>
  );
};

export default SolicitationDetails;
