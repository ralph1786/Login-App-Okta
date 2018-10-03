import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Security, SecureRoute, ImplicitCallBack} from '@okta/okta-react'
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home'
import Member from "./components/pages/Member";
import Login from "./components/auth/Login";
import './App.css';


function onAuthRequired({history}){
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security
        issuer = "https://dev-734601.oktapreview.com/oauth2/default"
        client_id = "0oafilk5oiQkzj3bT0h7"
        redirect_uri = {window.location.origin + '/implicit/callback'}
        onAuthRequired = {onAuthRequired}>
        <div className = "App" >
          <Navbar />
          <div className="container">
            <Route path="/" exact={true} component={Home} />
            <SecureRoute path="/member" exact={true} component={Member} />
            <Route path='/login' render={() => (<Login baseUrl='https://dev-734601.oktapreview.com' />)} />
            <Route path='/implicit/callback' component={ImplicitCallBack} />
          </div>  
        </div>
        </Security>
      </Router>
    );
  }
}

export default App;
