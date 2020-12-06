import React from 'react'
import classes from './EmployeeCard.module.css'
import { NavLink } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardImg, CardBody, Button, Container, Col,CardSubtitle} from "shards-react"


const EmployeeCard = React.memo(props => {

    return (
        <Card style={ { maxWidth: "300px" } }>
            <CardHeader>
                <Container>
                    <Col className={classes.header}><CardSubtitle>Employee # {props.id}</CardSubtitle></Col></Container></CardHeader>
                <CardImg src="https://place-hold.it/300x200" />
                    <CardBody>
                        <CardTitle>{ props.name }</CardTitle>
                        <CardSubtitle className={classes.informField}>Employee ID: {props.id}</CardSubtitle>
                            <NavLink to={ `/profile/${props.id}` }>
                                <Button  theme='info' className={ classes.button }>Read more &rarr;</Button>
                            </NavLink>
                            <Button outline theme='info' onClick={ () => props.getDeletedEmployeeId(props.id) }>Delete Employee</Button>
                    </CardBody>
        </Card>
    )
})

export default EmployeeCard;
