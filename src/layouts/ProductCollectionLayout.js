import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import CostumThemeProvider from '../Theme/costumThemeProvider';
import ProductCollection from '../components/ProductCollection/ProductCollection';
import Footer from '../components/Footer/Footer';
import { CssBaseline } from '@material-ui/core';
import CheckOutModal from '../components/Modal/CheckOutModal';
import { useSelector } from 'react-redux';
import SideBar from '../components/Sidebar/Sidebar';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'relative'
  },
  content: {
    width: '100%'
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: '240px'
  }
}));

const ProductSearchLayout = props => {
  const isOpen = useSelector(state => state.modal.checkOutModal);
  const sideBarOpen = useSelector(state => state.modal.sideBarOpen);
  const navigationBarOpen = useSelector(state => state.modal.navigationBarOpen);
  const classes = useStyles();
  return (
    <React.Fragment>
      <CostumThemeProvider>
        <CssBaseline />
        <div className={classes.root}>
          <div
            className={clsx(classes.content, {
              [classes.contentShift]: sideBarOpen || navigationBarOpen
            })}
          >
            <Navbar />
            <CheckOutModal open={isOpen} />
            <ProductCollection />
            <Footer />
          </div>
          <SideBar />
        </div>
      </CostumThemeProvider>
    </React.Fragment>
  );
};

export default ProductSearchLayout;
