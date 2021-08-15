import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Me from "./pages/Me";
import Callback from "./pages/Callback";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/me" component={Me} />
        <Route exact path="/callback" component={Callback} />
      </Switch>
    </Router>
  );
}

export default App;
