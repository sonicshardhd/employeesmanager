import React from 'react'
import { FormInput, FormCheckbox } from 'shards-react'
import classes from './FormsControl.module.css'


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


