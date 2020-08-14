import React from 'react';
import { Link } from '@material-ui/core';
import { Grid, Paper, Grow } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  span: {
    fontSize: '.92857em'
  },
  paper: {
    position: 'absolute',
    padding: theme.spacing(1),
    zIndex: 1000,
    [theme.breakpoints.down('md')]: {
      left: '20%',
      right: '20%'
    },
    [theme.breakpoints.up('lg')]: {
      left: '30%',
      right: '30%'
    }
  }
}));

const NavigationItem = props => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  function handleLeave() {
    setChecked(false);
  }
  function handleEnter() {
    setChecked(true);
  }
  return (
    <div onMouseLeave={handleLeave} onMouseEnter={handleEnter}>
      <Link
        to={props.route.path}
        noWrap
        component={RouterLink}
        variant='subtitle1'
        color='textPrimary'
      >
        <span className={classes.span}>{props.route.name}</span>
      </Link>
      <Grow in={checked}>
        <Paper elevation={4} className={classes.paper}>
          <Grid container spacing={1}>
            <Grid item container spacing={1} xs={6}>
              <Grid item xs={12}>
                <Link
                  to={'/#'}
                  noWrap
                  variant='subtitle1'
                  color='textPrimary'
                  style={{ cursor: 'pointer' }}
                >
                  {'Jackets & Vests'}
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link
                  to={'/#'}
                  noWrap
                  variant='subtitle1'
                  color='textPrimary'
                  style={{ cursor: 'pointer' }}
                >
                  {'subMenu'}
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link
                  to={'/#'}
                  noWrap
                  variant='subtitle1'
                  color='textPrimary'
                  style={{ cursor: 'pointer' }}
                >
                  {'subMenu'}
                </Link>
              </Grid>
            </Grid>
            <Grid item container spacing={1} xs={6}>
              <Grid item xs={12}>
                <Link
                  to={'/#'}
                  noWrap
                  variant='subtitle1'
                  color='textPrimary'
                  style={{ cursor: 'pointer' }}
                >
                  {'Bottoms'}
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link
                  to={'/#'}
                  noWrap
                  variant='subtitle1'
                  color='textPrimary'
                  style={{ cursor: 'pointer' }}
                >
                  {'subMenu'}
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link
                  to={'/#'}
                  noWrap
                  variant='subtitle1'
                  color='textPrimary'
                  style={{ cursor: 'pointer' }}
                >
                  {'subMenu'}
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grow>
    </div>
  );
};

export default NavigationItem;
