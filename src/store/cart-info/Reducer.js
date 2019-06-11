import { GET_CART_ITEM, POST_CART_ITEM, DELETE_CART_ITEM } from "./ActionTypes";
import _ from 'lodash';

const initialState = {
    cartInfo:{
        items: []
    }
};

export default (state = initialState, action) => {
  let { cartInfo } = state;
  if(!cartInfo || !cartInfo.items){
    cartInfo = initialState.cartInfo
  }
  switch (action.type) {
    case GET_CART_ITEM:
      if (!cartInfo) {
        return Object.assign({}, initialState);
      }
      return Object.assign({}, cartInfo);
    case POST_CART_ITEM:
      if (cartInfo && cartInfo.items) {
        cartInfo.items.push(action.payload);
      } else {
        cartInfo.items.push(action.payload);
        return Object.assign({}, cartInfo);
      }
      return Object.assign({}, cartInfo);
    case DELETE_CART_ITEM:
      const { payload } = action;
      if (cartInfo && cartInfo.items) {
        _.remove(cartInfo.items, item => {
          return item.item_id === payload.item_id;
        });
      } else {
        return Object.assign({}, initialState);
      }
      return Object.assign({}, cartInfo);
    default:
      return state;
  }
};
