import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(){
        super()
        var field = "-"
        this.state = {
            player: "X",
            boardField: [   Array(9).fill(field),Array(9).fill(field),Array(9).fill(field),
                            Array(9).fill(field),Array(9).fill(field),Array(9).fill(field),
                            Array(9).fill(field),Array(9).fill(field),Array(9).fill(field)]
        }
    }

    changeValue(e, i){
        var j = e.target.id
        if(this.state.boardField[i][j] === "-"){
            var auxSquare = this.state.boardField
            auxSquare[i][j] = this.state.player
            console.log(auxSquare)
            this.setState({
                boardField: auxSquare,
                player: this.state.player === "X" ? "O" : "X"
            });
        }
    }

    createBoard = (square,j) => {
        var board = []
        var css = ""
        for(var i = 0; i < 9; i++){
            css = this.state.boardField[j][i] === "-" ? "Able" : "Disable"
            board.push(<div id = {i} className = {"SquareSmall" + css} onClick = {(e) => this.changeValue(e, j)}>{square[i]}</div>)
        }
        return board
    }

    createGame = (board) => {
        var game = []
        for(var i = 0; i < 9; i++){
            game.push(
                <div className = "SquareBig">
                    <div className = "Board">
                        {this.createBoard(board[i],i)}
                    </div>
                </div>
            )
        }
        return game
    }

    render() {
        return (
        <div className="App">
            <h1>Ultimate Tic Tac Toe</h1>
            <div className="MainGame">
                {this.createGame(this.state.boardField)}
            </div>
        </div>
        );
    }
}

export default App;
