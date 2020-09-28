// General
import React from 'react';

// Styles
import { GroupContainer, FormInputLabelContainer, FormInputContainer } from './form-input.styles';

/* This is component for all the input in the site, all the text fields like password and email etc */
const FormInput = ({ handleChange, label, ...props}) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...props} />
        {label ? (
            <FormInputLabelContainer className={props.value.length ? 'shrink' : ''}>
                {label}
            </FormInputLabelContainer>
        ) : null}
    </GroupContainer>
);

export default FormInput;