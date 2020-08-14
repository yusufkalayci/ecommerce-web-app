import React from 'react';

const ProductHeader = props => {
  return (
    <React.Fragment>
      <h1 style={{ textAlign: 'left', margin: '0' }}>{props.productName}</h1>
    </React.Fragment>
  );
};

export default ProductHeader;
