import React, { Component} from 'react'



export default class Listings extends Component {
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
  <section id="listings">
    <section className="search-area">
   <input type="text" name="search" />

    </section>

    <section className="sortby-area">
   <div className="results" >390 results found</div>
   <div className="sort-option" >
    <select name="sortby" className="sortby">
       <option value="price-asc">Highest Price</option>
       <option value="price-dsc">Lowest Price</option>
    </select>

       <div className="view">
       <i className="fa fa-th-list" aria-hidden="true"></i>
       <i className="fa fa-th" aria-hidden="true"></i>

       </div>
   </div>


    </section>

    <section className="listings-results">

       <div className="listing-img">
           <span className="Address">Address</span>
           <div className="details">
              <div className="user-img"></div>
              <div className="user-details"></div>
               <span className="user-name">Asante Emmanuel</span>
                 <span className="post-date">05/06/2019</span>

                 <div className="listing-details">
                    <div className="floor-space">
                     <i className="far fa-square" aria-hidden="true" ></i>
                       <span>1000 ft&sup2;</span>
                 </div>
                    <div className="bedrooms">
                      <i className="fas fa-bed" aria-hidden="true"></i>
                         <span>4 bedrooms</span>

                    </div>


                 </div>

           </div>

          <div className="bottom-info">
               <span> $1000 / month </span>
               <span><i className="fa fa-map-marker" aria-hidden="true" ></i> Atonsu, Kumasi</span>
         </div>

      </div>

  </section>

    <section className="pagination">
    <ul className="pagination-numbers">
        <li>Prev</li>
          <li>1</li>
            <li>2</li>
              <li>3</li>
                <li>4</li>
                  <li>5</li>
                    <li>Next</li>
    </ul>


    </section>

      </section>


    )
  }
}
