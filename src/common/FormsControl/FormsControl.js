import React, { useEffect } from 'react'
import { FormInput, FormCheckbox, FormSelect } from 'shards-react'
import classes from './FormsControl.module.css'

export const CountrySelect = props => {
    return (
        <FormSelect {...props.input}>
            <option value="Belarus">Belarus</option>
            <option value="Russia">Russia</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Japan">Japan</option>
            <option value="USA">USA</option>
        </FormSelect>
    )
}

export const GenericInput = props => {

    const hasError = props.meta.touched && props.meta.error;

    useEffect(() => {
        props.onChangeError(hasError);
    }, [hasError])

    return (
            <FormInput {...props.input} invalid={!!hasError} valid={!hasError && props.meta.touched} placeholder={props.placeholder} type={props.type} />
    )
}

export const CheckboxInput = props => (<FormCheckbox {...props.input}>Remember Me</FormCheckbox>)
