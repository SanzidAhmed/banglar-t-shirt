import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../T-Shirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';

const Home = () => {
    const tShirts = useLoaderData();

    const [cart, setCart] = useState([]);
    

    const addToCartHandler = (tShirt) => {
        const exist = cart.find(ts => ts._id === tShirt._id);
        if (exist) {
            toast('This product has already been added')
        }
        else {
            const newCart = [...cart, tShirt];
            setCart(newCart);
        }
    }
    const removeFromCartHandler = (id) => {
        const remaining = cart.filter(c => c._id !== id);
        setCart(remaining);
    }

    return (
        <div className='home-container'>
            <div className='t-shirt-container'>
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        addToCartHandler={addToCartHandler}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    removeFromCartHandler={removeFromCartHandler}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;