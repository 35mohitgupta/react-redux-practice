import { combineReducers } from 'redux'
import userReducer from './user/userReducer'
import visibilityReducer from './uservisibility/visibilityReducers'

const rootReducer = combineReducers({
    users: userReducer,
    visibility: visibilityReducer
})

export default rootReducer