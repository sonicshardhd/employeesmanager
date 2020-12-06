import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerAC } from '../../redux/loginReducer'
import classes from './Register.module.css'
import RegisterFormRedux from './RegisterForm/RegisterForm'


const Register = ({ isAuth, registerAC }) => {

    if (isAuth) return <Redirect to={'/myprofile'} />

    const onSubmit = registerData => {
        registerAC(registerData.name, registerData.surname, registerData.country, registerData.email, registerData.password, true);
    }

    return (
        <div className={classes.registerWrapper}>
            <div></div>
            <div className={classes.registerForm}>
                <RegisterFormRedux onSubmit={onSubmit} />
            </div>
            <div></div>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuth: state.loginData.isAuth
})

export default connect(mapStateToProps, { registerAC })(Register);
