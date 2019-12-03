import React, { Component } from 'react'

class FormsComp extends Component {

    formDesign = {
        color: 'red'
            // fontSize:'20px'
    }
    constructor(props) {
        super(props)

        this.state = {
            Name: ' ',
            Password: ' ',
            ConfirmPassword: ''
        }
    }

    HandlesNameChange = event => {
        this.setState({
            Name: event.target.value
        })
    }

    HandlesPasswordChange = event => {
        this.setState({
            Password: event.target.value
        })
    }
    HandlesConfirmPasswordChange = event => {
        this.setState({
            ConfirmPassword: event.target.value
        })
    }

    render() {
        return ( 
            <div>
                <form >
            <label style = { this.formDesign } > Name </label> 
            <input type = 'text'
            value = { this.state.name }
            onChange = { this.HandlesNameChange } />

            <label style = { this.formDesign } > Password </label>
             <input type = 'password'
            value = { this.state.Password }
            onChange = { this.HandlesPasswordChange } />

            <label style = { this.formDesign } > Confirm Password </label>
             <input type = 'password'
            value = { this.state.ConfirmPassword }
            onChange = { this.HandlesConfirmPasswordChange } />

  
          </form >
            </div>
        )
    }
}

export default FormsComp
