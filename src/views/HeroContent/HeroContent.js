import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import * as actionTypes from '../../store/actions/filterActions';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    width: '100%',
    height: 'calc(100vh - 169px)',
    [theme.breakpoints.down('sm')]: {
      height: props => window.innerHeight - 64
    }
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  cardContent: {
    position: 'absolute',
    paddingBottom: theme.spacing(4),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    bottom: '0',
    left: '0',
    right: '0'
  },
  singleButton: {
    width: '300px',
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  multipleButton: {
    width: '150px',
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  }
}));

const ColorButton = withStyles(theme => ({
  root: {
    color: '#fff',
    borderColor: '#fff',
    '&:hover': {
      backgroundColor: '#f0f0f0',
      color: '#3c3c3c'
    }
  }
}))(Button);

const HeroContent = props => {
  const classes = useStyles();
  const dispatch = useDispatch();


  const handleButtonClick = e => {
    dispatch({
      type: actionTypes.SET_FILTER_CRITERIA,
      value: { filterName: 'tag', filterValue: [e.currentTarget.text] }
    });
  };
  return (
    <Paper className={classes.cardRoot}>
      {/* Increase the priority of the hero background image */}

      {
        <img
          style={{ display: 'none' }}
          src='https://source.unsplash.com/user/erondu'
          alt='background'
        />
      }
      <div className={classes.overlay} />

      <div className={classes.cardContent}>
        <Typography component='h1' variant='h1' color='inherit' gutterBottom>
          {props.h1}
        </Typography>
        <Typography variant='h2' color='inherit' paragraph>
          {props.h2}
        </Typography>

        {props.routes.length === 1 ? (
          <ColorButton
            onClick={handleButtonClick}
            to={props.routes[0].route}
            component={RouterLink}
            variant='outlined'
            color='inherit'
            className={classes.singleButton}
          >
            {props.button[0]}
          </ColorButton>
        ) : (
          <Grid container spacing={3}>
            <Grid item container justify='flex-end' xs={6}>
              <ColorButton
                to={props.routes[0].route}
                component={RouterLink}
                onClick={handleButtonClick}
                variant='outlined'
                className={classes.multipleButton}
              >
                {props.routes[0].name}
              </ColorButton>
            </Grid>
            <Grid item container justify='flex-start' xs={6}>
              <ColorButton
                to={props.routes[1].route}
                component={RouterLink}
                onClick={handleButtonClick}
                variant='outlined'
                className={classes.multipleButton}
                style={{ right: '0' }}
              >
                {props.routes[1].name}
              </ColorButton>
            </Grid>
          </Grid>
        )}
      </div>
    </Paper>
  );
};

export default HeroContent;
