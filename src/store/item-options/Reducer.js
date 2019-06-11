import { GET_ITEM_OPTIONS } from "./ActionTypes";

const initialState = {
  itemOptions: {
    options: {}
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEM_OPTIONS:
      const { itemOptions } = initialState;
      itemOptions.options = action.payload;
      return Object.assign({}, itemOptions);

    default:
      return state;
  }
};
