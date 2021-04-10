import React, { Component } from 'react'

export default class CountClass extends Component {

    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
    
    render() {
        return (
            <div>
                <h1>You clicked {this.state.count} times!</h1>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Click me!</button>
            </div>
        )
    }
}
