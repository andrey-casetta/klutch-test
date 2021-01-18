import React from 'react';
import { Container } from './styles';
import logo from '../../assets/logo.png';
import { FiMenu } from 'react-icons/fi';

const Header: React.FC = () => {
  return (
    <Container>
      <FiMenu size={40} color={'white'} />
      <img src={logo} alt='logo' />
    </Container>
  );
};

export default Header;
