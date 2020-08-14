import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({}));

const CardFooter = props => {
  const classes = useStyles();
  return <button className={classes.cardActionArea}></button>;
};

export default CardFooter;
