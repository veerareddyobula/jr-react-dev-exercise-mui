import {GET_ITEMS_LIST} from "./ActionTypes";

const initialState = {
    items: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS_LIST:
            return Object.assign({}, {
                items: action.payload
            });

        default:
            return state;
    }
}