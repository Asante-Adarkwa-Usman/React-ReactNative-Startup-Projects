import React, { Component } from 'react'

 class Greet extends Component {
    render() {
        const {name, nickName} = this.props
        return (
            <div>
                <h1>Hello {name} also known as {nickName}</h1>
            </div>
        )
    }
}
export default Greet