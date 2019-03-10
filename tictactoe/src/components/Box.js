import React, { Component } from 'react';
import './Component.css'

class Box extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.id,
            value: this.props.value,
            played: false,
            able: false,
            color: this.props.color
        }
        console.log(props)
    }

    mouseover(){
        var box = document.getElementsByName("b")
        this.setState({
            played: true,
            color: this.props.color
        })

        if(!this.state.able){
            box[this.state.id].style.backgroundColor = this.state.color;
        }
    }

    mouseout(){
        var box = document.getElementsByName("b")
        this.setState({
            played: false,
            color: this.props.color
        })
        box[this.state.id].style.backgroundColor = this.state.color;
    }

    changeValue(){
        this.setState({
            value: this.props.value,
            able: true
        })
    }

    render() {
        return (
            <div    
                name = "b"
                className = "box"
                key = {this.state.id}
                onClick = {() => this.changeValue()}
                onMouseOver = {() => this.mouseover()}
                onMouseOut = {() => this.mouseout()}
            >
            {this.state.value}
            </div>
        )
    }
}

export default Box;