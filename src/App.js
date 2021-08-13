import React from "react";
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

import Login from './pages/Login';
import Callback from './pages/Callback';
import Me from './pages/Me';


function App() {
  // const isRegistered = localStorage.getItem("repo-list")
  // if(isRegistered)

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/callback" component={Callback} />
        <Route exact path="/me" component={Me} />
      </Switch>
    </Router>
  );
}

export default App;
