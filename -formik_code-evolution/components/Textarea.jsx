import React from 'react'
import {Field, ErrorMessage} from 'formik';

import TextError from './TextError';

const TextArea = (props) => {
    const {label, name, ...rest} = props
    return (
        <div className="uk-form-control">
            <label htmlFor={name}>{label}</label>
            <Field as='textarea' id={name} name={name} {...rest}></Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default TextArea
