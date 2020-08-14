import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflow: 'hidden'
  },
  media: {
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    paddingTop: '80%',
    transition: 'all .5s',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  }
}));

const CardMedia = props => {
  const classes = useStyles();
  const { className } = props;

  return (
    <div className={classes.root}>
      {props.children}
      <div
        className={clsx(classes.media, className)}
        style={{ backgroundImage: `${props.image}` }}
      ></div>
    </div>
  );
};

export default CardMedia;
