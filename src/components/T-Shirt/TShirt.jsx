import React from 'react';
import './TShirt.css'

const TShirt = ({tShirt, addToCartHandler}) => {
    const {picture, name, price, _id} = tShirt;
    return (
        <div className='card-style'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => addToCartHandler(tShirt)}>Buy now</button>
        </div>
    );
};

export default TShirt;