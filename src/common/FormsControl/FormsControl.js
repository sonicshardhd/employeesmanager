import React, { useState, useEffect } from 'react'
import { FormInput, FormCheckbox, Badge } from 'shards-react'
import classes from './FormsControl.module.css'


export const NameInput = props => {
    const hasError = props.meta.touched && props.meta.error

    useEffect( () => {
        props.onChangeNameError(hasError);
    }, [hasError] )

    return (
        <>
          <FormInput {...props.input} invalid={!!hasError} valid={ !hasError && props.meta.touched } placeholder='Name'/>
        </>
    )
}

export const AgeInput = props => {
    const hasError = props.meta.touched && props.meta.error

    useEffect( () => {
        props.onChangeAgeError(hasError);
    }, [hasError] )

    return (
        <>
          <FormInput {...props.input} invalid={!!hasError} valid={ !hasError && props.meta.touched } placeholder='Age'/>
        </>
    )
}

export const SalaryInput = props => {
    const hasError = props.meta.touched && props.meta.error

    useEffect( () => {
        props.onChangeSalaryError(hasError);
    }, [hasError] )

    return (
        <>
          <FormInput {...props.input} invalid={!!hasError} valid={ !hasError && props.meta.touched } placeholder='Salary'/>
        </>
    )
}

export const EmailInput = props => {
    const hasError =  props.meta.touched && props.meta.error;
    return (
        <div>
            <FormInput {...props.input} 
                       invalid={ Boolean(hasError) } 
                       valid={ !hasError && props.meta.touched }/>
            {hasError && <span className={ classes.errorMessage }>{ props.meta.error }</span>}
        </div>
    )
}

export const PasswordInput = props => {
    const hasError =  props.meta.touched && props.meta.error;
    return (
        <div>
            <FormInput {...props.input} 
                       type='password' 
                       invalid={ Boolean(hasError) } 
                       valid={ !hasError && props.meta.touched }/>
            { hasError && <span className={ classes.errorMessage }>{ props.meta.error }</span> }
        </div>
    )
}

export const CheckboxInput = props => ( <FormCheckbox {...props.input}>Remember Me</FormCheckbox> )



