const REGISTER = 'REGISTER'

let initialState = {
    registeredUsers: [
        {
            email: 'dimka@gmail.com',
            password: 'dimka',
            id: 1
        },
        {
            email: 'vlados@gmail.com',
            password: 'vlados',
            id: 2
        }
    ],
    currentEmail: null,
    currentPassword: null,
    currentRememberMe: false,
    isAuth: false,
    usersNum: 2
}

let registerReducer = (state = initialState, action) => {

    switch(action.type) {
        case REGISTER:
            return {
                ...state,
                registeredUsers: [...state.registeredUsers, { email: action.email, password: action.password, id: state.usersNum + 1 }],
                currentEmail: action.email,
                currentPassword: action.password,
                currentRememberMe: action.rememberMe,
                usersNum: state.usersNum + 1,
                isAuth: true
            }
    }
    return state;
}

export const registerAC = (email, password, rememberMe) => ( { type: REGISTER, email, password, rememberMe} )

export default registerReducer;