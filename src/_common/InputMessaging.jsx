import React from 'react';
import classNames from "classnames";

import styles from './InputWrapper.module.scss';

const InputMessaging = ({ alert, error, disabled, children }) => {
    return (
        <section className={classNames({
            [styles.error]: error,
            [styles.disabled]: disabled
        })}>
            {children}
            {alert}
        </section>
    );
};

export default InputMessaging;