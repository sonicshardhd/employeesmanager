import React, { useState } from 'react'
import classes from './LoginForm.module.css'
import { faEnvelope, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { Field, reduxForm } from 'redux-form'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { CheckboxInput, GenericInput } from '../../../common/FormsControl/FormsControl'
import { Button, Form, Card, CardHeader, InputGroup, CardBody, CardTitle, CardSubtitle, Container, Col, Row, Badge } from 'shards-react'
import { required, emailValidation } from '../../../ultis/validators/validators'
import Input from '../../../UI/Input/Input'


const LoginForm = props => {

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const onChangeEmailError = (hasError) => {
        setEmailError(hasError);
    }

    const onChangePasswordError = (hasError) => {
        setPasswordError(hasError);
    }

    return (
        <Form onSubmit={props.handleSubmit}>
            <Card style={{ maxWidth: "500px" }}>
                <CardHeader>
                    <Container>
                        <Row>
                            <Col className={classes.header}>
                                <CardTitle>LOG IN</CardTitle>
                                <CardTitle></CardTitle>
                                <CardSubtitle>New to Employees Manager ?&nbsp;&nbsp;&nbsp;
                                    <RouterNavLink to='/register'>
                                        <Badge outline theme='info' href=''>SIGN UP FOR FREE
                                    </Badge>
                                    </RouterNavLink>
                                </CardSubtitle>
                            </Col>
                        </Row>
                    </Container>
                </CardHeader>
                <CardBody>
                    <CardTitle>E-mail</CardTitle>
                    <Input icon={faEnvelope} name="email" 
                           component={GenericInput} 
                           validate={[required, emailValidation]} 
                           onChangeError={onChangeEmailError} 
                           placeholder={'E-mail'} 
                           type='' />
                    {
                        emailError ? <Badge theme='danger' outline>{emailError}</Badge> : null
                    }
                    <CardTitle></CardTitle>
                    <CardTitle>Password</CardTitle>
                    <Input icon={faUnlock} 
                           name="password" 
                           component={GenericInput} 
                           validate={[required]} 
                           onChangeError={onChangePasswordError} 
                           placeholder={'Password'} 
                           type='password' />
                    {
                        passwordError ? <Badge theme='danger' outline>{passwordError}</Badge> : null
                    }
                    <CardTitle></CardTitle>
                    <InputGroup>
                        <Field name="rememberMe" 
                               type='checkbox' 
                               component={CheckboxInput} />
                    </InputGroup>
                    <Button theme='info' disabled={props.valid ? false : true} block>Login</Button>
                </CardBody>
            </Card>
        </Form>
    )
}

export const LoginFormRedux = reduxForm({ form: 'login' })(LoginForm);
