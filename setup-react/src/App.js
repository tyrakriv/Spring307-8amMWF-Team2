import React, {useEffect, useState, Component} from 'react';
import './App.css';
import {newUserInfo} from './components/newUserInfo';
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
        <newUserInfo newUser = {newUser}/>
      </div>

    );
}

export default App;
