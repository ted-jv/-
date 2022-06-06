import { createStore, applyMiddleware } from "redux";
import rootReducer from "./modules/index";
import thunk from "redux-thunk";

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);

export default store;
