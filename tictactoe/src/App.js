import React, { Component } from 'react';
import './App.css';
import Box from './components/Box.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        player: "-",
        color: "red"
    }
  }
  createTable = () => {
    let boxs = []

    for (let i = 0; i < 9; i++){
      boxs.push(<Box 
                    id = {i} 
                    value = {this.state.player}
                    color = {"red"}/>)
    }
    return boxs
  }

  changeValue(){
    this.setState({
      player: this.state.player === "X" ? "O" : "X"
    })
  }

  render() {
    return (
     <div onClick = {() => this.changeValue()}>
        {this.createTable()}            
     </div>
    );
  }
}

export default App;
