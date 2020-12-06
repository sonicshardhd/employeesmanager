import React from 'react'
import {InputGroup, InputGroupAddon, InputGroupText} from 'shards-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field } from 'redux-form'


const Input = ({icon, name, component, validate, onChangeError, placeholder, type}) => {
    return (
        <InputGroup className="mb-2">
            <InputGroupAddon type="prepend">
                <InputGroupText><FontAwesomeIcon icon={icon} /></InputGroupText>
            </InputGroupAddon>
            <Field name={name} component={component} placeholder={placeholder} validate={validate} onChangeError={onChangeError} type={type}/>
        </InputGroup>
    )
}

export default Input;
