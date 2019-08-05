import React, { useState, useEffect } from 'react';
import axios from '../../../axios/axios';
import classes from './Product.module.css';
import ProductImage from './ProductImage/ProductImage';
import ProductInfo from './ProductInfo/ProductInfo';
import Grid from '@material-ui/core/Grid';

const Product = props => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await axios
        .get('/products/' + props.match.params.id + '.json')
        .then(result => setData(result.data));
      setIsLoading(false);
    };

    fetchData();
  }, [props.match.params.id]);

  if (isLoading) return <div>loading...</div>;
  else
    return (
      <div className={classes.container}>
        <Grid
          container
          spacing={4}
          direction='row'
          justify='space-between'
          alignItems='flex-start'
        >
          <Grid container item xs={12} md={7}>
            <ProductImage productImage={data.productImage} />
          </Grid>
          <Grid container item xs={12} md={5}>
            <ProductInfo
              productName={data.productName}
              productDescription={data.productDescription}
              productDetails={data.productDetails}
              productPrice={data.productPrice}
              productId={props.match.params.id}
              productImage={data.productImage}
              colorOptions={data.colorOptions}
              sizeOptions={data.sizeOptions}
              currency={'euro'}
            />
          </Grid>
        </Grid>
      </div>
    );
};

export default Product;
