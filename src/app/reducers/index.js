import {combineReducers} from "redux"
import math from './MathReducer';
import user from './UserReducer';


export default combineReducers({math, user})