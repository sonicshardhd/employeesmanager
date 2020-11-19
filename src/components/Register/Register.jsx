import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerAC } from '../../redux/registerReducer'
import classes from './Register.module.css'
import RegisterFormRedux from './RegisterForm/RegisterForm'


const Register = props => {

    if (props.isAuthFromRegister) return <Redirect to={ '/myprofile' } />

    const onSubmit = registerData => {
        props.registerAC(registerData.email, registerData.password, registerData.rememberMe, true );
    }

    return (
        <div className={ classes.registerWrapper }>
            <div></div>
            <div>
                <h1>REGISTER</h1>
                <RegisterFormRedux onSubmit={onSubmit}/>
            </div>
            <div></div>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthFromRegister: state.registerData.isAuth
})

export default connect(mapStateToProps, { registerAC })(Register);