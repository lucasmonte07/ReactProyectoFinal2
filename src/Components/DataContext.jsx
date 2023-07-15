import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const dataContext = createContext();

const DataProvider = ({children}) => {

    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(() =>{
        axios("data.json")
        .then((res) => setData(res.data))
//        axios("http://localhost:4000/product/").then((res) => setData(res.data))    

//        fetch("http://localhost:4000/product/")
//        .then(res => res.json())        
//        .then(dato => setData(dato.docs))
        
    },[]);    
    
    return <dataContext.Provider value={{ data, cart, setCart }}>{children}</dataContext.Provider>
    
};

export default DataProvider;