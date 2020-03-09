import React from 'react';
import classNames from "classnames";

import styles from './InputWrapper.module.scss';

const InputWrapper = ({ alert, label, error, disabled, children }) => {
    return (
        <section className={classNames({
            [styles.error]: error,
            [styles.disabled]: disabled
        })}>
            {label ?
                <label>
                    {label}
                    {children}
                </label>
            :
            children
            }
            {alert}
        </section>
    );
};

export default InputWrapper;