import React, { Component, Fragment } from 'react';
import Tabs from './Tabs';
import QuotePage from './QuotePage';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { useHistory, Redirect } from 'react-router-dom';

export class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }
   addQuote(){
      const check = JSON.parse(window.localStorage.getItem("user")).is_contributor;
        if(check)
        {
        return(
          <div>
              <form onSubmit={this.handleSubmit}>
                  <label>
                    Enter Quote:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                  </label>
                <input type="submit" value="Submit"/>
              </form> 
              <QuotePage quote={this.state.value}/>
          </div>
          )
        }
    }

    render() {
        if (JSON.parse(window.localStorage.getItem("user")) == null) {
          return <Redirect to="/" />;
        }
        else {
          return (
            
            <div> 
              <Tabs/>
              {this.addQuote()}
              <h1>"You Matter"</h1>
              <h1>Homepage</h1>
            </div>
          )
        }
        
      
    }

}
export default Homepage
