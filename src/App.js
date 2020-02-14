import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

//export default App;
export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      userName : "Senior",
      todoItems: [{action: "Study Java how to program", done: false},
                   {action: "Reduce the level of un-re-usable methods", done: false},
                  {action: "Ensure you take your coffee", done: false},
                {action: "Wash Clothes", done : false}],
                nextItem: ""
    }
  }

   updateNewTextValue = (event) => {
     this.setState({ newItemText: event.target.value });
   }
   createNewTodo = () => {
     if (!this.state.todoItems
      .find(item => item.action === this.state.newItemText))
           {
            this.setState({
              todoItems: [...this.state.todoItems,
              { action: this.state.newItemText, done: false }],
              newItemText: ""
            });
          }
   }

  // changeStateData = () => {
  //   this.setState({
  //     userName: this.state.userName === "Senior" ? "Developer" : "Senior"
  //   })
 // }

    toggleTodo = (todo) => this.setState({ todoItems:
     this.state.todoItems.map(item => item.action === todo.action
      ? {...item, done: !item.done } : item)});

      todoTableRows = () => this.state.todoItems.map(item =>
        <tr key={ item.action }>
          <td>{ item.action }</td>
          <td>
            <input type="checkbox" checked={ item.done }
              onChange={  () => this.toggleTodo(item)} />
          </td>
        </tr>);
  render() {
    return (
      <div>
        <h1 className = "bg-primary text-white text-center p-1">
          {this.state.userName}'s To Do LIST
          ({ this.state.todoItems.filter(t => !t.done).length} items to do)
        </h1>
        {/* <button className="btn btn-primary m-2"
        onClick={ this.changeStateData }>
          flip it
        </button> */}
        <div className="container-fluid">
          <div className="my-1">
            <input className="form-control"
            value={ this.state.newItemText}
            onChange={ this.updateNewTextValue} />
            <button className="btn btn-primary mt-1"
            onClick={ this.createNewTodo}>Add</button>
          </div>
        </div>
      </div>
    )
  }
}
