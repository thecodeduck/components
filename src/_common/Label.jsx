import React from 'react';
import PropTypes from 'prop-types';
import ConditionalWrapper from './ConditionalWrapper';

const Label = ({ label, children }) => {
    return (
        <section className="label-test">
            <ConditionalWrapper
                condition={label}
                wrapper={children => <label>{label}{children}</label>}
            >
                {children}
            </ConditionalWrapper>
        </section>
    );
};

export default Label;