import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { contactReducer } from "./redux/reducers/contactReducers";


const initialState = {};

const reducer = combineReducers({
    Contacts:contactReducer,
})
const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhance(applyMiddleware(thunk)));

export default store;