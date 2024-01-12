

import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

export const configureStore =()=> {
    return createStore(rootReducer);
}