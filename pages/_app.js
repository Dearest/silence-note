import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from '../modules/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      < Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
