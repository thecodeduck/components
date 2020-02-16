import React from 'react';
import TextInput from './TextInput';

export default { title: 'Text Input' };

export const defaultInput = () => <TextInput />;
export const inputLabel = () => <TextInput label={'hello'}/>;
export const helperText = () => <TextInput helperText={'hello'}/>;
export const helperLabelText = () => <TextInput label={'hello'} helperText={'hello'}/>;
export const errorHelperLabelText = () => <TextInput label={'hello'} helperText={'hello'} error={'ERROR'}/>;