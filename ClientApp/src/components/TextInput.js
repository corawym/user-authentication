import React from 'react';

const TextInput = (props) => {
    return (
        <input 
            type={props.type} 
            name={props.name}
            value={props.value}
            placeholder={props.placeholder} 
            onChange={props.handleChange}
        /> 
    );
}

export default TextInput;

