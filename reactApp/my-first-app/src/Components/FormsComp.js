import React, { Component } from 'react'

 class FormsComp extends Component {

    formDesign = {
        color: 'red'
        // fontSize:'20px'
    }
     constructor(props) {
         super(props)
     
         this.state = {
              name: ' '
         }
     }

     HandlesNameChange = event => {
         this.setState({
             name: event.target.value
         })
     }
     
     
    render() {
        return (
       <form>
           <div>
               <label style={this.formDesign}> Name </label>
               <input type='text'  value = {this.state.name} onChange={this.HandlesNameChange}></input>

               <label style={this.formDesign}> Password </label>
               <input type='text'  value = {this.state.name} onChange={this.HandlesNameChange}></input>

               <label style={this.formDesign}> Confirm Password </label>
               <input type='text'  value = {this.state.name} onChange={this.HandlesNameChange}></input>
           </div>
       </form>
        )
    }
}

export default FormsComp
