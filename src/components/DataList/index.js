import React from "react";
import './style.css'

const DataList = ({ data }) => {
    const { id, title, serviceTime, deliveryFee, category, cuisine, rating, price, coverSrc } = data;

    return (
        <div className="listItem-wrap">
            <img src={coverSrc} alt={title} />

            <header>
                <h4>{title}</h4>
                <span>🌟 {rating}</span>
            </header>

            <footer>
                <p>
                    <b>{serviceTime}</b> <span>Delivery Fee ₹{deliveryFee} </span> 
                </p>
                <p>
                    <b>₹{price}</b>
                </p>
            </footer>
        </div>
    )
}

export default DataList;