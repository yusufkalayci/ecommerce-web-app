import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import * as actionTypes from '../../../../store/actions';

const CheckoutItemList = props => {
  const checkOutProducts = useSelector(
    state => state.shoppingChart.checkOutProducts
  );
  const dispatch = useDispatch();

  return (
    <ul
      style={{
        listStyleType: 'none',
        padding: '0'
      }}
    >
      {checkOutProducts.map((item, index) => {
        return (
          <li key={index}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <p>{item.productName}</p>
              </Grid>
              <Grid item xs={12} sm={2}>
                <img
                  src={item.productImage}
                  style={{
                    borderRadius: '10%',
                    width: '100%',
                    height: '100%',
                    verticalAlign: 'middle'
                  }}
                  alt='avatar'
                />
              </Grid>
              <Grid container item xs={12} sm={10}>
                <Grid item xs={6}>
                  <p>Color: {item.productColor}</p>
                  <p>Size: {item.productSize}</p>
                  <p>Quantity: {item.productQuantity}</p>
                </Grid>
                <Grid item container xs={4}>
                  <Grid
                    container
                    direction='column'
                    justify='center'
                    alignItems='flex-start'
                  >
                    <strong>
                      {item.productQuantity + ' x ' + item.productPrice}$
                    </strong>
                  </Grid>
                </Grid>
                <Grid item container xs={2}>
                  <Grid
                    container
                    direction='column'
                    justify='center'
                    alignItems='flex-start'
                  >
                    <IconButton
                      onClick={() =>
                        dispatch({
                          type: actionTypes.REMOVE_FROM_SHOPPING_CHART,
                          value: item
                        })
                      }
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <hr />
            </Grid>
          </li>
        );
      })}
    </ul>
  );
};

export default CheckoutItemList;
