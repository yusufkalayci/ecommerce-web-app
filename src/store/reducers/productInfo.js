import * as actionTypes from '../actions';

const initialState = {
  productQuantity: 1,
  productSize: 1,
  productColor: null,
  hasError: true,
  showError: false
};

const productInfo = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCT_QUANTITY:
      return {
        productQuantity: Number(action.value) > 1 ? Number(action.value) : 1
      };
    case actionTypes.SET_PRODUCT_SIZE:
      return {
        ...state,
        hasError: false,
        showError: false,
        productSize: action.value
      };
    case actionTypes.SET_PRODUCT_COLOR:
      return {
        ...state,
        productColor: action.value
      };
    case actionTypes.INCREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        productQuantity: state.productQuantity + 1
      };
    case actionTypes.SHOW_ADD_TO_SHOPPING_CHART_ERROR:
      return {
        ...state,
        showError: true
      };

    case actionTypes.DECREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        productQuantity:
          state.productQuantity > 1 ? state.productQuantity - 1 : 1
      };
    default:
      return state;
  }
};

export default productInfo;
