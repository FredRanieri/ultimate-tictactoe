import React, { Component } from 'react';
import './Component.css'

class Box extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.id,
            value: this.props.value,
            playable: true,
            element: document.getElementsByName("main")
        }
    }

    mouseOver(){
        if(this.state.playable){
            this.state.element[this.props.id].style.backgroundColor = "#b36200"
        }
    }

    mouseOut(){
        this.state.element[this.props.id].style.backgroundColor = "rgb(50,50,50)"
    }

    changeValue(){
        if(this.state.value === "-"){
            this.setState({
                value: this.props.value,
                playable: false
            })
            this.mouseOut()
        }
    }

    render(){
        return(
            <div
                name = "main"
                className = "boxField"
                key = {this.state.id}
                onClick = {() => this.changeValue()}
                onMouseOver = {() => this.mouseOver()}
                onMouseOut = {() => this.mouseOut()}
            >
            {this.state.value}
            </div>
        )
    }
}

export default Box;