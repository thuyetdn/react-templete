import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Reducers } from "./reducers";

const store = createStore(Reducers, composeWithDevTools(applyMiddleware()));

export { default as Actions } from "./actions";

export default store;
