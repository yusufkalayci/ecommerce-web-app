import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'block',
    borderRadius: '0',
    position: 'relative',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    padding: '0',
    margin: '0',
    cursor: 'pointer'
  }
}));

const CardActionArea = props => {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  const cardClasses = classNames({
    [classes.root]: true,

    [className]: className !== undefined
  });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
};

export default CardActionArea;
