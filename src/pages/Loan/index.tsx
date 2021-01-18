import React from 'react';
import { Container, Content } from './styles';
import Plus from '../../assets/plus.png';
import Wallet from '../../assets/wallet.png';

const Loan: React.FC = () => {
  return (
    <Container>
      <Content>
        <div className='title'>
          <img src={Plus} alt='plus' />
          <img src={Wallet} className='wallet' alt='wallet' />
          <h1>Solicitar Empréstimo</h1>
        </div>
        <div className='value'>
          <h2>Busque o cliente</h2>
          <div>
            <input type='text' />
            <button>Buscar</button>
          </div>

          <div className='client'>
            <h1>Cliente encontrado:</h1>
            <h2>074.119.055-93</h2>
            <strong>Lara Test</strong>
            <button>Solicitar</button>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Loan;
