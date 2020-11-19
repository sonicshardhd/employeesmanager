import React from 'react'
import classes from './Header.module.css'
import { Navbar, NavbarBrand, Nav } from "shards-react"
import { Badge } from "shards-react"
import { connect } from 'react-redux'
import { logoutAC } from '../../redux/loginReducer'
import ButtonLink from '../../UI/ButtonLink/ButtonLink'

const Header = props => {
  return (
    <Navbar type="dark" theme="info" expand="md" className={ classes.header }>
      <NavbarBrand>Employees Manager</NavbarBrand>
      {
        !props.isLogined && !props.isRegistered ?
          <Nav className={ classes.nav } navbar>
            <ButtonLink to={ '/login' } 
                        text={ 'Sign In' } />
            <ButtonLink to={ '/register' } 
                        text={ 'Sign Up' } />
          </Nav>
          : <Nav className={ classes.nav } navbar>
            <ButtonLink to={ '/login' } 
                        text={ 'Log Out' } 
                        onClick={ props.logoutAC }/>
          </Nav>
      }
      {
        (props.isLogined || props.isRegistered) 
        ? <Badge className={ classes.badge }>You are logined as 
        <span> { props.currentLoginEmail || props.currentRegisterEmail }</span>
        </Badge> 
        : <></>
      }
    </Navbar>
  );
}

const mapStateToProps = state => ({
    isLogined: state.loginData.isAuth,
    isRegistered: state.registerData.isAuth,
    currentLoginEmail: state.loginData.currentEmail,
    currentRegisterEmail: state.registerData.currentEmail
  }
)

export default connect(mapStateToProps, { logoutAC })(Header);
