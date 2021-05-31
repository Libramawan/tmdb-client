/* eslint-disable react/jsx-props-no-spreading */
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
        <Route path="/results" component={(props) => <Results {...props} />} />
        {/* <Route path="/results" exact component={Results} /> */}
        <Route path="/details/:id" component={(props) => <Details {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
