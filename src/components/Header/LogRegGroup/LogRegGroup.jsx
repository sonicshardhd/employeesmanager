import React from 'react'
import classes from './LogRegGroup.module.css'
import { connect } from 'react-redux'
import { logoutAC } from '../../../redux/loginReducer'
import ButtonLink from '../../../UI/ButtonLink/ButtonLink'
import { Nav, Badge } from "shards-react"


const LogRegGroup = props => {
    return (
        <>
            {
                (props.isLogined || props.isRegistered)
                    ? <Badge theme='light'>
                        <span> {props.currentLoginEmail || props.currentRegisterEmail}</span>
                    </Badge>
                    : <></>
            }
            {
                !props.isLogined && !props.isRegistered ?
                    <Nav navbar>
                        <ButtonLink to={'/login'}
                            text={'Sign In'} />
                        <ButtonLink to={'/register'}
                            text={'Sign Up'} />
                    </Nav>
                    : <Nav navbar>
                        <ButtonLink to={'/login'}
                            text={'Log Out'}
                            onClick={props.logoutAC} />
                    </Nav>
            }
        </>
    )
}

const mapStateToProps = state => ({
    isLogined: state.loginData.isAuth,
    isRegistered: state.registerData.isAuth,
    currentLoginEmail: state.loginData.currentEmail,
    currentRegisterEmail: state.registerData.currentEmail
})

export default connect(mapStateToProps, { logoutAC })(LogRegGroup);