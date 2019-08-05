import React from 'react';
import classes from './ProductImage.module.css';

const ProductImage = props => {
  return (
    <div className={classes.imageContainer}>
      <img className={classes._img} src={props.productImage} alt='product' />
    </div>
  );
};

export default ProductImage;
