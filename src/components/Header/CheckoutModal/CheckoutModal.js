import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import * as actionTypes from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import classes from './CheckoutModal.module.css';
import CheckoutItemList from './CheckoutItemList/CheckoutItemList';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Link } from 'react-router-dom';

const CheckoutModal = () => {
  const isCheckoutModalOpen = useSelector(
    state => state.modal.isCheckoutModalOpen
  );

  const dispatch = useDispatch();

  return (
    <div>
      <Dialog
        open={isCheckoutModalOpen}
        onClose={() => dispatch({ type: actionTypes.TOOGLE_CHECKOUT_MODAL })}
        aria-labelledby='scroll-dialog-title'
      >
        <DialogContent dividers={true}>
          <CheckoutItemList />
        </DialogContent>
        <DialogActions>
          <Link to={'/checkout'} style={{ width: '100%' }}>
            <button
              className={classes.btn + ' ' + classes.red}
              type='button'
              onClick={() => {
                dispatch({ type: actionTypes.TOOGLE_CHECKOUT_MODAL });
              }}
            >
              <span>Continue To CheckOut</span>
            </button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CheckoutModal;
