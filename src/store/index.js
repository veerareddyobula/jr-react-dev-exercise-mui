import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import itemsListReducer from "./items-list/Reducer";
import itemOptionsReducer from "./item-options/Reducer";
import cartInfoReducer from "./cart-info/Reducer";

const combinedReducers = combineReducers({
  itemsList: itemsListReducer,
  itemOptions: itemOptionsReducer,
  cartInfo: cartInfoReducer
});

const store = createStore(combinedReducers, {}, applyMiddleware(reduxThunk));
export default store;
