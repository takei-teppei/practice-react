import React from 'react';

export class AddTodo extends React.Component{
  constructor(){
    super();
    this.state = {title:""};
  }

  render(){
    return(
      <div>
        <form>
          <input type="text" value={this.state.title}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}