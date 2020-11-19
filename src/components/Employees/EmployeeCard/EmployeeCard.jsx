import React from 'react'
import classes from './EmployeeCard.module.css'
import { NavLink } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardImg, CardBody, CardFooter, Button } from "shards-react"


const EmployeeCard = props => {
    return (
        <Card style={ { maxWidth: "300px" } }>
            <CardHeader>Card header</CardHeader>
                <CardImg src="https://place-hold.it/300x200" />
                    <CardBody>
                        <CardTitle>{ props.name }</CardTitle>
                            <p>Employee ID:{ props.id }</p>
                            <NavLink to={ `/profile/${props.id}` }>
                                <Button className={ classes.button }>Read more &rarr;</Button>
                            </NavLink>
                            <Button onClick={ () => props.deleteEmployee(props.id) }>Delete Employee</Button>
                    </CardBody>
            <CardFooter>Card footer</CardFooter>
        </Card>
    )
}

export default EmployeeCard;
