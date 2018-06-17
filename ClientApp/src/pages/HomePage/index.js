import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Button from '../../components/Button';
import { bindActionCreators } from 'redux';
import * as UserActions from '../../actions/UserActions';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    handleLogout = (e) => {
        e.preventDefault();
        this.props.userActions.logout();
    }
    
    render() {
        return (
            <div>
                <h1>Home</h1>
                <h2>{`Welcome ${this.props.user.username}`}</h2>
                <Button type={"button"} handleClick={this.handleLogout}>Logout</Button>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        user: store.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(UserActions, dispatch)
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);