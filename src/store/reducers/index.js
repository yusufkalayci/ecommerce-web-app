import { combineReducers } from 'redux';
import shoppingChart from './shoppingChart';
import modal from './modal';
import productInfo from './productInfo';

export default combineReducers({
  shoppingChart: shoppingChart,
  modal: modal,
  productInfo: productInfo
});
