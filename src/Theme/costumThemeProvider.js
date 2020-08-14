import React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

let theme = createMuiTheme({});
theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: 'Arial',
      color: '#212529',
      fontWeight: 800,
      '@media (min-width:600px)': {
        fontSize: '2.5em'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.5em'
      }
    },
    h2: {
      fontFamily: 'Arial',
      fontWeight: 400,
      fontSize: '1.25em',
      color: '#212529',
      [theme.breakpoints.down('xs')]: {
        fontSize: '1em'
      }
    }
  }
});

const CostumThemeProvider = props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default CostumThemeProvider;
