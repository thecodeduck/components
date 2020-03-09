import React from 'react';

import Icon from './_test.svg';
import styles from './Icons.module.scss'

const Small = () => <div className={styles.small}><Icon/></div>;

const Medium = () => <div className={styles.medium}><Icon/></div>;

const Large = () => <div className={styles.large}><Icon/></div>;

Medium.Small = Small;
Medium.Medium = Medium;
Medium.Large = Large;

export default Medium;