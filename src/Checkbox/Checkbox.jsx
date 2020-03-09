import React from 'react';
import PropTypes from 'prop-types';
import Label from '../_common/Label'
import InputMessaging from '../_common/InputMessaging'

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
        <InputMessaging alert={alert} helpText={helpText} disabled={disabled} required={required}>
            <Label label={label} disabled={disabled} required={required}>
                <input
                    type='checkbox'
                    autoFocus={autoFocus}
                    aria-disabled={disabled}
                    required={required}
                    aria-checked={checked}
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled} />
            </Label>
        </InputMessaging>
    )
}

Checkbox.propTypes = {
    children: PropTypes.any,
    disabled: PropTypes.bool,
    href: PropTypes.string,
    onClick: PropTypes.func,
}

export default Checkbox;