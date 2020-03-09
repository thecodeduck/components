import React, {useState} from 'react';
import TextInput from './TextInput';
import StateHolderHook from '../_common/StateHolderHook';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
    title: 'Text Input',
    decorators: [withKnobs]
};

export const example = () => (
    <StateHolderHook initialValue={'Initial'}>
        {(value, setValue) => (
            <TextInput
                value={value}
                onChange={e => {
                    setValue(e.target.value);
                    console.log(value);
                }}
                label={text('label', 'Label')}
                error={boolean('error', false)}
                alert={text('alert text', 'Alert text example')}
                disabled={boolean('disabled', false)}
            />

        )
        }
    </StateHolderHook>
);

