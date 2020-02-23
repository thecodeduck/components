import React from 'react';
import PropTypes from 'prop-types';
import ConditionalWrapper from './ConditionalWrapper';

const Label = (props) => {
    const { label, ...rest } = props;
    // return (
    //         <ConditionalWrapper
    //             condition={label}
    //             wrapper={children => <label><span>{label}</span>{children}</label>}>
    //             {children}
    //         </ConditionalWrapper>
    // );
    if (typeof label == "string") {
     return (
         <label>{label}</label>
     );
    } else if (React.isValidElement(label)) {
        return label;
    } else if (typeof label == "function") {
        return React.createElement(label, rest);
    } else {
        return null;
    }
};

export default Label;