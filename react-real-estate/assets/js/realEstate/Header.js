import React, { Component} from 'react'



export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
      <header>
        
        <nav>
       <a href="#">Create Ads</a>
       <a href="#">About Us</a>
       <a href="#">Log in</a>
       <a href="#" className="register_btn">Register</a>
        </nav>




      </header>





    )
  }
}
