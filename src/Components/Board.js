import React, { Component } from 'react';
import './Component.css'
import Box from './Box.js'

class Board extends Component{
    constructor(props){
        super(props)
        // Variables
        this.state = {
            id: this.props.id,
            player: "-",
            playable: Array(9).fill(true)
        }
    }

    // Functions
    createBoard = () => {
        let boxs = []

        for (let i = 0; i < 9; i++){
        boxs.push(<Box id = {i} value = {this.state.player}/>)
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
        <div className = "containerBoard">
                <div className = "board"
                    key = {this.state.id}
                    onClick = {() => this.changeValue()}>
                        {this.createBoard()}            
            </div>
        </div>
        );
    }
}

export default Board;