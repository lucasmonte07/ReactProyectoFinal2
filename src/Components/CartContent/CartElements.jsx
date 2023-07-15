import { useContext } from 'react';
import { dataContext } from '../DataContext';
import './Cart.css'

import React from 'react'

const CartElements = () => {
    const { cart } = useContext(dataContext);
    return cart.map((product)=> {
        return (
            <div className="cartContent" key={ product.id }>
                <h3 className="titleDesignCart">{product.title}</h3>
                <h3 className= "descripDesignCart">{product.description}</h3>
                <h3 className="priceDesignCart">{product.price}$</h3>
            </div>
        )
    })
}

export default CartElements
