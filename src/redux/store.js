import ReduxThunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import dataReducer from "./Reducers/BotReducer";

const rootReducer = combineReducers({
  botReducer: dataReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
