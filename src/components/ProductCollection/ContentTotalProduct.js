import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  contentTotalProduct: {
    padding: theme.spacing(1),
    width: '100%',
    fontWeight: '300',
    fontSize: '.875em',
    marginBottom: '0'
  }
}));

const ContentTotalProduct = props => {
  const classes = useStyles();
  return (
    <Typography
      gutterBottom
      variant='h2'
      component='p'
      className={classes.contentTotalProduct}
      style={{
        fontWeight: '300',
        fontSize: '.875em',
        marginBottom: '0'
      }}
    >
      {props.totalProductCount + ' products'}
    </Typography>
  );
};

export default ContentTotalProduct;
