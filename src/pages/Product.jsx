import { useContext, useEffect, useState } from "react";

import { CartContext } from "../contexts/cart_context";
import { ProductsURL } from "../constants";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, useParams } from 'react-router-dom';


function Product() {
    const { dispatch } = useContext(CartContext);
    let { id } = useParams();
    const [product, setProduct] = useState(null)

    useEffect(()=>{
        productLoader()
    },[])

    if(!product) return "Loading..."

    function addToCart() {
        dispatch({ type: "ADD_PRODUCT", payload: product });
        toast("Added to Cart");
    }
    return (
        <div
            style={{
                border: "2px solid white",
                margin: "1rem",
                width: "500px",
                padding: "1rem",
                margin:"auto"
                
            }}
        >
            <img src={product.img} alt="" width="500px"/>
            <p>Product name : {product.name}</p>
            <p>Product price : {product.price}</p>
            <p>{product.description}</p>
            <button onClick={addToCart} className="btn1">Add to Cart</button>
            <ToastContainer/>
        </div>
    );

    async function productLoader () {
        const response = await fetch("/db.json");
        const data = await response.json();

        for(let item of data.products){
            if(item.id == id){
                setProduct(item)
            }
        }
     
    };
}

export default Product;