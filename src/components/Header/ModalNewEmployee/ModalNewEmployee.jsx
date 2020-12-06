import React, { useState } from 'react'
import classes from './ModalNewEmployee.module.css'
import Input from '../../../UI/Input/Input'
import { Modal, ModalHeader, ModalBody, Button, Badge, Form } from "shards-react"
import { reduxForm } from 'redux-form'
import { GenericInput } from '../../../common/FormsControl/FormsControl'
import { required } from '../../../ultis/validators/validators'
import { faSignature, faCoins, faBirthdayCake } from "@fortawesome/free-solid-svg-icons";


const ModalNewEmployee = props => {

    const [nameError, setNameError] = useState(false);
    const [ageError, setAgeError] = useState(false);
    const [salaryError, setSalaryError] = useState(false);


    const onChangeNameError = (hasError) => {
        setNameError(hasError);
    }

    const onChangeAgeError = (hasError) => {
        setAgeError(hasError);
    }

    const onChangeSalaryError = (hasError) => {
        setSalaryError(hasError);
    }

    return (
        <div>
            <Modal open={props.open} toggle={props.toggle}>
                <ModalHeader>Fill all the fields:</ModalHeader>
                <ModalBody>
                    <Form onSubmit={props.handleSubmit}>
                        <div><label htmlFor="#username">Name</label></div>
                        <Input icon={faSignature}
                               name="name"
                               component={GenericInput}
                               validate={[required]}
                               onChangeError={onChangeNameError}
                               placeholder={'Name'}
                               type='' />
                        {
                            nameError ? <Badge outline theme='danger'>{nameError}</Badge> : null
                        }
                        <div><label htmlFor="#username">Age</label></div>
                        <Input icon={faBirthdayCake}
                               name="age"
                               component={GenericInput}
                               validate={[required]}
                               onChangeError={onChangeAgeError}
                               placeholder={'Age'}
                               type='' />
                        {
                            ageError ? <Badge outline theme='danger'>{ageError}</Badge> : null
                        }
                        <div><label htmlFor="#username">Salary</label></div>
                        <Input icon={faCoins}
                               name="salary"
                               component={GenericInput}
                               validate={[required]}
                               onChangeError={onChangeSalaryError}
                               placeholder={'Salary'}
                               type='' />
                        {
                            salaryError ? <Badge outline theme='danger'>{salaryError}</Badge> : null
                        }
                        <div style={{ 'margin-top': '5px' }}></div>
                        <Button theme='light' disabled={props.valid ? false : true}>Add Employee</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export const ModalNewEmployeeRedux = reduxForm({ form: 'newEmployee' })(ModalNewEmployee);
