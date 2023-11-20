import React, {useState} from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
    const [state, setState] = useState(false)
    return (
        <select
            value={value}
            onChange={event => (onChange(event.target.value), setState(true))}
        >
            <option disabled={state ? false : true} value=''>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
        </select>
    );
};

export default MySelect;