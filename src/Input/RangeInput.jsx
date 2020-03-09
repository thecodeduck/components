import React from 'react';
import PropTypes from 'prop-types';
import InputWrapper from "../_common/InputWrapper";

import styles from './Input.module.scss';

//TODO: add aria- and text-value-support

const RangeInput = ({
    autoFocus,
    disabled,
    alertMessage,
    error,
    id,
    label,
    min,
    max,
    step,
    onBlur,
    onFocus,
    onChange,
    inputRef,
    value,
    ...rest
    }) => {
    return (
        <InputWrapper alert={alertMessage} error={error} disabled={disabled} label={label}>
            <input
                className={styles.input}
                type='range'
                inputmode="numeric"
                autoFocus={autoFocus}
                aria-disabled={disabled}
                disabled={disabled}
                value={value}
                min={min}
                max={max}
                step={step}
                onChange={onChange}
            />
            <span>{value}</span>
        </InputWrapper>
    )
}

RangeInput.propTypes = {
    children: PropTypes.any,
    autoFocus: PropTypes.bool,
    disabled: PropTypes.bool,
    alertMessage: PropTypes.string,
    error: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    min: PropTypes.string,
    max: PropTypes.string,
    step: PropTypes.string,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onChange: PropTypes.func,
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any })
    ]),
    showClear: PropTypes.bool,
    value: PropTypes.string,
}

export default RangeInput;