import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingsData from './data/ListingsData.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Asante Adarkwa Usman',
      listingsData,
      min_price: 0,
      max_price : 1000000,
      min_floor_space : 1,
      max_floor_space : 5000,
      elevator: false,
      finished_basement: false,
      gym: false,
      swimming_pool:false

    }
  //  this.change = this.change.bind(this);
  }

  change = (event) =>{// hundles event change

    let name = event.target.className
      let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value

      this.setState({
        [name]: value,

      }, () => {
        console.log(this.state)
      })
   }


  clickedBtn = () => {
    console.log('swag')
  }
  render () {

    return (<div>
       <Header />
       <section id="content-area">
         <Filter  change={this.change} globalState={this.state} />
         <Listings listingsData={this.state.listingsData} />
         </section>
      </div>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App/>, app)
