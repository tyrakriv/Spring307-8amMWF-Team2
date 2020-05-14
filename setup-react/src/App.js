
import React, {useEffect, useState, Component} from 'react';
import './App.css';
import {NewUserInfo} from './components/NewUserInfo';
import {Login} from './components/Login';
import {Register} from './components/Register';
import {Container} from "semantic-ui-react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App(){
    const [newUser, setNewUser] = useState([]);
    useEffect(() => {
      fetch('/getNewestUser').then(response => 
        response.json().then(data => {
          setNewUser(data.newestUser);
        })
      );
    }, [])
    return (
      <div className="login-form">
        <BrowserRouter>
          <Switch>
            <Route exact path="/register" component={Login}/>
            <Route path="/register/register" component={Register}/>
          </Switch>
        </BrowserRouter>
      </div>

    );
}

export default App;