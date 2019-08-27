import React, { Component } from 'react'

class EventTest extends Component {

constructor() {
    super()

    this.state = {
         message:'Hello Brother'
    }
  //  this.changeMsg = this.changeMsg.bind(this)
 
}
changeMsg =() => {
    this.setState({
    message:'Welcome to the new world of programming!'
   })
}




    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.changeMsg}>Click Me</button>

            </div>
        )
    }
}

export default EventTest
