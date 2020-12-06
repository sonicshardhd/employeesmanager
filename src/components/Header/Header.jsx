import React, { useState } from 'react'
import classes from './Header.module.css'
import { connect } from 'react-redux'
import LogRegGroup from './LogRegGroup/LogRegGroup'
import DropDownActions from './DropDownActions/DropDownActions'
import SearchBox from './SearchBox/SearchBox'
import ModalAlert from '../../UI/ModalAlert/ModalAlert'
import { ModalNewEmployeeRedux } from './ModalNewEmployee/ModalNewEmployee'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Badge} from "shards-react"
import { NavLink as RouterNavLink } from 'react-router-dom'
import { addEmployee } from '../../redux/employeesReducer'
import { logoutAC } from '../../redux/loginReducer'


const Header = props => {

  const [newEmployee, setNewEmployee] = useState(false);
  const [added, setAdded] = useState(false);

  const newEmployeeToggler = () => {
    setNewEmployee(!newEmployee)
  }

  const newEmployeeAddedHandler = () => {
    setAdded( false );
  }

  const onSubmit = newEmployeeData => {
    props.addEmployee(newEmployeeData);
    setAdded( !added );
    setNewEmployee( false );
  }

  return (
    <Navbar type="dark" theme='dark' expand="md" className={ classes.header }>
      <NavbarBrand>Employees Manager</NavbarBrand>
      <LogRegGroup isAuth={props.isAuth} 
                   logoutAC={props.logoutAC}/>
      <Nav navbar>
            <NavItem>
            <RouterNavLink className={ classes.routernavlink } 
                           to='/myprofile'>
              <NavLink active>
                My Profile
              </NavLink>
              </RouterNavLink>
            </NavItem>
            <NavItem>
            <RouterNavLink className={ classes.routernavlink } 
                           to={`/employees/${props.currentPage}`}>
              <NavLink active>
                Employees List
              </NavLink>
              </RouterNavLink>
            </NavItem>
            <DropDownActions newEmployeeToggler={ newEmployeeToggler } />
            {newEmployee 
            ? <ModalNewEmployeeRedux onSubmit={ onSubmit } 
                                     open={newEmployee} 
                                     toggle={ newEmployeeToggler } /> 
            : null}
            <ModalAlert open={added} 
                        toggle={newEmployeeAddedHandler} 
                        theme={'success'} 
                        text='Employee successfully added!'/>
            </Nav>
      <SearchBox />
      {
        props.isAuth 
        ? <div className={classes.currentUser}>
          <Badge theme='info'>
              {props.currentUser.name + ' ' + props.currentUser.surname}
          </Badge>
      </div>
        : null
      }
    </Navbar>
  );
}

const mapStateToProps = state => ({
    currentPage: state.employeesData.currentPage,
    currentUser: state.loginData.currentUser,
    isAuth: state.loginData.isAuth
})

export default connect(mapStateToProps, { addEmployee, logoutAC })(Header);
