import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/login/Login";
import LoginTest from "./pages/login-test"

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/login-test" exact component={LoginTest} />
      </Switch>
    </BrowserRouter>
  );
}