import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/login/Login.jsx';
import CadastroMentor from './pages/cadastro-mentor/CadastroMentor';
import Main from './pages/main';
import Register from './pages/register/Register';
import Mentor from './pages/mentor/Mentor';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/cadastro-mentor" component={CadastroMentor} />
        {/* <Route path="/main" component={Main} /> */}
        <Route path="/register" component={Register} />
        <Route path="/main" component={Mentor} />
      </Switch>
    </BrowserRouter>
  );
}
