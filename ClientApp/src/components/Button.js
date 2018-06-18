import React from 'react';
import PropTypes from 'prop-types';
import './components.css';

const Button = (props) => {
    return (
        <button type={props.type} onClick={props.handleClick} className="button">{props.children}</button>
    );
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    handleClick: PropTypes.func
};

export default Button;