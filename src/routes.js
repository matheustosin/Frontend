import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/login/Login";
import CadastroMentor from "./pages/cadastro-mentor/CadastroMentor";
import Mentor from "./pages/mentor/mentor";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/cadastro-mentor" component={CadastroMentor} />
        <Route path="/profile" component={Mentor} />
      </Switch>
    </BrowserRouter>
  );
}
