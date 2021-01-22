import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Loan from './pages/Loan';
import ChooseMode from './pages/ChooseMode';
import RequireLoan from './pages/RequireLoan';
import LoanRealized from './pages/LoanRealized';
import LoanValues from './pages/LoanValues';
import SolicitationDetails from './pages/SolicitationDetails';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/cpf' component={Loan} />
      <Route path='/loan' component={RequireLoan} />
      <Route path='/mode' component={ChooseMode} />
      <Route path='/loanValues' component={LoanValues} />
      <Route path='/loanRealized' component={LoanRealized} />
      <Route path='/solicitation' component={SolicitationDetails} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
