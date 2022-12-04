import {configureStore, combineReducers} from '@reduxjs/toolkit'
import truck from "./truck.js";
import menus from "./menus.js";

const reducer = combineReducers({truck,menus})
export default configureStore({reducer})

