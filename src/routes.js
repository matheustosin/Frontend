import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/login/Login";
import Main from "./pages/main"
import Register from "./pages/register/Register";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/main" component={Main} />

      </Switch>
    </BrowserRouter>
  );
}
