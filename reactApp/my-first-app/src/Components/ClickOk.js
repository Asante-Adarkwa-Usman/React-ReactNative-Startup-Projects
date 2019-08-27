import React, { Component } from 'react'

export default class ClickOk extends Component {

displayText() {
console.log("Thanks for clicking")   
}

    render() {
        return (
            <div>
                <button onClick={this.displayText}>Ok</button>
            </div>
        )
    }
}
