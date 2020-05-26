
import React, {useEffect, useState, Component} from 'react';
import './App.css';
import {NewUserInfo} from './components/NewUserInfo';
import {Login} from './components/Login';
import {Register} from './components/Register';
import NewJournal from './components/NewJournal';
import {Container} from "semantic-ui-react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from './components/Homepage';
import Tabs from './components/Tabs';
//import Header from './components/Header';
import Journal from './components/Journal';
import Survey from './components/Survey';
import Profile from './components/Profile';


function App(){
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/homepage" component={Homepage}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/journal/entry" component={NewJournal}/>
          <Route path="/journal" component={Journal}/>
        </Switch>
      </div>

    );
}

export default App;
