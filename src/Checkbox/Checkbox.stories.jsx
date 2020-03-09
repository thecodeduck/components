import React from 'react';
import Checkbox from './Checkbox';

export default { title: 'Checkbox' };

export const defaultInput = () => (
    <Checkbox disabled={true} label={'Label'} helpText={'Help text'} alert={'ERROR'}/>
    );

export const value = () => <Checkbox checked={true} />;


