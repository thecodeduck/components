import React from 'react';
import PropTypes from 'prop-types';

const StateHolderHook = ({initialValue, children}) => {
    const [value, setValue] = React.useState(initialValue);

    return children(value, setValue);
};

StateHolderHook.propTypes = {
    children: PropTypes.func.isRequired,
};

export default StateHolderHook;
