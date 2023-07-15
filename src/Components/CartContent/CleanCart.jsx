
import { useContext } from 'react';
import { dataContext } from '../DataContext';

const CleanCart = () => {

    const { setCart } = useContext(dataContext);

    const cleanCarts = () => {
        setCart([])        
    }

    return (
        <div className="clean-cart">        
            <button className="clean-cart-button" onClick={()=> cleanCarts()}>CLEAN CART</button>
        </div>
    )
}

export default CleanCart



