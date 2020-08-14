import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'absolute',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    bottom: '0',
    left: '0',
    right: '0'
  }
}));

const CardContent = props => {
  const classes = useStyles();
  const { children, className, ...rest } = props;

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      {children}
    </div>
  );
};

export default CardContent;
