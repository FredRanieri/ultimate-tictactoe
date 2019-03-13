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
                            Array(9).fill(field),Array(9).fill(field),Array(9).fill(field)],
            
            gameField: Array(9).fill(field),
            ableBoard: Array(9).fill(true)
        }
    }

    checkWinner(lines, ind) {
        var winLines =
          [
            ["0", "1", '2'],
            ["3", "4", '5'],
            ["6", "7", '8'],
            ["0", "3", '6'],
            ["1", "4", '7'],
            ["2", "5", '8'],
            ["0", "4", '8'],
            ["2", "4", '6'],
          ]
        for(var i = 0; i < winLines.length; i++){
            if(lines[winLines[i][0]] === lines[winLines[i][1]] && lines[winLines[i][0]] === lines[winLines[i][2]] && lines[winLines[i][0]] !== "-"){
                var auxField = this.state.gameField
                auxField[ind] = this.state.player !== "X" ? "O" : "X"
                this.setState({
                    gameField: auxField
                })
            }
        }
      }

    changeValue(e, i){
        var j = e.target.id
        if(this.state.boardField[i][j] === "-" && this.state.ableBoard[i]){
            var auxBoard = Array(9).fill(false)
            auxBoard[j] = true
            var auxSquare = this.state.boardField
            auxSquare[i][j] = this.state.player
            this.setState({
                boardField: auxSquare,
                player: this.state.player === "X" ? "O" : "X",
                ableBoard: auxBoard
            });
            console.log(this.state.ableBoard)
            this.checkWinner(this.state.boardField[i], i)
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
            if(this.state.gameField[i] === "-"){
                var css = !this.state.ableBoard[i] ? "Able" : "Disable"
                game.push(
                    <div className = "SquareBig">
                        <div className = {"Board" + css}>
                            {this.createBoard(board[i],i)}
                        </div>
                    </div>
                )
            }
            else{
                game.push(
                    <div className = "SquareBig">
                        <div className = "Board">
                            <div className = "BoardFinished">
                                {this.state.gameField[i]}
                            </div>
                        </div>
                    </div>
                )
            }
        }
        return game
    }

    render() {
        return (
        <div className="App">
            <h1>Ultimate Tic Tac Toe</h1>
            <h2>Player {this.state.player}</h2>
            <div className="MainGame">
                {this.createGame(this.state.boardField)}
            </div>
        </div>
        );
    }
}

export default App;
