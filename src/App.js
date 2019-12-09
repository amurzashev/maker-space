import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import theme from './helpers/theme';
import Home from './components/pages/Home';

const App = () => (
  <BrowserRouter>
    <Switch>
      <ThemeProvider theme={theme}>
        <Route path="/" component={Home} exact={true} />
      </ThemeProvider>
    </Switch>
  </BrowserRouter>
);

export default App;
