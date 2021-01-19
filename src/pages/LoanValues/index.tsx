import React from 'react';
import { Container, Content } from './styles';
import Plus from '../../assets/plus.png';
import Wallet from '../../assets/wallet.png';
import { FiCheck } from 'react-icons/fi';

const LoanValues: React.FC = () => {
  return (
    <Container>
      <Content>
        <div className='title'>
          <img src={Plus} alt='plus' />
          <img src={Wallet} className='wallet' alt='wallet' />
          <h1>Solicitar Empréstimo</h1>
          <div className='box'>
            <h1>Tabela</h1>
            <input type='text' />
          </div>
        </div>
        <section>
          <div className='upper'>
            <div className='box'>
              <h1>Valor desejado:</h1>
              <input type='text' />
            </div>
            <div className='box'>
              <h1>Valor Total do Empréstimo:</h1>
              <input type='text' />
            </div>
          </div>
          <div className='lower'>
            <div className='box'>
              <h1>Parcelas:</h1>
              <input type='text' />
            </div>
            <div className='box'>
              <h1>Valor da parcela:</h1>
              <input type='text' />
            </div>
          </div>
        </section>
        <div className='contractType'>
          <h1>Escolha a modalidade:</h1>
          <div>
            <button>Automático</button>
            <button>Manual</button>
            <button>
              <FiCheck size={50} /> Concluir
            </button>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default LoanValues;
