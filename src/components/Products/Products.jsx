import React, { useEffect, useState } from "react";
import "./Products.css";
import { getProducts } from "../../services/FakeStoreAPI";
import Product from "./Product/Product";


let Products = () => {

    let [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((products) => setProducts(products));
    }, [])

    return (
        <>
                <div className="container">
                <h3 className="textUpperCase">¡LAS MEJORES OFERTAS DEL DÍA!</h3>
                    <div className="row">
                        {
                            products.slice(0, 10).map((product, idx) => {
                                return (<Product product={product} key={product.id} />)
                            })
                        }
                    </div>
                </div>
        </>)
};


export default Products;