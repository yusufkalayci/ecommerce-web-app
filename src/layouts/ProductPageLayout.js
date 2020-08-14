import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import CostumThemeProvider from '../Theme/costumThemeProvider';
import Product from '../components/Product/Product';
import Footer from '../components/Footer/Footer';
import { CssBaseline } from '@material-ui/core';
import CheckOutModal from '../components/Modal/CheckOutModal';
import { useSelector } from 'react-redux';
import SideBar from '../components/Sidebar/Sidebar';

const ProductPageLayout = () => {
  const isOpen = useSelector(state => state.modal.checkOutModal);
  return (
    <React.Fragment>
      <CostumThemeProvider>
        <CssBaseline />
        <CheckOutModal open={isOpen} />
        <Navbar />
        <Product />
        <Footer />
        <SideBar />
      </CostumThemeProvider>
    </React.Fragment>
  );
};

export default ProductPageLayout;
