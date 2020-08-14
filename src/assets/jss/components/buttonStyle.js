import { createMuiTheme } from '@material-ui/core/styles';

let theme = createMuiTheme({});

const buttonStyle = {
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  responsive: {
    width: '150px',
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  bigResponsive: {
    width: '150px',
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  primary: {
    color: '#000',
    borderColor: '#000',
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff'
    }
  },
  secondary: {
    color: '#fff',
    borderColor: '#fff',
    '&:hover': {
      backgroundColor: '#f0f0f0',
      color: '#3c3c3c'
    }
  }
};

export default buttonStyle;
