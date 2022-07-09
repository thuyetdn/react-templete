import { combineReducers } from "redux";
import Web, { WebState } from "./web/reducers";

export type RootState = {
  Web: WebState;
};

export const Reducers = combineReducers({
  Web,
});
