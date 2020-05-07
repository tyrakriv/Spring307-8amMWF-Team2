import React, {useEffect, useState, Component} from 'react';
import './App.css';
import {Login} from './components/Login';
import {Container} from "semantic-ui-react"

function App(){

    return (
      <div className="login-form">
        <Container>
            <Login/>
        </Container>
      </div>

    );
}

export default App;
