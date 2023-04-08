import React from 'react';

const Cart = ({cart, removeFromCartHandler}) => {
    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
            <div>
                {
                    cart.map(product => <p
                    key={product._id}
                    >{product.name} <button onClick={() => removeFromCartHandler(product._id)}>X</button></p>)
                }
            </div>
        </div>
    );
};

export default Cart;