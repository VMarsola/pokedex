import React from "react";
import History from "./helpers/History";
import { Route, Router, Switch, Redirect } from "react-router-dom";

import Home from "./pages";

const Routes = () => {
  return (
    <Router history={History}>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
