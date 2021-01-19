import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import './fonts/Flexo/Fonts.css';
import ChooseMode from './pages/ChooseMode';
import Loan from './pages/Loan';
import LoanRealized from './pages/LoanRealized';
import LoanValues from './pages/LoanValues';
import Main from './pages/Main';
import RequireLoan from './pages/RequireLoan';
import SolicitationDetails from './pages/SolicitationDetails';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Header />
      {/* <Main /> */}
      {/* <Loan /> */}
      {/* <RequireLoan /> */}
      {/* <ChooseMode /> */}
      {/* <LoanValues /> */}
      {/* <LoanRealized /> */}
      <SolicitationDetails />
      {/* <Footer /> */}
      <GlobalStyle />
    </>
  );
}

export default App;
