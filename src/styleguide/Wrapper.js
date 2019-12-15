/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../helpers/theme';

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);
