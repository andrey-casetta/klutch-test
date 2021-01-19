import React from 'react';
import { Container, Content, InputBox } from './styles';
import Plus from '../../assets/plus.png';
import Wallet from '../../assets/wallet.png';

const RequireLoan: React.FC = () => {
  return (
    <Container>
      <Content>
        <div className='title'>
          <img src={Plus} alt='plus' />
          <img src={Wallet} className='wallet' alt='wallet' />
          <h1>Solicitar Empréstimo</h1>
        </div>

        <div className='card-data'>
          <div className='data'>
            <h1>Insira os dados do Cartão:</h1>
            <InputBox>
              <input type='text' />
            </InputBox>
            <InputBox>
              <input type='text' />
            </InputBox>
            <InputBox>
              <input type='text' />
            </InputBox>
            <InputBox>
              <input type='text' />
            </InputBox>
          </div>
          <div className='media'>
            <h1>Faça o upload dos anexos do cartão:</h1>
            <InputBox>
              <input
                type='text'
                placeholder='Cartão de Crédito (Frente)'
                disabled
              />
              <a href='/'>Adicionar</a>
            </InputBox>
            <InputBox>
              <input
                type='text'
                placeholder='Cartão de Crédito (Verso)'
                disabled
              />
              <a href='/'>Adicionar</a>
            </InputBox>
            <InputBox>
              <input
                type='text'
                placeholder='Selfie com cartão de crédito'
                disabled
              />
              <a href='/'>Adicionar</a>
            </InputBox>

            <p>
              Atenção: As fotos devem estar legíveis, com todas as informações
              visíveis do cartão.
            </p>
          </div>
        </div>

        <button>Continuar</button>
      </Content>
    </Container>
  );
};

export default RequireLoan;
