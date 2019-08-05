import * as actionTypes from '../actions';

const initialState = {
  isCheckoutModalOpen: false
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOOGLE_CHECKOUT_MODAL:
      return {
        ...state,
        isCheckoutModalOpen: !state.isCheckoutModalOpen
      };
    default:
      return state;
  }
};

export default modal;
