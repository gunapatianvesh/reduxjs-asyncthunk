import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "../store/reducers/userReducer";

const rootReducer = combineReducers({ users: userReducer });
const middlewares = applyMiddleware(thunk);
const store = createStore(rootReducer, middlewares);

export default store;
