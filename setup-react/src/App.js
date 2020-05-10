
import React, {useEffect, useState, Component} from 'react';
import './App.css';
import {NewUserInfo} from './components/NewUserInfo';
import {Login} from './components/Login';
import {Register} from './components/Register';
import {Container} from "semantic-ui-react"

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
        <Container>
          <Register/>
        </Container>
        <NewUserInfo newUser = {newUser}/>
      </div>

    );
}

export default App;