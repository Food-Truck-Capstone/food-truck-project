import {configureStore, combineReducers} from '@reduxjs/toolkit'
import misquotes from './misquotes.js'

const reducer = combineReducers({misquotes})
export default configureStore({reducer})