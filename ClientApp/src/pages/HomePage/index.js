import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';

import HomeForm from './components/HomeForm';
import Button from '../../components/Button';

import * as UserActions from '../../actions/UserActions';
import * as HomeActions from '../../actions/HomeActions';

import './styles.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            homeFormValue: "",
        };
    }

    handleLogout = (e) => {
        e.preventDefault();
        this.props.userActions.logout();
    }

    handleChange = (e) => {
        this.setState({homeFormValue: e.target.value})
    }

    handleSumbit = (e) => {
        e.preventDefault();
        this.props.homeActions.setHomeForm(this.state.homeFormValue);
    }

    render() {
        return (
            <div className="homePage">
                <div className="container userInfo">
                    <div className="row">
                        <span className="username">{`Hi, ${this.props.user.username}`}</span>
                        <Button type={"button"} handleClick={this.handleLogout}>Logout</Button>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <h1 className="pageHeadline">Enter a user's email</h1>
                        <HomeForm 
                            homeFormValue={this.state.homeFormValue} 
                            handleChange={this.handleChange}
                            handleSumbit={this.handleSumbit}
                        />
                    </div>
                </div>
                { this.props.home.error && <p className="errorMessage">{this.props.home.error}</p> }
                { this.props.home.data &&
                    <div className="container apiResult">
                        <div className="row">
                            <h2 className="sectionHeadline">Results</h2>
                            {
                                this.props.home.data.length > 0 ? 
                                <ul className="itemsList">
                                    {
                                        this.props.home.data.map((user, index) => 
                                            <li key={index} className="item">
                                                <p className="itemName">{user.name}</p>
                                                <p className="itemAddress">{`${user.address.suite} ${user.address.street}, ${user.address.city} ${user.address.zipcode}`}</p>
                                                <p className="itemEmail">{user.email}</p>
                                            </li>
                                        )
                                    }
                                </ul>
                                :
                                <p className="warningMessage">This user doesn't exist.</p>
                            }
                        </div>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        user: store.user,
        home: store.home
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(UserActions, dispatch),
        homeActions: bindActionCreators(HomeActions, dispatch)
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);