
import React, {useEffect, useState, Component} from 'react';
import './App.css';
import {NewUserInfo} from './components/NewUserInfo';
import {Login} from './components/Login';
import {Register} from './components/Register';
import {Container} from "semantic-ui-react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from './components/Homepage';
import Tabs from './components/Tabs';
//import Header from './components/Header';
import Journal from './components/Journal';
import Survey from './components/Survey';
import Profile from './components/Profile';


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
            <Route path="/profile" component={Profile}/>
            <Route path="/journal" component={Journal}/>
            <Route path="/survey" component={Survey}/>
          </Switch>
        </BrowserRouter>

      </div>

    );
}

export default App;
