import React from 'react';
import classes from './Header.module.css';
import { useSelector } from 'react-redux';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import CheckoutModal from './CheckoutModal/CheckoutModal';
import NavigationBar from './NavigationBar/NavigationBar';
import Grid from '@material-ui/core/Grid';

const Header = () => {
  const shoppingListCount = useSelector(
    state => state.shoppingChart.shoppingListCount
  );
  return (
    <header className={classes.container}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={2}>
          <div className={classes.logoContainer}>[Logo]</div>
        </Grid>
        <Grid item xs={9} md={8}>
          <NavigationBar />
        </Grid>
        <Grid item xs={3} md={2}>
          <ShoppingCart badgeContent={shoppingListCount} />
        </Grid>

        <CheckoutModal />
      </Grid>
    </header>
  );
};

export default Header;
