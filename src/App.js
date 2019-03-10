import React, { Component } from 'react';
import './App.css';
import Board from './Components/Board.js'

class App extends Component {
  constructor(props){
    super(props)
    // Variables
    this.state = {
       
    }
  }

  // Functions
  createBoard = () => {
    let boxs = []

    for (let i = 0; i < 9; i++){
      boxs.push(<Board id = {i} />)
    }
    return boxs
  }

  changeValue(){
    this.setState({
      player: this.state.player === "X" ? "O" : "X",
    })
  }

  render() {
    return (
      <div
        className = "containerApp">
        <div
          className = "boardApp"
          onClick = {() => this.changeValue()}>
          {this.createBoard()}            
        </div>
      </div>
    );
  }
}

export default App;
