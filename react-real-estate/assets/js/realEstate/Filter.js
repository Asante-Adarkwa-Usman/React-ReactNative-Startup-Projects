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

       <select className="filter neighbourhood">
          <option>Ashtown</option>
          <option>Atonsu</option>
            <option>Berlin Top</option>
       </select>
       <select className="filter housetype">
          <option>Storey</option>
            <option>Ranch</option>
              <option>Compound</option>
       </select>
       <select className="filter bedrooms">
          <option>2 BR</option>
            <option>3 BR</option>
              <option>4 BR</option>
       </select>


        <div className="filter prices">
            <span className="title">Price</span>
           <input type="text" name="min-price" className="min-price" />
            <input type="text" name="max-price" className="max-price" />
           </div>


       <div className="filter floor-space">
           <span className="title">Price</span>
            <input type="text" name="min-floor-space" className="min-floor-space" />
             <input type="text" name="max-floor-space" className="max-floor-space" />
       </div>

      <div className="filter extras">
            <span className="title">
                  Extras
                 </span>
           <label for="extras">
           <span>Elevators</span>
           <input type="checkbox"   name="extras" value="elevator" />
            </label>

            <label for="extras">
            <span>Swimming Pool</span>
            <input type="checkbox"   name="extras" value="swimming pool" />
             </label>

             <label for="extras">
             <span>Finished Basement</span>
             <input type="checkbox"   name="extras" value="finished basement"  />
              </label>

              <label for="extras">
              <span>Gym</span>
              <input type="checkbox"   name="extras" value="gym"  />
               </label>
       </div>
     </div>


  </section>

    )
  }
}
