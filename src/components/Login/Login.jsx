import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginAC } from '../../redux/loginReducer'
import { LoginFormRedux } from './LoginForm/LoginForm'
import classes from './Login.module.css'


const LoginComponent = props => {

    if (props.isAuth) return <Redirect to={'/myprofile'} />

    const onSubmit = loginData => {
        props.registeredUsers.some(user => loginData.email === user.email && loginData.password === user.password)
        ? props.loginAC(loginData.email, loginData.password, loginData.rememberMe, true)
        : props.loginAC(null, null, false, false)
    }

    return (
        <div className={ classes.loginWrapper }>
            <div></div>
            <div>
                <h1>LOGIN</h1>
                <LoginFormRedux onSubmit={ onSubmit } />
            </div>
            <div></div>
        </div>
    )
}

const mapStateToProps = state => ({
        isAuth: state.loginData.isAuth,
        registeredUsers: state.registerData.registeredUsers
    }
)

export const Login = connect(mapStateToProps, { loginAC })(LoginComponent);