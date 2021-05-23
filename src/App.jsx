import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './web/pages/Home';
import Results from './web/pages/Results';
import Details from './web/pages/Details';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/results/" exact component={Results} />
        <Route path="/details/" exact component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
