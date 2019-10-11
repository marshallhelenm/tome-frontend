import {combineReducers} from 'redux'
import worlds from './worldsReducer.js'
import auth from './authReducer.js'
import stories from './storiesReducer.js'
import characters from './charactersReducer.js'

export default combineReducers({
    worlds, auth, stories, characters
})