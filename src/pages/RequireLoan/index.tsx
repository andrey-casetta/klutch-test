import React from 'react';
import { Container, Content, InputBox } from './styles';
import Plus from '../../assets/plus.png';
import Wallet from '../../assets/wallet.png';
import { Link } from 'react-router-dom';

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
              <input type='text' placeholder='Nome' />
            </InputBox>
            <InputBox>
              <input type='number' placeholder='Número do Cartão' />
            </InputBox>
            <InputBox>
              <input type='number' placeholder='Data de Validade' />
            </InputBox>
            <InputBox>
              <input type='number' placeholder='CVC' />
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
              <a href='#'>Adicionar</a>
            </InputBox>
            <InputBox>
              <input
                type='text'
                placeholder='Cartão de Crédito (Verso)'
                disabled
              />
              <a href='#'>Adicionar</a>
            </InputBox>
            <InputBox>
              <input
                type='text'
                placeholder='Selfie com cartão de crédito'
                disabled
              />
              <a href='#'>Adicionar</a>
            </InputBox>

            <p>
              Atenção: As fotos devem estar legíveis, com todas as informações
              visíveis do cartão.
            </p>
          </div>
        </div>

        <Link to='/mode'>
          <button>Continuar</button>
        </Link>
      </Content>
    </Container>
  );
};

export default RequireLoan;
