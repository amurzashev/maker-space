import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact={true} />
    </Switch>
  </BrowserRouter>
);

export default App;
