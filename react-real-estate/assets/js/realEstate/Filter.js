import React, { Component} from 'react'



export default class Filter extends Component {
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
  <section id="filter">
  <div className="inside">
       <h4>Filter</h4>

       <select className=" Neighbourhood" onChange={this.props.change} >
          <option value="Ashtown">Ashtown</option>
          <option value= "Atonsu">Atonsu</option>
            <option value= "Berlin">Berlin Top</option>
       </select>
       <select className=" Housetype" onChange={this.props.change} >
          <option value= "Storey">Storey</option>
            <option value= "Ranch">Ranch</option>
              <option value= "Compound">Compound</option>
                <option value= "Apartment">Apartment</option>
                  <option value= "Studio">Studio</option>

       </select>
       <select className=" Bedrooms" onChange={this.props.change} >
          <option value= "1 BR">1 BR</option>
            <option value= "2 BR">2 BR</option>
              <option value= "3 BR">3 BR</option>
              <option value= "4 BR">4 BR</option>
              <option value= "5 BR">5 BR</option>
                <option value= "6 BR">6 BR</option>
                  <option value= "7 BR">7 BR</option>
                    <option value= "8 BR">8 BR</option>
       </select>


        <div className="filter prices">
            <span className="title">Price</span>
           <input type="text" className="min_price"  onChange={this.props.change}
            value = {this.props.globalState.min_price} />
            <input type="text" className="max_price" onChange={this.props.change}
             value = {this.props.globalState.max_price} />
           </div>


       <div className="filter floor-space">
           <span className="title">Floor Price</span>
            <input type="text"  className="min_floor_space" onChange={this.props.change}
            value = {this.props.globalState.min_floor_space}/>
             <input type="text" className="max_floor_space" onChange={this.props.change}
             value= {this.props.globalState.max_floor_space} />
       </div>

      <div className="filter extras">
            <span className="title">
                  Extras
                 </span>
           <label htmlFor="extras" >
           <span>Elevators</span>
           <input type="checkbox"   className="elevator" value="elevator"   onChange={this.props.change}/>
            </label>

            <label htmlFor="extras" >
            <span>Swimming Pool</span>
            <input type="checkbox"   className="swimming_pool" value="swimming pool"  onChange={this.props.change}/>
             </label>

             <label htmlFor="extras"  >
             <span>Finished Basement</span>
             <input type="checkbox"  className="finished_basement"  value="finished basement" onChange={this.props.change} />
              </label>

              <label htmlFor="extras"  >
              <span>Gym</span>
              <input type="checkbox"  className="gym" value="gym" onChange={this.props.change} />
               </label>
       </div>
     </div>


  </section>

    )
  }
}
