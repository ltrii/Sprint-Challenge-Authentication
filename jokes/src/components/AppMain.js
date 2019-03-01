import React, { Component } from 'react'

import '../App.css';

import { connect } from 'react-redux';
import { registerUser, loginUser, getJokes, logOutAction } from '../actions';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import UserDisplay from './UserDisplay';
import LogoutButton from './LogoutButton';

class AppMain extends Component {
  constructor(props){
    super(props);
    this.state = {
      refresh: false
    }

    this.refreshPage = this.refreshPage.bind(this)
  }

  componentWillUpdate(prevProps){
    if(this.props.loggedin !== prevProps.loggedin){
      this.refreshPage();
    }
  }

  refreshPage(){
    this.setState({refresh: !this.state.refresh})
    console.log('refresh called')
  }

  showButtons(){
    if(!localStorage.getItem('jwt')){
      return (
        <div className="topButtons">
        <RegisterForm registerUser={this.props.registerUser} />
        <LoginForm loginUser={this.props.loginUser} refreshPage={this.refreshPage} />
        </div>
      )
    } else {
      return (
        <div>
        <LogoutButton refreshPage={this.refreshPage} logOutAction={this.props.logOutAction} />
        <UserDisplay refreshPage={this.refreshPage} jokes={this.props.jokes} getJokes={this.props.getJokes} />
        </div>
      )
    }
  }


  render() {
    return (
      <div className='mainApp'>
      <h1 className='headerText'>Jokes</h1>
        {this.showButtons()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    registerUser: state.userReducer.registerUser,
    loginUser: state.userReducer.loginUser,
    getJokes: state.userReducer.getJokes,
    jokes: state.userReducer.jokes,
    loggedin: state.userReducer.loggedin
  };
};

export default connect(mapStateToProps, { registerUser, loginUser, getJokes, logOutAction })(AppMain);