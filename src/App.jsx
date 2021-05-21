import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './web/pages/Home';
import Results from './web/pages/Results';
import Details from './web/pages/Details';
import Footer from './web/components/Footer';

function App() {
  return (
    <div className="bg-purple-dark">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/results" exact component={Results} />
          <Route path="/details" exact component={Details} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
