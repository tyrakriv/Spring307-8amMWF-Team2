import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import Tabs from './Tabs';


class Todos extends Component{
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
  }

  updateInput(key, value){
    this.setState(
      {
        [key]: value
      }
    )
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id)
    this.setState({list: updatedList});
  }

  addItem(){
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem
    };

    const list = [...this.state.list];
    list.push(newItem);

    this.setState({
      list,
      newItem:""
    });
  }
  render() { 
    return( 
        <div>
          <Tabs/>
           <div>
             <h1>Daily Checklist</h1>
             <br/>
             <Input 
               type="text"
               placeholder="Enter item..."
               value={this.state.newItem}
               onChange={e => this.updateInput("newItem", e.target.value)}
               />
               <h6></h6>
               <Button onClick={() => this.addItem()}>
                 Add
               </Button>
               <br/>
               <ul>
                 {this.state.list.map(item => {
                   return(
                     <li key={item.id}>
                       {item.value}
                       <Button onClick={() => this.deleteItem(item.id)}>
                         X
                       </Button>
                     </li>
                   )
                 })}
               </ul>
           </div>
        </div>
    );
  }
} 

/*Todos.propTypes = {
    todos: PropTypes.array.isRequired
}*/
 
export default Todos; 