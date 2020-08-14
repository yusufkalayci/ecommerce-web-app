import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Grid } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    fontSize: '1rem'
  },

  productPrice: {
    textAlign: 'left'
  },
  reviewWrapper: {
    textAlign: 'right',
    display: 'flex',
    justifyContent: 'flex-end',
    alignContent: ''
  },
  sizeGuide: {
    textAlign: 'left'
  },
  writeReview: {
    textAlign: 'right'
  },
  starRating: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)'
  },
  reviews: {
    color: '#9e9e9e',
    fontSize: '.92857em'
  }
}));

const ProductInfo = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid xs={12} item container justify='space-between'>
          <Grid item>
            <span className={classes.productPrice}>
              {'$ ' + props.product.price + ' CAD'}
            </span>
          </Grid>
          <Grid item>
            <div>
              <Link
                to={'/'}
                noWrap
                component={RouterLink}
                variant='subtitle1'
                color='textPrimary'
              >
                <span className={classes.reviews}>{'Reviews '}</span>
              </Link>
              <StarRatingComponent
                name='rate1'
                starCount={5}
                value={4}
                editing={false}
                starColor={'#000'}
                emptyStarColor={'#c5ccd6'}
              />
            </div>
          </Grid>
        </Grid>
        <Grid xs={12} item container justify='space-between'>
          <Grid item>
            <Link
              to={'/'}
              noWrap
              component={RouterLink}
              variant='subtitle1'
              color='textPrimary'
              className={classes.sizeGuide}
            >
              <span>{'Size Guide'}</span>
            </Link>
          </Grid>
          <Grid item>
            <Link
              to={'/'}
              noWrap
              component={RouterLink}
              variant='subtitle1'
              color='textPrimary'
              className={classes.writeReview}
            >
              <span>{'Write review'}</span>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductInfo;
