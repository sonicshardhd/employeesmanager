import classes from './ButtonLink.module.css'
import React from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { NavItem, NavLink } from "shards-react"
import { Button } from "shards-react"

const ButtonLink = props => {
    return (
        <NavItem onClick={ props.onClick } >
            <RouterNavLink to={ props.to } >
              <NavLink active>
                <Button>{ props.text }</Button>
              </NavLink>
            </RouterNavLink>
        </NavItem>
    )
}

export default ButtonLink;