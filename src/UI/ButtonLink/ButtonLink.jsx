import classes from './ButtonLink.module.css'
import React from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { Button } from "shards-react"

const ButtonLink = ({ text, to, onClick }) => {
  return (
    <RouterNavLink to={to} >
      <Button size='sm' outline squared theme='info' onClick={onClick}>
        {text}
      </Button>
    </RouterNavLink>
  )
}

export default ButtonLink;
