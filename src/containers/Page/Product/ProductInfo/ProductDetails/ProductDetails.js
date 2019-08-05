import React from 'react';
import styles from './ProductDetails.module.css';
import Collapse from '@material-ui/core/Collapse';

const ProductDetails = props => {
  const [decriptionChecked, setDescriptionChecked] = React.useState(true);
  const [detailsChecked, setDetailsChecked] = React.useState(true);

  function handleDetailsChecked() {
    setDetailsChecked(prev => !prev);
  }

  function handleDescriptionChecked() {
    setDescriptionChecked(prev => !prev);
  }

  return (
    <React.Fragment>
      <button className={styles._button} onClick={handleDescriptionChecked}>
        DESCRIPTION
      </button>

      <hr style={{ width: '100%' }} />

      <Collapse in={decriptionChecked}>
        <p>{props.productDescription}</p>
      </Collapse>
      <button className={styles._button} onClick={handleDetailsChecked}>
        DETAILS
      </button>

      <hr style={{ width: '100%' }} />

      <Collapse in={detailsChecked}>
        <p>{props.productDetails}</p>
      </Collapse>
    </React.Fragment>
  );
};

export default ProductDetails;
