import React from 'react';
import TextInput from './TextInput';
import Label from '../_common/Label';

const RequiredLabel = (props) => {
    const { required } = props;
    return required ? <label>THIS IS REQUIRED 🚨</label> : (<label>Whatever</label>);
        };

export default { title: 'Text Input' };

export const defaultInput = () => <TextInput />;
export const inputLabel = () => <TextInput label={'Label'}/>;
export const helperText = () => <TextInput helpText={'Help text'}/>;
export const helperLabelText = () => <TextInput label={'Label'} helpText={'Help text'}/>;
export const errorHelperLabelText = () => <TextInput label={'Label'} helpText={'Help text'} error={'ERROR'}/>;
export const disabled = () => <TextInput disabled={true} />;
export const disabledWithAll = () => <TextInput disabled={true} label={'Label'} helpText={'Help text'} error={'ERROR'}/>;

export const LabelTest0 = () => <TextInput disabled={true} label={RequiredLabel} helpText={'Help text'} error={'ERROR'}/>;
export const LabelTest00 = () => <TextInput disabled={true} label={RequiredLabel} required={true}/>;

export const labelTest1 = () => <Label label={'Label'}/>;
export const labelTest2 = () => <Label><a href={'#'}>Link</a></Label> ;
export const labelTest3 = () => <Label label={'Label'}><a href={'#'}>Link</a></Label>;
