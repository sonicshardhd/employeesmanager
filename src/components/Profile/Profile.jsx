import React from 'react'
import classes from './Profile.module.css'
import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
} from "shards-react";


const Profile = props => {

    return (
        <Card style={ {maxWidth: "300px"} }>
            <CardHeader>Card header</CardHeader>
            <CardImg src="https://place-hold.it/300x200" />
            <CardBody>
                <CardTitle>{ props.employeeProfile.employee_name }</CardTitle>
                <p>Employee ID: { props.employeeProfile.id }</p>
                <p>Employee AGE: { props.employeeProfile.employee_age }</p>
                <p>Employee SALARY: { props.employeeProfile.employee_salary }</p>
            </CardBody>
            <CardFooter>Card footer</CardFooter>
        </Card>
    )
}

export default Profile;