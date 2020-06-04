import React, { Component, Fragment } from 'react';
import Tabs from './Tabs';
import QuotePage from './QuotePage';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
//const check = true;
const check = JSON.parse(window.localStorage.getItem("user")).is_contributor;
//var oldQuote = "You Matter";
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
    //alert('A quote was submitted: ' + this.state.value);
    //oldQuote = "";
    event.preventDefault();
  }
   addQuote(){
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
export default Homepage


/*function Homepage() {
    // state = {
    //     quote: {
    //         text: 'My dark days made me strong, or maybe I already was strong, and they made me prove it'
    //     }
    // }
    return (
        <div>
            <Fragment>
              <Tabs/>
              <QuotePage/>
                <h1 style={{
                  top: 400
                }}>Home page</h1>
             </Fragment>
        </div>
    );
}


export default Homepage;*/
