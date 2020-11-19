import React, { useState, useEffect } from 'react'
import classes from './ToggleNewEmployee.module.css'
import { Button } from "shards-react"
import { Collapse } from "shards-react"
import NewEmployeeForm from './NewEmployeeForm/NewEmployeeForm'


const ToggleNewEmployee = React.memo( props => {

    const [collapse, setCollapse] = useState(false);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [salary, setSalary] = useState('');

    const openForm = () => {
        setCollapse(!collapse);
    }

    const onChangeName = (e) => {
        setName(e.currentTarget.value);
    }

    const onChangeAge = (e) => {
        setAge(e.currentTarget.value);
    }

    const onChangeSalary = (e) => {
        setSalary(e.currentTarget.value);
    }

    return (
        <div>
            <Button onClick={openForm}>Add new employee</Button>
                <Collapse open={collapse} className={classes.collapse}>
                    <NewEmployeeForm name={name}
                                     age={age}
                                     salary={salary}
                                     onChangeName={onChangeName}
                                     onChangeAge={onChangeAge}
                                     onChangeSalary={onChangeSalary}
                                     addEmployee={props.addEmployee}/>
                </Collapse>
        </div>
    )
})

export default ToggleNewEmployee;
