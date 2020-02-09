import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
    children,
    disabled,
    href,
    onClick,
    ...rest
}) => {
    return (
        <button href={href} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.any,
    disabled: PropTypes.bool,
    href: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;