import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { EmailInput, PasswordInput, CheckboxInput } from '../../../common/FormsControl/FormsControl'
import { Button, Form, FormGroup } from 'shards-react'
import { required, emailValidation } from '../../../ultis/validators/validators'


const RegisterForm = props => {
    return (
        <Form onSubmit={ props.handleSubmit }>
            <FormGroup>
                <label htmlFor="username">E-mail</label>
                <Field name="email" component={EmailInput} validate={ [required, emailValidation] }/>
            </FormGroup>
            <FormGroup>
                <label htmlFor="username">Password</label>
                <Field name="password" component={PasswordInput} validate={ [required] }/>
            </FormGroup>
            <FormGroup>
                <Field name="rememberMe" component={CheckboxInput}/>
            </FormGroup>
            <Button theme='light' disabled={ props.valid ? false : true }>Register</Button> 
        </Form>
    )
}

const RegisterFormRedux = reduxForm( {form: 'register'} )(RegisterForm);

export default RegisterFormRedux;