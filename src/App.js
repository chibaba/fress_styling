import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

//export default App;
export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      userName : "Senior"
    }
  }

  changeStateData = () => {
    this.setState({
      userName: this.state.userName === "Senior" ? "Developer" : "Senior"
    })
  }
  render() {
    return (
      <div>
        <h1 className = "bg-primary text-white text-center p-1">
          {this.state.userName}'s To Do LIST
        </h1>
        <button className="btn btn-primary m-2"
        onClick={ this.changeStateData }>
          flip it
        </button>
      </div>
    )
  }
}
