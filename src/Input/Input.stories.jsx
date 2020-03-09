import React, {useState} from 'react';
import TextInput from './TextInput';
import NumberInput from './NumberInput';
import RangeInput from './RangeInput';
import StateHolderHook from '../_common/StateHolderHook';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
    title: 'Inputs',
    decorators: [withKnobs]
};

export const textInput = () => (
    <StateHolderHook initialValue={''}>
        {(value, setValue) => (
            <TextInput
                value={value}
                onChange={e => {
                    setValue(e.target.value);
                    console.log(value);
                }}
                label={text('label', 'Label')}
                error={boolean('error', false)}
                alertMessage={text('alert text', 'Alert text example')}
                placeholder={text('placeholder text', 'Placeholder text example')}
                autoFocus={boolean('autofocus', true)}
                disabled={boolean('disabled', false)}
                required={boolean('required', false)}
                maxLength={number('max length', 10)}
            />

        )
        }
    </StateHolderHook>
);
export const rangeInput = () => (
    <StateHolderHook initialValue={'50'}>
        {(value, setValue) => (
            <RangeInput
                value={value}
                onChange={e => {
                    setValue(e.target.value);
                    console.log(value);
                }}
                min={number('min', '0')}
                max={number('max', '100')}
                step={number('step', '10')}
                label={text('label', 'Label')}
                error={boolean('error', false)}
                alertMessage={text('alert text', 'Alert text example')}
                autoFocus={boolean('autofocus', true)}
                disabled={boolean('disabled', false)}
            />

        )
        }
    </StateHolderHook>
);

