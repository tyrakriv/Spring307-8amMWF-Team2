import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';

import Loginpage from './components/Loginpage';
import Homepage from './components/Homepage';

class App extends Component {

  render(){
  return (
    //<Router>
    <div className="App">
      <Homepage/>
      {/* <ul>
        <li>
          <Link to ="/Homepage">Home</Link>
        </li>
        <li>
          <Link to ="/Loginpage">Logout</Link>
        </li>
      </ul> */}
      {/* <Route path={"/"} component = {Loginpage}>
        <Route path = {"Home"} component={Homepage}/>
      </Route> */}
    </div>
    //</Router>
  );
}
}

export default App;
