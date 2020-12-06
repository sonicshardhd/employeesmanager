const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const REGISTER = 'REGISTER'

const findUser = (users, email) => {
    return users.filter(user => user.email === email).shift();
}

let initialState = {
    registeredUsers: [
        {
            name: 'Dzmitry',
            surname: 'Stsepaniuk',
            country: 'Belarus',
            email: 'dimka@gmail.com',
            password: 'dimka',
            id: 1,
            rememberMe: false
        },
        {   
            name: 'Uladzislau',
            surname: 'Maksimau',
            country: 'Belarus',
            email: 'vlados@gmail.com',
            password: 'vlados',
            id: 2,
            rememberMe: false
        },
        {
            name: 'Roman',
            surname: 'Abdi',
            country: 'Belarus',
            email: 'roman@gmail.com',
            password: 'roman',
            id: 3,
            rememberMe: false
        }
    ],
    currentUser: {
    },
    usersNum: 3,
    isAuth: false
}

let loginReducer = (state = initialState, action) => {

    switch(action.type) {
        case LOGIN:
            let validatedUser = findUser(state.registeredUsers, action.payload.currentEmail);
            return {
                ...state,
                isAuth: action.payload.isAuth,
                currentUser: {...validatedUser, rememberMe: action.payload.rememberMe }
            }
        case LOGOUT:
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        case REGISTER:
            return {
                ...state,
                registeredUsers: [...state.registeredUsers, 
                    { 
                        email: action.email, 
                        password: action.password, 
                        name: action.name, 
                        surname: action.surname, 
                        country: action.country,
                        id: state.usersNum + 1 
                    }
                ],
                currentUser: {
                    email: action.email, 
                    password: action.password, 
                    name: action.name, 
                    surname: action.surname, 
                    country: action.country,
                    id: state.usersNum + 1 , rememberMe: action.rememberMe 
                },
                usersNum: state.usersNum + 1,
                isAuth: true
            }
        default:
            return state;
    }
}

export const loginAC = (currentEmail, currentRememberMe, isAuth) => 
                       ( { type: LOGIN, payload: { currentEmail, currentRememberMe, isAuth }} )
export const registerAC = (name, surname, country, email, password, rememberMe) => ( 
    { type: REGISTER, name, surname, country, email, password, rememberMe} 
    )
export const logoutAC = () => ({ type: LOGOUT })


export default loginReducer;
