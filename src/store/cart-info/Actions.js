import { GET_CART_ITEM, POST_CART_ITEM, DELETE_CART_ITEM } from "./ActionTypes";

export const fetchCartOrders = items => dispatch => {
    dispatch({
      type: GET_CART_ITEM,
      payload: items
    });
  };

export const addOrderToCart = items => dispatch => {
  dispatch({
    type: POST_CART_ITEM,
    payload: items
  });
};

export const removeOrderFromCart = items => dispatch => {
  dispatch({
    type: DELETE_CART_ITEM,
    payload: items
  });
};
