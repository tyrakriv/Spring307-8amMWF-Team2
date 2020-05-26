import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Quoteitem from './Quoteitem';
import {Button, Form, Label} from 'reactstrap';
import Tabs from './Tabs';
import Profile from './Profile';
import Journal from './Journal';
import Survey from './Survey';


function Homepage() {
    // state = {
    //     quote: {
    //         text: 'My dark days made me strong, or maybe I already was strong, and they made me prove it'
    //     }
    // }
    return (
        <div>
            <Fragment>
               <Tabs/>
                <h1 className="text-right">Home page</h1>
             </Fragment>
        </div>
       /* <Fragment>
        <BrowserRouter>
          <Tabs />
          <Switch>
            <Route path="/profile" component={Profile}/>
            <Route path="/journal" component={Journal}/>
            <Route path="/survey" component={Survey}/>
          </Switch>
        </BrowserRouter>
      </Fragment>*/
    );
}


export default Homepage;
