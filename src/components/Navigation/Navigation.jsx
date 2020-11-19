import React from 'react'
import classes from './Navigation.module.css'
import { Nav, NavItem, NavLink, Navbar } from "shards-react";
import { NavLink as RouterNavLink } from 'react-router-dom'

const Navigation = props => {
    return (
        <Nav className={ classes.navigationBlock } vertical>
            <NavItem className={classes.navigationItem}>
                <RouterNavLink to='/myprofile'>
                    <NavLink active>My Profile</NavLink>
                </RouterNavLink>
            </NavItem>
            <NavItem className={classes.navigationItem}>
                <RouterNavLink to='/employees/1'>
                    <NavLink active>Employees List</NavLink>
                </RouterNavLink>
            </NavItem>
        </Nav>
    )
}

export default Navigation;
