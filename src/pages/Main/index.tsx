import React from 'react';
import { Container, Content } from './styles';
import Plus from '../../assets/plus.png';
import Wallet from '../../assets/wallet.png';

const Main: React.FC = () => {
  return (
    <Container>
      <Content>
        <div className='title'>
          <img src={Plus} alt='plus' />
          <img src={Wallet} className='wallet' alt='wallet' />
          <h1>Simulação de Taxas</h1>
        </div>
        <div className='value'>
          <h2>Valor Desejado</h2>
          <div>
            <input type='number' placeholder='R$ 0,00' />
            <button>Calcular</button>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Main;
