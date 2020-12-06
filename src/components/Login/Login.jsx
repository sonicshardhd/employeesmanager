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
            ? props.loginAC(loginData.email, loginData.rememberMe, true)
            : props.loginAC();
    }

    return (
        <div className={classes.loginWrapper}>
            <div></div>
            <div className={classes.loginForm}>
                <LoginFormRedux onSubmit={onSubmit} />
            </div>
            <div></div>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuth: state.loginData.isAuth,
    registeredUsers: state.loginData.registeredUsers
}
)

export default connect(mapStateToProps, { loginAC })(LoginComponent);
