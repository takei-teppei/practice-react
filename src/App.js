import React from 'react';
import {AddTodo} from './components/AddTodo'
import {ListTodo} from './components/ListTodo'
import './App.css';

export class TodoApp extends React.Component{
  constructor(){
    super()
    this.state= {
      title = [],
      id = 0
    }
  }

  render(){
    const todos = this.state
    return(
      <div>
        TodoApp
        <AddTodo />
        <ListTodo todos={todos}/>
      </div>
      
    )
  }
}
