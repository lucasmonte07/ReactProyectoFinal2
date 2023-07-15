import { useContext } from 'react';
import { dataContext } from './DataContext'
import './Products.css';

const Products = () => {
    const { data, cart, setCart } = useContext(dataContext);

    const buyProducts = (product) => {
        setCart([...cart, product])
    }

    const detalleProduct = () => {
        console.log("hola");        
    }

    return data.map((product)=> {
        return (
            <div className="cardio" key={product.id}>
                <h3> {product.id} </h3>                
                <h3 className="titleDesign">{product.title}</h3>
                <h3 className= "descripDesign">{product.description}</h3>
                <h3 className="priceDesign">{product.price}$</h3>
                <button className="buttonDesign" onClick={()=> buyProducts(product)}>BuyNow</button>
                <button onClick={()=> detalleProduct(product)}>mostrar</button>
            </div>
        )
    })

};

export default Products;