import { GET_ITEMS_LIST } from "./ActionTypes";
import { itemsList } from "./../../services/items";

export const fetchItemsList = items => dispatch => {
  dispatch({
    type: GET_ITEMS_LIST,
    payload: itemsList
  });
};
