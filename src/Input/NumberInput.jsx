import React from 'react';
import PropTypes from 'prop-types';
import InputWrapper from "../_common/InputWrapper";

import styles from './Input.module.scss';

const NumberInput = ({
                       autoFocus,
                       disabled,
                       alertMessage,
                       error,
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
        <InputWrapper alert={alertMessage} error={error} disabled={disabled} required={required} label={label}>
            <input
                className={styles.input}
                type='text'
                inputmode="numeric"
                pattern="[0-9]*"
                autoFocus={autoFocus}
                aria-disabled={disabled}
                disabled={disabled}
                aria-required={required}
                required={required}
                aria-placeholder={placeholder}
                placeholder={placeholder}
                value={value}
                maxLength={maxLength}
                onChange={onChange}
            />
        </InputWrapper>
    )
}

NumberInput.propTypes = {
    children: PropTypes.any,
    autoFocus: PropTypes.bool,
    disabled: PropTypes.bool,
    alertMessage: PropTypes.string,
    error: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    maxLength: PropTypes.string,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any })
    ]),
    required: PropTypes.bool,
    showClear: PropTypes.bool,
    value: PropTypes.string,
}

export default NumberInput;