import React from 'react';
import Header from './components/Header';
import './fonts/Flexo/Fonts.css';

import Routes from './Routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Header />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
