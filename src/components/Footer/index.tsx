import React from 'react';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>Nome: Tabela Padrão</h1>
      <h1>Parcelas:</h1>
      <h1>Valor da Parcela:</h1>
      <button>Avançar</button>
    </Container>
  );
};

export default Header;
