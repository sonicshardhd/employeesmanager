import React, { useState } from 'react'
import classes from './RegisterForm.module.css'
import { Field, reduxForm } from 'redux-form'
import { CountrySelect, GenericInput } from '../../../common/FormsControl/FormsControl'
import { required, emailValidation } from '../../../ultis/validators/validators'
import Input from '../../../UI/Input/Input'
import { faEnvelope, faUnlock, faSignature } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, Card, CardHeader, CardBody, CardTitle, CardSubtitle, Container, Col, Row, Badge } from 'shards-react'



const RegisterForm = props => {
    const [nameError, setNameError] = useState(false);
    const [surnameError, setSurnameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const onChangeNameError = (hasError) => {
        setNameError(hasError);
    }

    const onChangeSurnameError = (hasError) => {
        setSurnameError(hasError);
    }

    const onChangeEmailError = (hasError) => {
        setEmailError(hasError);
    }

    const onChangePasswordError = (hasError) => {
        setPasswordError(hasError);
    }
    return (
        <Form onSubmit={props.handleSubmit}>
            <Card style={{ maxWidth: "700px" }}>
                <CardHeader>
                    <Container>
                        <Row>
                            <Col className={classes.header}>
                                <CardTitle>SIMPLE WAY TO START USING THE EMPLOYEES MANAGER</CardTitle>
                                <CardTitle></CardTitle>
                                <CardSubtitle>Please fill all the fields:&nbsp;&nbsp;&nbsp;
                                </CardSubtitle>
                            </Col>
                        </Row>
                    </Container>
                </CardHeader>
                <CardBody>
                    <Container>
                        <Row>
                            <Col>
                                <CardTitle>Name</CardTitle>
                                <Input icon={faSignature} 
                                       name="name" 
                                       component={GenericInput} 
                                       validate={[required]} 
                                       onChangeError={onChangeNameError} 
                                       placeholder={'Name'} 
                                       type='' />
                                {
                                    nameError ? <Badge theme='danger' outline>{nameError}</Badge> : null
                                }
                            </Col>
                            <Col>
                                <CardTitle>Surname</CardTitle>
                                <Input icon={faSignature} 
                                       name="surname" 
                                       component={GenericInput} 
                                       validate={[required]} 
                                       onChangeError={onChangeSurnameError} 
                                       placeholder={'Surname'} 
                                       type='' />
                                {
                                    surnameError ? <Badge theme='danger' outline>{surnameError}</Badge> : null
                                }
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <CardTitle>Select Country</CardTitle>
                        <Field name='country' 
                               component={CountrySelect} />
                    </Container>
                    <CardTitle></CardTitle>
                    <Container>
                        <CardTitle>Email</CardTitle>
                        <Input icon={faEnvelope} 
                               name="email" 
                               component={GenericInput} 
                               validate={[required, emailValidation]} 
                               onChangeError={onChangeEmailError} 
                               placeholder={'E-mail'} 
                               type='' />
                        {
                            emailError ? <Badge theme='danger' outline>{emailError}</Badge> : null
                        }
                    </Container>
                    <CardTitle></CardTitle>
                    <Container>
                        <CardTitle>Password</CardTitle>
                        <Input icon={faUnlock} name="password" component={GenericInput} validate={[required]} onChangeError={onChangePasswordError} placeholder={'Password'} type='password' />
                        {
                            passwordError ? <Badge theme='danger' outline>{passwordError}</Badge> : null
                        }
                    </Container>
                    <CardTitle></CardTitle>
                    <Button theme='info' disabled={props.valid ? false : true} block>Register</Button>
                </CardBody>
            </Card>
        </Form>
    )
}

const RegisterFormRedux = reduxForm({ form: 'register' })(RegisterForm);

export default RegisterFormRedux;
