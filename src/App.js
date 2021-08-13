import React from "react";
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

import Inicio from './pages/Inicio';
import Callback from './pages/Callback';


function App() {
  // const isRegistered = localStorage.getItem("")
  // console.log(isRegistered);


  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/callback" component={Callback} />
      </Switch>
    </Router>
  );
}

export default App;
