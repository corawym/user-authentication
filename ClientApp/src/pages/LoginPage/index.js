import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions from '../../actions/UserActions';


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameValue: "",
            passwordValue: "",

        };
    }

    handleChange = (e) => {
        if (e.target.name === "username") {
            this.setState({
                usernameValue: e.target.value
            })
        } else {
            this.setState({
                passwordValue: e.target.value
            })
        }
    }

    handleSumbit = (e) => {
        e.preventDefault();
        this.props.userActions.login(this.state.usernameValue, this.state.passwordValue);
    }

    render() {
        if (this.props.user.isAuth) {
            return (
                <Redirect to='/' />
            )
        }
        return (
            <div>
                <h1>Login</h1>
                <LoginForm
                    usernameValue={this.state.usernameValue}
                    passwordValue={this.state.passwordValue}
                    handleChange={this.handleChange}
                    handleSumbit={this.handleSumbit}
                />
                { this.props.user.error && <p>{this.props.user.error}</p> }
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        user: store.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(UserActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);