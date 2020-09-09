import React from 'react';
import './form-input.styles.scss';

/* This is component for all the input i the site, all the text fields like password and email etc */

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps}/>
        {
            label ?
                (<label className={`${otherProps.value.length ? 'shirnk' :''} form-input-label`}>
                    {label}
                </label>)
            : null
        }
    </div>
)

export default FormInput;