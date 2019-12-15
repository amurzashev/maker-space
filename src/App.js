import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';
import theme from './helpers/theme';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/organisms/Navbar';
import store from './duck';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
