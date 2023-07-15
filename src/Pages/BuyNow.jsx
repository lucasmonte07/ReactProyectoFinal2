import './Pages.css'
import React from 'react'
import Products from '../Components/Products'
import Cart from '../Components/CartContent/CartContent'

export const BuyNow = () => {
  
    return (
      <div className="card-direction-global">
          <div className= "card-direction">
              <Products/>               
          </div>
        <Cart/>
      </div>
  )
}

export default BuyNow
