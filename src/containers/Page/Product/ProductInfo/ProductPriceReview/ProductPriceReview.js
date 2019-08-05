import React from 'react';
import Grid from '@material-ui/core/Grid';

const ProductPriceReview = props => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1>{props.productName}</h1>
      </Grid>
      <Grid item xs={12}>
        <hr />
      </Grid>
      <Grid item xs={6}>
        <span>
          <strong>{props.productPrice + ' $'}</strong>
        </span>
      </Grid>
      <Grid item xs={6}>
        <span style={{ float: 'right' }}>[stars]</span>
        <a href='#/' style={{ float: 'right' }}>
          read reviews
        </a>
      </Grid>
      <Grid item xs={6}>
        <a href='#/'>Size Guide</a>
      </Grid>
      <Grid item xs={6}>
        <a href='#/' style={{ float: 'right' }}>
          write review
        </a>
      </Grid>
      <Grid item xs={12}>
        <hr />
      </Grid>
    </Grid>
  );
};

export default ProductPriceReview;
