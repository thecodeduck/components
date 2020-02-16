import React from 'react';
import PropTypes from 'prop-types';
import ConditionalWrapper from './ConditionalWrapper';

const HelpText = ({ helpText, children }) => {
    return (
        <section className="helpText-test">
            <ConditionalWrapper
                condition={helpText}
                wrapper={children => <div>{children}{helpText}</div>}
            >
                {children}
            </ConditionalWrapper>
        </section>
    );
};

export default HelpText;