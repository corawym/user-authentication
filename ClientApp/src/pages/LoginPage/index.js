import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginForm from './components/LoginForm';
import * as UserActions from '../../actions/UserActions';
import './styles.css';


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
            <div className="loginPage">
                <div className="container">
                    <div className="row ">
                        <h1 className="pageTitle">Login</h1>
                        <div className="underBorder"></div>
                        <p className="bodyText">For User login (by default, username is admin, password: 123)</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <LoginForm
                            usernameValue={this.state.usernameValue}
                            passwordValue={this.state.passwordValue}
                            handleChange={this.handleChange}
                            handleSumbit={this.handleSumbit}
                        />
                        { this.props.user.error && <p className="errorMessage">{this.props.user.error}</p> }
                    </div>
                </div>
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