import React from 'react'
import Tabs from './Tabs';
import Todos from './Todos';
import {useState, Component} from "react";
import Homepage from './Homepage';
import QuotePage from './QuotePage';

class Quote extends Component {
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
  
    render() {
      return (
          
        <form onSubmit={this.handleSubmit}>
            <Tabs/>
          <label>
            Enter Quote:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit"/> 
          <QuotePage quote={this.state.value}/>
        </form>
      );
    }
  }

  export default Quote