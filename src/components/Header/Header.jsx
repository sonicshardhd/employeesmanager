import React, { useState } from 'react'
import classes from './Header.module.css'
import { connect } from 'react-redux'
import LogRegGroup from './LogRegGroup/LogRegGroup'
import DropDownActions from './DropDownActions/DropDownActions'
import SearchBox from './SearchBox/SearchBox'
import ModalAlert from '../../UI/ModalAlert/ModalAlert'
import { ModalNewEmployeeRedux } from './ModalNewEmployee/ModalNewEmployee'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Modal, ModalHeader, ModalBody} from "shards-react"
import { NavLink as RouterNavLink } from 'react-router-dom'
import { addEmployee } from '../../redux/employeesReducer'


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
      <LogRegGroup />
      <Nav navbar>
            <NavItem>
            <RouterNavLink className={ classes.routernavlink } to='/myprofile'>
              <NavLink active>
                My Profile
              </NavLink>
              </RouterNavLink>
            </NavItem>
            <NavItem>
            <RouterNavLink className={ classes.routernavlink } to='/employees/1'>
              <NavLink active>
                Employees List
              </NavLink>
              </RouterNavLink>
            </NavItem>
            <DropDownActions newEmployeeToggler={ newEmployeeToggler } />
            <ModalNewEmployeeRedux onSubmit={ onSubmit } open={newEmployee} toggle={ newEmployeeToggler } />
            <ModalAlert open={added} toggle={newEmployeeAddedHandler} text='Employee successfully added!'/>
            </Nav>
      <SearchBox />
    </Navbar>
  );
}

export default connect(null, { addEmployee })(Header);
