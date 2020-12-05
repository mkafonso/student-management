import { combineReducers } from "redux";

// import reducers
import userReducer from "./user/user.reducer";

export default combineReducers({ user: userReducer });
