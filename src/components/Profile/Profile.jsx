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


const Profile = React.memo(({employeeProfile}) => {

    return (
        <Card style={ {maxWidth: "300px"} }>
            <CardHeader>Employee Information:</CardHeader>
            <CardImg src="https://place-hold.it/300x200" />
            <CardBody>
                <CardTitle>{ employeeProfile.employee_name }</CardTitle>
                <p>Employee ID: { employeeProfile.id }</p>
                <p>Employee AGE: { employeeProfile.employee_age }</p>
                <p>Employee SALARY: { employeeProfile.employee_salary }</p>
            </CardBody>
            <CardFooter>(C)</CardFooter>
        </Card>
    )
})

export default Profile;
