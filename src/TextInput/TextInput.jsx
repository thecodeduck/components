import React from 'react';
import PropTypes from 'prop-types';
import Label from '../_common/Label'
import HelpText from '../_common/HelpText'
import Error from '../_common/Error'

const TextInput = ({
    autoFocus,
    disabled,
    error,
    helpText,
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
            <Label label={label} disabled={disabled} required={required}>
                <HelpText helpText={helpText}>
                    <input
                        type='text'
                        autoFocus={autoFocus}
                        aria-disabled={disabled}
                        required={required}
                        placeholder={placeholder}
                        maxLength={maxLength}
                        onChange={onChange}
                        disabled={disabled} />
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