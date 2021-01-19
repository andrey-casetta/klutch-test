import React from 'react';
import { Container, Content } from './styles';
import Plus from '../../assets/plus.png';
import Wallet from '../../assets/wallet.png';
import { FiCheck } from 'react-icons/fi';
import { FaCreditCard } from 'react-icons/fa';
import cardImage from '../../assets/wallet.svg';

const LoanRealized: React.FC = () => {
  return (
    <Container>
      <Content>
        <div className='title'>
          <img src={Plus} alt='plus' />
          <img src={Wallet} className='wallet' alt='wallet' />
          <h1>Solicitar Empréstimo</h1>
        </div>
        <section>
          <h1>Solicitação Realizada com Sucesso!</h1>
          <h2>Resumo da Solicitação</h2>
          <div className='solicitationInfo'>
            <div className='upper'>
              <div className='box'>
                <span>João Paulo Guedes</span>
                <div>
                  <span>71 9988-7766</span>
                  <FiCheck size={50} color='#228A95' />
                </div>
              </div>
              <div className='box'>
                <h1>Taxa de Juros</h1>
                <div>
                  <span className='orange bold'>12%</span>
                  <FiCheck size={50} color='#228A95' />
                </div>
              </div>
            </div>
            <div className='upper'>
              <div className='box'>
                <FaCreditCard size={50} color='#EF9C4B' />
                <span>4327</span>
                <strong>VISA</strong>
                <span>02/24</span>
                <FiCheck size={50} color='#228A95' />
              </div>
              <div className='box'>
                <h1>Parcelas:</h1>
                <div>
                  <span className='orange italic'>12</span>
                  <FiCheck size={50} color='#228A95' />
                </div>
              </div>
            </div>
            <div className='upper'>
              <div className='box'>
                <h1>Valor desejado:</h1>
                <div>
                  <span className='money bold'>R$ 7.200,00</span>
                  <FiCheck size={50} color='#228A95' />
                </div>
              </div>
              <div className='box'>
                <h1>Valor da parcela:</h1>
                <div>
                  <span className='money italic'>R$ 433,33</span>
                  <FiCheck size={50} color='#228A95' />
                </div>
              </div>
            </div>
            <div className='upper details'>
              <div className='box'>
                <h1>Valor Total do Empréstimo:</h1>
                <div>
                  <span className='money bold'>R$ 7.200,00</span>
                  <FiCheck size={50} color='#228A95' />
                </div>
              </div>
              <button>Detalhe da Solicitação</button>
              <span>O CredFica avaliará a solicitação.</span>
            </div>
          </div>
        </section>
      </Content>
    </Container>
  );
};

export default LoanRealized;
