import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import './fonts/Flexo/Fonts.css';
import Loan from './pages/Loan';
import Main from './pages/Main';
import RequireLoan from './pages/RequireLoan';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Header />
      {/* <Main /> */}
      {/* <Loan /> */}
      <RequireLoan />
      {/* <Footer /> */}
      <GlobalStyle />
    </>
  );
}

export default App;
