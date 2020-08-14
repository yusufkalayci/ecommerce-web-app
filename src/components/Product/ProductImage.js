import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../../store/actions/checkOutActions';
const useStyles = makeStyles(theme => ({
  imageContainer: {
    width: '100%',
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    paddingTop: '70%',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '100%'
    }
  }
}));

const ProductImage = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({
      type: actionTypes.UPDATE_CURRENT_ITEM,
      value: props.product.colors[0],
      fieldName: 'productColor'
    });
    dispatch({
      type: actionTypes.UPDATE_CURRENT_ITEM,
      value: props.product.images[0],
      fieldName: 'productImage'
    });
  }, [dispatch, props.product.colors, props.product.images]);

  const productImage = useSelector(
    state => state.checkout.currentItem.productImage
  );
  const { ...rest } = props;
  return (
    <div
      className={classes.imageContainer}
      {...rest}
      style={{ backgroundImage: `${productImage}` }}
    ></div>
  );
};

export default ProductImage;
