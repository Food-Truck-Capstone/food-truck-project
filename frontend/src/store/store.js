import {configureStore, combineReducers} from '@reduxjs/toolkit'
import truck from "./truck.js";

const reducer = combineReducers({truck})
export default configureStore({reducer})

