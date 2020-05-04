import { createStore, applyMiddleware } from 'redux'
import {createLogger} from 'redux-logger'
// import cakeReducer from './cake/cakeReducer'
import thunk from 'redux-thunk'
// import userReducer from './user/userReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(createLogger(),thunk)))

export default store