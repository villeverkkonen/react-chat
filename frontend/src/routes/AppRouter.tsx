import React from 'react';
import ChatPage from '../components/ChatPage';
import NotFound from '../components/NotFound';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={ChatPage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  };
}

export default AppRouter;