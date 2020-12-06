import React from 'react'
import classes from './LogRegGroup.module.css'
import ButtonLink from '../../../UI/ButtonLink/ButtonLink'
import { Nav, ButtonGroup } from "shards-react"


const LogRegGroup = React.memo(props => {
    return (
        <>
            {
                !props.isAuth ?
                    <ButtonGroup size="sm">
                        <ButtonLink to={'/login'}
                                    text={'Sign In'} />
                        <ButtonLink to={'/register'}
                                    text={'Sign Up'} />
                    </ButtonGroup>
                    : <Nav navbar>
                        <ButtonLink to={'/login'}
                                    text={'Log Out'}
                                    onClick={props.logoutAC} />
                    </Nav>
            }
        </>
    )
})

export default LogRegGroup;
