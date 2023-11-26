import React, { useEffect, useState } from "react";
import "./Index.css";
import Swiper from "../Swiper/Swiper";
import Payment from "../Payment/Payment";
import { getDolarPrice } from "../../services/DolarAPI";
import Products from "../Products/Products";



let Index = () => {

    let prices = [{}];

    useEffect(() => {
        getDolarPrice('blue').then((price) => this.price.push(price));
       /*  getDolarPrice('oficial').then((price) => prices.push([...prices, price])); */
        console.log(prices[0]);
    }, [])

    return (
        <>
            <Swiper />
            <div className="mt-5 container">
                <h3>Productos: </h3>
                <Products />
            </div>
        </>
    )
}

export default Index;