import React from 'react';
import { Container, Content } from './styles';
import Plus from '../../assets/plus.png';
import Wallet from '../../assets/wallet.png';

const ChooseMode: React.FC = () => {
  return (
    <Container>
      <Content>
        <div className='title'>
          <img src={Plus} alt='plus' />
          <img src={Wallet} className='wallet' alt='wallet' />
          <h1>Solicitar Empréstimo</h1>
        </div>
        <div className='buttons'>
          <h1>Escolha a modalidade:</h1>
          <button>Cartão de Crédito</button>
          <h2>Ou</h2>
          <button>Crédito Consignado</button>
          <span>Em Breve</span>
        </div>
      </Content>
    </Container>
  );
};

export default ChooseMode;
