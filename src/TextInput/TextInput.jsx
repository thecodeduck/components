import React from 'react';
import PropTypes from 'prop-types';
import Label from '../_common/Label'
import InputMessaging from "../_common/InputMessaging";

import styles from './TextInput.module.scss';

const TextInput = ({
    autoFocus,
    disabled,
    alert,
    error,
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
        <InputMessaging alert={alert} error={error} disabled={disabled} required={required}>
            <Label label={label} disabled={disabled} required={required}>
                <input
                    className={styles.input}
                    type='text'
                    autoFocus={autoFocus}
                    aria-disabled={disabled}
                    required={required}
                    value={value}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    onChange={onChange}
                    disabled={disabled} />
            </Label>
        </InputMessaging>
    )
}

TextInput.propTypes = {
    children: PropTypes.any,
    disabled: PropTypes.bool,
    href: PropTypes.string,
    onClick: PropTypes.func,
}

export default TextInput;