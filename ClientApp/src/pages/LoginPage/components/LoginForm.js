import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';

const LoginForm = (props) => (
    <form name="loginFrom" onSubmit={props.handleSumbit} className="loginForm">
        <TextInput type="text" name="username" value={props.usernameValue} placeholder="Username" handleChange={props.handleChange}/>
        <TextInput type="password" name="password" value={props.passwordValue} placeholder="Password" handleChange={props.handleChange}/>
        <Button type="sumbit">Login</Button>
    </form>
);

LoginForm.propTypes = {
    usernameValue: PropTypes.string,
    passwordValue: PropTypes.string,
    handleSumbit: PropTypes.func,
    handleChange: PropTypes.func
};

export default LoginForm;