import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {  useLoaderData } from "react-router-dom";

import "./product.css";

function Products() {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        productsLoader()
    },[])

    // return JSON.stringify(products) 


    return (
        <div>
            <h2 id="head">All products</h2><hr></hr>
            <div className="head"><h2>Please Click on the product to get the details!!</h2></div>
            {products.map((product) => {
                return (
                    <div
                        key={product.id}
                        style={{
                            border: "2px solid white",
                            margin: "1rem",
                            width: "500px",
                            padding: "1rem",
                        }}
                    >
                        <Link to={`/products/${product.id}`} >
                            <img className="product"
                                src={product.img}
                                alt={product.name}
                                width="400px"
                            />
                            <p> {product.name}</p>
                        </Link>
                    </div>
                );
            })}
        </div>
    );


    async function productsLoader () {
        const response = await fetch("/db.json");
        const data = await response.json();
        setProducts(data.products);
    };
    
}

export default Products;