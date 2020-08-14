import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux';
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
  const itemQuantity = useSelector(
    state => state.checkout.checkOutItems.length
  );
  const { ...rest } = props;
  return (
    <IconButton aria-label='cart' {...rest}>
      <StyledBadge badgeContent={itemQuantity}>
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
