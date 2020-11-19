import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { EmailInput, PasswordInput, CheckboxInput } from '../../../common/FormsControl/FormsControl'
import { Button, Form, FormGroup } from 'shards-react'
import { required, emailValidation } from '../../../ultis/validators/validators'

const LoginForm = props => {
    return (
        <Form onSubmit={ props.handleSubmit }>
            <FormGroup>
                <label htmlFor="username">E-mail</label>
                <Field name="email" component={ EmailInput } validate={ [required, emailValidation] }/>
            </FormGroup>
            <FormGroup>
                <label htmlFor="password">Password</label>
                <Field name="password" component={ PasswordInput } validate={ [required] }/>
            </FormGroup>
            <FormGroup>
                <Field name="rememberMe" component={ CheckboxInput } />
            </FormGroup>
            <Button theme='light' disabled={ props.valid ? false : true }>Login</Button>
        </Form>
    )
}

export const LoginFormRedux = reduxForm( {form: 'login'} )(LoginForm);