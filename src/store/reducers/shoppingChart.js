import * as actionTypes from '../actions';

const initialState = {
  shoppingListCount: 0,
  checkOutProducts: []
};

const shoppingChart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_SHOPPING_CHART:
      return {
        ...state,
        checkOutProducts: state.checkOutProducts.concat(action.value),
        shoppingListCount: state.checkOutProducts.length + 1
      };
    case actionTypes.REMOVE_FROM_SHOPPING_CHART:
      const updatetList = state.checkOutProducts.filter(
        product => product !== action.value
      );
      return {
        ...state,
        checkOutProducts: updatetList,
        shoppingListCount: state.checkOutProducts.length - 1
      };
    case actionTypes.UPDATE_SHOPPING_CHART_FROM_LOCAL_STORE:
      const productList = window.localStorage.getItem('persist:root');
      return {
        shoppingListCount: JSON.parse(JSON.parse(productList).shoppingChart)
          .shoppingListCount,
        checkOutProducts: JSON.parse(JSON.parse(productList).shoppingChart)
          .checkOutProducts
      };

    default:
      return state;
  }
};

export default shoppingChart;
