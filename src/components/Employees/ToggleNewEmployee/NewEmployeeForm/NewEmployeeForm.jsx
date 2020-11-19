import React from 'react'
import classes from './NewEmployeeForm.module.css'
import { Button } from "shards-react"
import { Form, FormInput, FormGroup } from "shards-react"
import { CardTitle } from "shards-react"


const NewEmployeeForm = React.memo(props => {

    return (
        <Form>
            <CardTitle>New Employee</CardTitle>
            <FormGroup>
                <label htmlFor="#name">Name</label>
                <FormInput id="#name" placeholder="Name" onChange={props.onChangeName} value={props.name}/>
            </FormGroup>
            <FormGroup>
                <label htmlFor="#age">Age</label>
                <FormInput  id="#age" placeholder="Age" onChange={props.onChangeAge} value={props.age}/>
            </FormGroup>
            <FormGroup>
                <label htmlFor="#salary">Salary</label>
                <FormInput  id="#salary" placeholder="Salary" onChange={props.onChangeSalary} value={props.salary}/>
            </FormGroup>
            <Button className={classes.buttonAdd} 
                    onClick={ () => props.addEmployee( {name: props.name, age: props.age, salary:props.salary} ) }>
                        Add
            </Button>
        </Form>
    )
})

export default NewEmployeeForm;