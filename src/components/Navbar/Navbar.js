import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import SearchBar from './SearchBar';
import Logo from './Logo';
import ShoppingChartButton from './ShoppingChartButton';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import { Grid, Link, IconButton } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { homeRoutes } from '../../routes';
import * as actionTypes from '../../store/actions/modalActions';
import { useDispatch } from 'react-redux';
import NavigationItem from './NavigationItem';

const useStyles = makeStyles(theme => ({
  toolbarPrimary: {
    minHeight: '64px'
  },

  toolbarSecondary: {
    padding: theme.spacing(1),
    minHeight: '64px'
  },
  span: {
    fontSize: '.92857em'
  },
  searchbarContainer: {
    [theme.breakpoints.down('sm')]: {
      order: '2',
      flex: 'auto'
    }
  },
  logoContainer: {
    [theme.breakpoints.down('sm')]: {
      order: '1',
      flex: 'none'
    }
  },
  singInButton: {
    marginLeft: theme.spacing(2),
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  helpButton: {
    marginLeft: theme.spacing(2),
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  shoppingChart: {
    marginLeft: theme.spacing(2)
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'inline',
      order: '3',
      flex: 'none'
    }
  },
  grow: {
    position: 'absolute',
    zIndex: '1000',
    top: '40px',
    width: '60%'
  },
  growHidden: {
    display: 'hidden'
  }
}));

const Navbar = props => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleCheckOutModal = () => {
    dispatch({
      type: actionTypes.TOGGLE_CHECKOUT_MODAL
    });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Toolbar className={classes.toolbarPrimary}>
        <Hidden mdUp>
          <IconButton
            onClick={() => {
              dispatch({
                type: actionTypes.TOGGLE_NAVIGATIONBAR
              });
            }}
          >
            <svg style={{ width: '24px', height: '24px' }} viewBox='0 0 24 24'>
              <path
                fill='#000000'
                d='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z'
              />
            </svg>
          </IconButton>
        </Hidden>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          wrap='nowrap'
        >
          <Grid item md={3} className={classes.searchbarContainer}>
            <SearchBar />
          </Grid>
          <Grid item md={6} className={classes.logoContainer}>
            <Logo />
          </Grid>
          <Grid item md={3} className={classes.container}>
            <Link
              to={'/#signIn'}
              variant='subtitle1'
              color='textPrimary'
              noWrap
              className={classes.singInButton}
            >
              <span className={classes.span}>Sign In</span>
            </Link>
            <Link
              to={'/#help'}
              variant='subtitle1'
              color='textPrimary'
              className={classes.helpButton}
            >
              <span className={classes.span}>Help</span>
            </Link>
            <ShoppingChartButton
              className={classes.shoppingChart}
              onClick={handleCheckOutModal}
            />
          </Grid>
        </Grid>
      </Toolbar>
      <Hidden smDown>
        <Toolbar className={classes.toolbarSecondary}>
          <Grid
            container
            direction='row'
            justify='center'
            alignItems='center'
            wrap='nowrap'
            spacing={3}
          >
            {homeRoutes.map((item, index) => (
              <Grid item key={index}>
                <NavigationItem route={item} />
              </Grid>
            ))}
          </Grid>
        </Toolbar>
      </Hidden>
    </React.Fragment>
  );
};

export default Navbar;
