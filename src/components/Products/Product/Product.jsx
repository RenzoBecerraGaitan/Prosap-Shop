import React from "react";
import "./Product.css";

export default function Product({ product }) {
    return (<>
        <div className="col-12 col-lg-4">
            <div class="product-card">
                <div class="badge">New</div>
                <div class="product-tumb">
                    <img src={product.images[0]} alt={product.title} />
                </div>
                <div class="product-details">
                    <span class="product-catagory">{product.category.name}</span>
                    <h4><a href="">{product.title}</a></h4>
                    <p>{product.description}</p>
                    <div class="product-bottom-details">
                        <div class="product-price">${product.price}</div>
                        <div class="product-links">
                            <a href=""><i class="fa fa-heart"></i></a>
                            <a href=""><i class="fa fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );

}