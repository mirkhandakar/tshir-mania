import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useTShirt from '../hooks/useTShirts';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
    const [tShirts, setTShirts] = useTShirt();
    const [cart, setCart] = useState([]);

    const handleAddtoCart = (selectedItem) => {
        const exists = cart.find(tShirt => tShirt._id === selectedItem._id);
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else {
            alert('Already product added');
        }

    }

    const handleRemoveCart = (selectedItem) => {
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(rest);
    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddtoCart={handleAddtoCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    handleRemoveCart={handleRemoveCart}
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;