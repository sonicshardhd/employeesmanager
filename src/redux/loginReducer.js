const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

let initialState = {
    currentEmail: null,
    currentPassword: null,
    currentRememberMe: false,
    isAuth: false
}

let loginReducer = (state = initialState, action) => {

    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                ...action.payload,
            }
        case LOGOUT:
            return {
                ...state,
                currentEmail: null,
                currentPassword: null,
                currentRememberMe: false,
                isAuth: false
            }
        default:
            return state;
    }
}

export const loginAC = (currentEmail, currentPassword, currentRememberMe, isAuth) => 
                       ( { type: LOGIN, payload: { currentEmail, currentPassword, currentRememberMe, isAuth }} )
export const logoutAC = () => ({ type: LOGOUT })

export default loginReducer;