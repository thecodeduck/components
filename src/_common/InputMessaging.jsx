import React from 'react';
import ConditionalWrapper from './ConditionalWrapper';

const Error = ({ error, children }) => {
    return (
        <section className="error-test">
            <ConditionalWrapper
                condition={error}
                wrapper={children => <div>{children}{error}</div>}>
                {children}
            </ConditionalWrapper>
        </section>
    );
};

export default Error;