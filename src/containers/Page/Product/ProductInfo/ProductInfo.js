import React from 'react';
import classes from './ProductInfo.module.css';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../../../store/actions';
import ProductPriceReview from './ProductPriceReview/ProductPriceReview';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductSizeColor from './ProductSizeColor/ProductSizeColor';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import clsx from 'clsx';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { amber, green } from '@material-ui/core/colors';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const variantIcon = {
  success: CheckCircleIcon
};
const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.main
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
}));

function MySnackbarContentWrapper(props) {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby='client-snackbar'
      message={
        <span id='client-snackbar' className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key='close'
          aria-label='close'
          color='inherit'
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
}

const ProductInfo = props => {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const productColor = useSelector(state => state.productInfo.productColor);
  const productSize = useSelector(state => state.productInfo.productSize);
  const hasError = useSelector(state => state.productInfo.hasError);
  const productQuantity = useSelector(
    state => state.productInfo.productQuantity
  );

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  return (
    <div className={classes.container}>
      <Box m={3}>
        <ProductPriceReview
          productName={props.productName}
          productPrice={props.productPrice}
        />
        <ProductSizeColor
          colorOptions={props.colorOptions}
          sizeOptions={props.sizeOptions}
          productQuantity={productQuantity}
          productSize={productSize}
        />
        <button
          className={classes.btn + ' ' + classes.red}
          type='button'
          onClick={event => {
            if (!hasError) {
              dispatch({
                type: actionTypes.ADD_TO_SHOPPING_CHART,
                value: {
                  productName: props.productName,
                  productPrice: props.productPrice,
                  productId: props.productId,
                  productImage: props.productImage,
                  productColor: productColor,
                  productQuantity: productQuantity,
                  productSize: productSize
                }
              });
              setOpen(true);
            } else
              dispatch({
                type: actionTypes.SHOW_ADD_TO_SHOPPING_CHART_ERROR
              });
          }}
        >
          <span>BUY</span>
        </button>
        <ProductDetails
          productDescription={props.productDescription}
          productDetails={props.productDetails}
          productQuantity={productQuantity}
        />

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <MySnackbarContentWrapper
            onClose={handleClose}
            variant='success'
            message='This is a success message!'
          />
        </Snackbar>
      </Box>
    </div>
  );
};

export default ProductInfo;
