import {combineReducers} from 'redux'
import worlds from './worldsReducer.js'
import auth from './authReducer.js'

export default combineReducers({
    worlds, auth
})