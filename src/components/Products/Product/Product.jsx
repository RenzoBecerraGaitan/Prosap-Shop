import React from "react";
import "./Product.css";

export default function Product({ product }) {
    return (<>
        <div classNameName="col">
            <div className="product-card card">
                <div className="badge">New</div>
                <div className="product-tumb">
                    <img src={product.images[0]} alt={product.title} />
                </div>
                <div className="product-details">
                    <span className="product-catagory">{product.category.name}</span>
                    <h4><a href="">{product.title}</a></h4>
                    <p>{product.description}</p>
                    <div className="product-bottom-details">
                        <div className="product-price">${product.price}</div>
                        <div className="product-links">
                            <a href=""><i className="fa fa-heart"></i></a>
                            <a href=""><i className="fa fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );

}