import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Card from '../../components/Card/Card';
import CardMedia from '../../components/Card/CardMedia';
import CardContent from '../../components/Card/CardContent';
import CardActionArea from '../../components/Card/CardActionArea';
import RegularButton from '../../components/Button/Button';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import * as actionTypes from '../../store/actions/filterActions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  media: {
    width: '100%',
    paddingTop: '80%',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '100%'
    }
  }
}));

const FeauteredPost = props => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleButtonClick = e => {
    dispatch({
      type: actionTypes.SET_FILTER_CRITERIA,
      value: { filterName: 'tag', filterValue: [e.currentTarget.text] }
    });
  };
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          image='url(https://source.unsplash.com/user/erondu)'
          className={classes.media}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h1'
            component='h2'
            style={{ fontWeight: '400' }}
          >
            {props.h1}
          </Typography>
          <Typography variant='h2' component='p'>
            {props.h2}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
        {props.routes.length === 1 ? (
          <RegularButton
            color={'primary'}
            size={'bigResponsive'}
            variant='outlined'
            onClick={handleButtonClick}
            to={props.routes[0].route}
            component={RouterLink}
          >
            {props.routes[0].name}
          </RegularButton>
        ) : (
          <Grid container spacing={1} justify='center'>
            <Grid item xs={6} container justify='flex-end'>
              <RegularButton
                color={'primary'}
                size={'responsive'}
                variant='outlined'
                onClick={handleButtonClick}
                to={props.routes[0].route}
                component={RouterLink}
              >
                {props.routes[0].name}
              </RegularButton>
            </Grid>
            <Grid item xs={6} container justify='flex-start'>
              <RegularButton
                color={'primary'}
                size={'responsive'}
                variant='outlined'
                onClick={handleButtonClick}
                to={props.routes[1].route}
                component={RouterLink}
              >
                {props.routes[1].name}
              </RegularButton>
            </Grid>
          </Grid>
        )}
      </CardContent>
    </Card>
  );
};

export default FeauteredPost;
