import React from 'react';
import './components.css';

const Button = (props) => {
    return (
        <button type={props.type} onClick= {props.handleClick} className="button">{props.children}</button>
    );
}

export default Button;