import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import theme from './helpers/theme';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/organisms/Navbar';

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Navbar />
      <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/about" component={About} exact={true} />
      </Switch>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
