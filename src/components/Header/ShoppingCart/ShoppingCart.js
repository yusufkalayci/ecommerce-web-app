import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import { updateShoppingChartFromLocalStore } from '../../../store/actions';
import classes from './ShoppingChart.module.css';

const StyledBadge = withStyles(theme => ({
  badge: {
    top: '50%',
    right: -3,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[900]
    }`
  }
}))(Badge);

export default function ShoppingCartButton(props) {
  const dispatch = useDispatch();

  return (
    <div
      className={classes.container}
      onClick={() => {
        //update shopping chart from local store in case user added new item from another tab
        dispatch(updateShoppingChartFromLocalStore());
        dispatch({ type: actionTypes.TOOGLE_CHECKOUT_MODAL });
      }}
    >
      <IconButton aria-label='cart'>
        <StyledBadge badgeContent={props.badgeContent} color='primary'>
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </div>
  );
}
