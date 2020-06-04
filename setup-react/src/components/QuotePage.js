import Quote from './Quote';
import Tabs from './Tabs';
import React, { Component } from 'react'

export class QuotePage extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
      }

     render() {
         return (
             <h1>
                   {this.props.quote}
                   <h1></h1>
             </h1>
         )
     }
 }
 
 export default QuotePage
 