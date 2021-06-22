import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { addContactReducer, contactReducer, detailsContactReducer, updateContactReducer } from "./redux/reducers/contactReducers";


const initialState = {};

const reducer = combineReducers({
    Contacts:contactReducer,
    addContact:addContactReducer,
    detailsContact:detailsContactReducer,
    updateContact:updateContactReducer
})
const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhance(applyMiddleware(thunk)));

export default store;