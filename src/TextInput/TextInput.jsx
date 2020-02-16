import React from 'react';
import PropTypes from 'prop-types';
import Label from '../_common/Label'
import HelpText from '../_common/HelpText'
import Error from '../_common/Error'

const TextInput = ({
    autoFocus,
    disabled,
    error,
    helperText,
    icon,
    id,
    label,
    maxLength,
    onBlur,
    onFocus,
    onChange,
    placeholder,
    inputRef,
    required,
    showClear,
    value,
    ...rest
}) => {
    return (
        <Error error={error}>
        <Label label={label}>
            <HelpText helpText={helperText}>
                <input type='text' maxLength={maxLength} onChange={onChange} autoFocus={autoFocus} disabled={disabled} />
            </HelpText>
        </Label>
        </Error>
    )
}

TextInput.propTypes = {
    children: PropTypes.any,
    disabled: PropTypes.bool,
    href: PropTypes.string,
    onClick: PropTypes.func,
}

export default TextInput;