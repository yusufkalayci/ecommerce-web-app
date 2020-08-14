import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  productTopHeader: {
    width: '100%',
    padding: theme.spacing(1)
  },
  underline: {
    border: '2px solid',
    margin: '.7em auto 1em',
    display: 'block',
    width: '70px'
  },
  empty: {
    height: theme.spacing(12),
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing(2)
    }
  }
}));

const ProductTopHeader = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {props.header ? (
        <React.Fragment>
          <Typography
            gutterBottom
            variant='h2'
            className={classes.productTopHeader}
            style={{
              fontWeight: '500',
              marginBottom: '0',
              fontSize: '1.2875em'
            }}
          >
            {props.header}
          </Typography>
          <span className={classes.underline}></span>
        </React.Fragment>
      ) : (
        <div className={classes.empty}></div>
      )}
    </React.Fragment>
  );
};

export default ProductTopHeader;
