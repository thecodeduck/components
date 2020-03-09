import React from 'react';
import ConditionalWrapper from './ConditionalWrapper';

const Label = (props) => {
    const { label, children, ...rest } = props;
    return (
            <ConditionalWrapper
                condition={label}
                wrapper={children => <label><span>{label}</span>{children}</label>}>
                {children}
            </ConditionalWrapper>
    );
};

export default Label;