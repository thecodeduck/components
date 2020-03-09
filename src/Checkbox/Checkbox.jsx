import React from 'react';
import PropTypes from 'prop-types';
import InputWrapper from '../_common/InputWrapper'

const Checkbox = ({
                       autoFocus,
                       disabled,
                       alert,
                       helpText,
                       icon,
                       id,
                       label,
                       onBlur,
                       onFocus,
                       onChange,
                       inputRef,
                       required,
                       checked,
                       ...rest
                   }) => {
    return (
                <input
                    type='checkbox'
                    autoFocus={autoFocus}
                    aria-disabled={disabled}
                    required={required}
                    aria-checked={checked}
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                />
    )
}

Checkbox.propTypes = {
    children: PropTypes.any,
    disabled: PropTypes.bool,
    href: PropTypes.string,
    onClick: PropTypes.func,
}

export default Checkbox;