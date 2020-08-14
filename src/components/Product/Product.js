import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import ProductHeader from './ProductHeader';
import ProductSizeQuantity from './ProductSizeQuantity';
import ProductInfoDeatail from './ProductInfoDetail';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import classes2 from './ProductInfo.module.css';
import { useParams } from 'react-router-dom';
import firebase from 'firebase/app';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../store/actions/checkOutActions';
import CustomizedSnackbars from './CustomizedSnackbars';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}));
const Product = props => {
  const classes = useStyles();
  let { id } = useParams();

  const [product, setProduct] = React.useState(null);
  const [isLoading, setIsloading] = React.useState(true);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('0');
  const [hasError, setHasError] = React.useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false);

  React.useEffect(() => {
    /*const collectionsRef = firebase.database().ref('products/' + id);
    collectionsRef.on('value', function(snapshot) {
      setProduct(snapshot.val());
      setIsloading(false);
    });*/

    let productRef = firebase
      .firestore()
      .collection('products')
      .doc(id);

    productRef
      .get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          setProduct(doc.data());
          setIsloading(false);
          dispatch({
            type: actionTypes.UPDATE_CURRENT_ITEM,
            value: doc.data().name,
            fieldName: 'productName'
          });
          dispatch({
            type: actionTypes.UPDATE_CURRENT_ITEM,
            value: doc.data().price,
            fieldName: 'productPrice'
          });
          dispatch({
            type: actionTypes.UPDATE_CURRENT_ITEM,
            value: doc.data().manufacturer,
            fieldName: 'productManufacturer'
          });
          dispatch({
            type: actionTypes.UPDATE_CURRENT_ITEM,
            value: id,
            fieldName: 'id'
          });
        }
      })
      .catch(err => {
        console.log('Error getting document', err);
      });
  }, [id, dispatch]);

  const handleSizeChange = event => {
    setHasError(false);
    if (event.target.value === 0) {
      setHasError(true);
    }
    setValue(event.target.value);
    dispatch({
      type: actionTypes.UPDATE_CURRENT_ITEM,
      value: event.target.value,
      fieldName: 'productSize'
    });
  };

  const handleSubmit = () => {
    setHasError(false);
    if (value == 0) {
      setHasError(true);
    } else {
      dispatch({
        type: actionTypes.ADD_ITEM_TO_CHECKOUT
      });
      setIsSnackbarOpen(true);
    }
  };

  const handleSnackbarClick = () => {
    setIsSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsSnackbarOpen(false);
  };

  return isLoading ? (
    <div style={{ height: '500px' }} />
  ) : (
    <div className={classes.root}>
      <CustomizedSnackbars
        handleClick={handleSnackbarClick}
        handleClose={handleSnackbarClose}
        open={isSnackbarOpen}
      />
      <Grid
        container
        spacing={2}
        direction='row'
        justify='space-between'
        alignItems='flex-start'
      >
        <Grid item xs={12} md={7}>
          <ProductImage product={product} />
        </Grid>
        <Grid item container xs={12} md={5} direction='column'>
          <Grid item xs={12}>
            <ProductHeader productName={product.name} />
            <Divider />
            <ProductInfo product={product} />
            <Divider />
          </Grid>
          <Grid container item xs={12} alignItems='center'>
            <ProductSizeQuantity
              sizeOptions={product.sizeOptions}
              colorOptions={product.colorOptions}
              product={product}
              handleSizeChange={handleSizeChange}
              value={value}
              hasError={hasError}
            />
          </Grid>
          <Grid container item xs={12}>
            <button
              className={classes2.btn + ' ' + classes2.red}
              type='button'
              onClick={handleSubmit}
            >
              <span>BUY</span>
            </button>
          </Grid>
          <Grid item xs={12}>
            <ProductInfoDeatail
              header={'Features'}
              content={['Description 1', 'Description 2', 'Description 3']}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Product;
