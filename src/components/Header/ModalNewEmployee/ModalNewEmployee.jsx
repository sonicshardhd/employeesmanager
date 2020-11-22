import React, { useState } from 'react'
import classes from './ModalNewEmployee.module.css'
import { Modal, ModalHeader, ModalBody, InputGroup, InputGroupAddon, InputGroupText, FormInput, Button, Badge, Form } from "shards-react"
import { Field, reduxForm } from 'redux-form'
import { NameInput, AgeInput, SalaryInput } from '../../../common/FormsControl/FormsControl'
import { required } from '../../../ultis/validators/validators'
import { faSignature, faCoins, faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ModalNewEmployee = props => {

    const [nameError, setNameError] = useState(false);
    const [ageError, setAgeError] = useState(false);
    const [salaryError, setSalaryError] = useState(false);

    const onChangeNameError = (hasError) => {
        setNameError( hasError );
    }

    const onChangeAgeError = (hasError) => {
        setAgeError( hasError );
    }

    const onChangeSalaryError = (hasError) => {
        setSalaryError( hasError );
    }

    return (
        <div>
            <Modal open={props.open} toggle={props.toggle}>
                <ModalHeader>Fill all the fields:</ModalHeader>
                <ModalBody>
                    <Form onSubmit={ props.handleSubmit }>
                    <div><label htmlFor="#username">Name</label></div>
                    <InputGroup className="mb-2">
                        <InputGroupAddon type="prepend">
                            <InputGroupText><FontAwesomeIcon icon={faSignature}/></InputGroupText>
                        </InputGroupAddon>
                        <Field name='name' component={NameInput} validate={ [required] } onChangeNameError={onChangeNameError}/>
                    </InputGroup>
                    {
                        nameError ? <Badge theme='danger'>{nameError}</Badge> : null
                    }
                    <div><label htmlFor="#username">Age</label></div>
                    <InputGroup className="mb-2">
                        <InputGroupAddon type="prepend">
                            <InputGroupText><FontAwesomeIcon icon={faBirthdayCake}/></InputGroupText>
                        </InputGroupAddon>
                        <Field name='age' component={AgeInput} validate={ [required] } onChangeAgeError={onChangeAgeError}/>
                    </InputGroup>
                    {
                        ageError ? <Badge theme='danger'>{ageError}</Badge> : null
                    }
                    <div><label htmlFor="#username">Salary</label></div>
                    <InputGroup className="mb-2">
                        <InputGroupAddon type="prepend">
                            <InputGroupText><FontAwesomeIcon icon={faCoins}/></InputGroupText>
                        </InputGroupAddon>
                        <Field name='salary' component={SalaryInput} validate={ [required] } onChangeSalaryError={onChangeSalaryError}/>
                    </InputGroup>
                    {
                        salaryError ? <Badge theme='danger'>{salaryError}</Badge> : null
                    }
                    <div style={{'margin-top': '5px'}}></div>
                    <Button theme='light' disabled={ props.valid ? false : true }>Add Employee</Button>
                    </Form>
                    </ModalBody>
            </Modal>
        </div>
    )
}

export const ModalNewEmployeeRedux = reduxForm( {form: 'newEmployee'} )(ModalNewEmployee);