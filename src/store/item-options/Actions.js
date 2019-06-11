import { GET_ITEM_OPTIONS } from "./ActionTypes";
import { itemOptions } from "../../services/options";

export const fetchItemOptions = items => dispatch => {
  dispatch({
    type: GET_ITEM_OPTIONS,
    payload: itemOptions
  });
};
