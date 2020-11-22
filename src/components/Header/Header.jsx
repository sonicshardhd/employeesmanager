import React from 'react'
import classes from './Header.module.css'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react'
import { Navbar, NavbarBrand, Nav, NavbarToggler,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse } from "shards-react"
import { Badge } from "shards-react"
import { connect } from 'react-redux'
import { logoutAC } from '../../redux/loginReducer'
import ButtonLink from '../../UI/ButtonLink/ButtonLink'


const Header = props => {

  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown( prevdropdown => !prevdropdown )
  }

  return (
    <Navbar type="dark"  expand="md" className={ classes.header }>
      <NavbarBrand>Employees Manager</NavbarBrand>
      
      <Nav navbar>
            <NavItem>
              <NavLink active href="#">
                Active
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" disabled>
                Disabled
              </NavLink>
            </NavItem>
            <Dropdown
              open={dropdown}
              toggle={toggleDropdown}
            >
              <DropdownToggle nav caret>
                Dropdown
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            
            </Nav>
            
            
         
      <Nav navbar className="ml-auto">
            <InputGroup size="sm" seamless>
              <InputGroupAddon type="prepend">
                <InputGroupText>
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroupText>
              </InputGroupAddon>
              <FormInput className="border-0" placeholder="Search..." />
            </InputGroup>
          </Nav>
          {
        !props.isLogined && !props.isRegistered ?
          <Nav navbar>
            <ButtonLink to={ '/login' } 
                        text={ 'Sign In' } />
            <ButtonLink to={ '/register' } 
                        text={ 'Sign Up' } />
          </Nav>
          : <Nav navbar>
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
