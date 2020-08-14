import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ProductCard from '../../views/ProductCard/ProductCard';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(3)
  }
}));

const ContentProducts = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {props.productList.map((product, index) => (
          <Grid item key={index} xs={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ContentProducts;
