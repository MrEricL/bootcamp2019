// src/App.js

import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home.js';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Debit from './components/Debit';
import Credit from './components/Credit';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      },
      credit: [],
      debit: [],
    }
  }

    mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }
  

  componentDidMount(){
      axios.get("https://moj-api.herokuapp.com/credits")
      .then(response => {
          this.setState({ credit : response["data"]});
          console.log(this.state.credit);
      })
      .catch(err =>  {
        console.log(":(");
      });


      axios.get("https://moj-api.herokuapp.com/debits")
      .then(response => {
          this.setState({ debit : response["data"]});
          console.log(this.state.debit);
      })
      .catch(err =>  {
        console.log(":(");
      });
  }

  render() {

    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const DebitComponent = () => (<Debit accountBalance={this.state.accountBalance} debit = {this.debit}/>);
    const CreditComponent = () => (<Credit accountBalance={this.state.accountBalance} credit = {this.state.credit}/>);

    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/credit" render={CreditComponent}/>
            <Route exact path="/debit" render={DebitComponent}/>
          </div>
        </Router>
    );
  }

}

export default App;