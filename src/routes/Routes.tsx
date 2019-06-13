import React from 'react';
import App from '../App';
import NotFound from '../components/NotFound';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={App} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  };
}

export default Routes;