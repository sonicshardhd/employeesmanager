import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import employeesReducer from './employeesReducer'
import profileReducer from './profileReducer'
import loginReducer from './loginReducer'
import registerReducer from './registerReducer'
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    employeesData: employeesReducer,
    profileData: profileReducer,
    loginData: loginReducer,
    registerData: registerReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;