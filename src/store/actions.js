export const TOOGLE_CHECKOUT_MODAL = 'TOOGLE_CHECKOUT_MODAL';
export const ADD_TO_SHOPPING_CHART = 'ADD_TO_SHOPPING_CHART';
export const REMOVE_FROM_SHOPPING_CHART = 'REMOVE_FROM_SHOPPING_CHART';
export const UPDATE_SHOPPING_CHART_FROM_LOCAL_STORE =
  'UPDATE_SHOPPING_CHART_FROM_LOCAL_STORE';

export const SET_PRODUCT_COLOR = 'SET_PRODUCT_COLOR';
export const SET_PRODUCT_QUANTITY = 'SET_PRODUCT_QUANTITY';
export const SET_PRODUCT_SIZE = 'SET_PRODUCT_SIZE';
export const INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY';
export const DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY';
export const SHOW_ADD_TO_SHOPPING_CHART_ERROR =
  'SHOW_ADD_TO_SHOPPING_CHART_ERROR';

export const updateShoppingChartFromLocalStore = () => {
  return {
    type: UPDATE_SHOPPING_CHART_FROM_LOCAL_STORE
  };
};

export const setProductQuantity = value => {
  return {
    type: SET_PRODUCT_QUANTITY,
    value: value
  };
};
export const increaseProductQuantity = () => {
  return {
    type: INCREASE_PRODUCT_QUANTITY
  };
};
export const decreaseProductQuantity = () => {
  return {
    type: DECREASE_PRODUCT_QUANTITY
  };
};
