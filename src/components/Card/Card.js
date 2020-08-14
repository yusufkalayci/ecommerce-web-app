import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: { overflow: "hidden", }
}));

const Card = props => {
  const classes = useStyles();
  const { children, className, ...rest } = props;

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      {children}
    </div>
  );
};

export default Card;
