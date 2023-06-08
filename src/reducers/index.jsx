import { combineReducers } from "redux";
import auth from "./auth";
import cars from "./cars";
import brands from "./brands";

export default combineReducers({ auth, cars, brands });
