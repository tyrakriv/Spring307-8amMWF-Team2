
import React, {useEffect, useState, Component} from 'react';
import './App.css';
import {NewUserInfo} from './components/NewUserInfo';
import {Login} from './components/Login';
import {Register} from './components/Register';
import {Container} from "semantic-ui-react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from './components/Homepage';


function App(){
    const [newUser, setNewUser] = useState([]);
    const check = true;
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
            <Route exact path="/" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/homepage" component={Homepage}/>
          </Switch>

        </BrowserRouter>
      </div>

    );
}

export default App;
