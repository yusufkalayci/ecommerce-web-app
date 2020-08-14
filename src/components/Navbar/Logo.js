import React from 'react';
import logoLarge from '../../assets/images/logoLarge.png';
import logoSmall from '../../assets/images/logoSmall.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100px',
    [theme.breakpoints.down('sm')]: {
      height: '50px'
    },
    cursor: 'pointer'
  }
}));
const Logo = () => {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  let history = useHistory();
  return (
    <img
      onClick={() => history.push('/')}
      src={matches ? logoSmall : logoLarge}
      alt='logo'
      className={classes.root}
    />
  );
};

export default Logo;
