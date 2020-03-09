import React from 'react';
import PropTypes from 'prop-types';

const ConditionalWrapper = ({ condition, wrapper, children }) =>
    condition ? wrapper(children) : children;

ConditionalWrapper.propTypes = {
    condition: PropTypes.any,
    wrapper: PropTypes.func,
    children: PropTypes.element.isRequired,
}

export default ConditionalWrapper;