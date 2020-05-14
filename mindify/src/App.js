import React, { Component, Fragment } from 'react';
//import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

//import Loginpage from './components/Loginpage';
import Homepage from './components/Homepage';
import Tabs from './components/Tabs';
import Loginpage from './components/Loginpage';
import Profile from './components/Profile';
import Journal from './components/Journal';
import Survey from './components/Survey';
import Todo from './components/Todo';

class App extends Component {

  render(){
  return (
      <Fragment>
        <BrowserRouter>
          <Tabs />
          <Switch>
            <Route path="/Homepage" component={Homepage}/>
            <Route path="/Loginpage" component={Loginpage}/>
            <Route path="/Profile" component={Profile}/>
            <Route path="/Journal" component={Journal}/>
            <Route path="/Survey" component={Survey}/>
            <Route path="/Todo" component={Todo}/>
          </Switch>
        </BrowserRouter>
      </Fragment>
  );
}
}

export default App;
