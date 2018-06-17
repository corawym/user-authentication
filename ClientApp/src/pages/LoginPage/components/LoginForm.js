import React from 'react';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';

const LoginForm = (props) => (
    <form name="loginFrom" onSubmit={props.handleSumbit}>
        <TextInput type="text" name="username" value={props.usernameValue} placeholder="User name" handleChange={props.handleChange}/>
        <TextInput type="password" name="password" value={props.passwordValue} placeholder="Password" handleChange={props.handleChange}/>
        <Button type="sumbit">Login</Button>
    </form>
);

export default LoginForm;