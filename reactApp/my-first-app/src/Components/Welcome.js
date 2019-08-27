import React, { Component } from 'react'

class Welcome extends Component{

    constructor(){
        super()
        this.state ={

            message : " Hi there, my name is Asante and i am very happy to see you.\nWelcome to my official page"
        }
    }

  changeMessage(){
   this.setState({message : 'Thank you for suscribing'})
 }

render(){
    return (
        <div>

        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Suscribe</button>

 

        </div>
    )
   
    
}
}
export default Welcome