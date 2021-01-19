import React from 'react';
import { Container, Content } from './styles';
import Plus from '../../assets/plus.png';
import Wallet from '../../assets/wallet.png';
import { FiCheck } from 'react-icons/fi';

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
                <span>71 9988-7766</span>
                <FiCheck size={50} color='#228A95' />
              </div>
              <div className='box'>
                <h1>Valor Total do Empréstimo:</h1>
              </div>
            </div>
            <div className='upper'>
              <div className='box'>
                <h1>João Paulo Guedes</h1>
                <h1>71 9988-7766</h1>
                <FiCheck size={50} color='#228A95' />
              </div>
              <div className='box'>
                <h1>Valor Total do Empréstimo:</h1>
              </div>
            </div>
            <div className='lower'>
              <div className='box'>
                <h1>Parcelas:</h1>
              </div>
              <div className='box'>
                <h1>Valor da parcela:</h1>
              </div>
            </div>
          </div>
        </section>
      </Content>
    </Container>
  );
};

export default LoanRealized;
