import React from 'react';

export class ListTodo extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const {todos} = this.props
    const list = todos.map =(todo =>{
      return(
        <li key={todo.id}>
          {todo.id}{todo.title}
          <button>
            delete
          </button>
        </li>
      )
    })
    return(
      <div>
        <h2>ListTodo</h2>
      </div>
    )
  }
}