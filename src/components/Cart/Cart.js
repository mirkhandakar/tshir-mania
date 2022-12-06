import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveCart }) => {
    console.log(cart);
    return (
        <div>
            <h2>Item Selected: {cart.length}</h2>
            {
                cart.map(tShirt => <p>{tShirt.name}
                    <button onClick={() => { handleRemoveCart(tShirt) }}>X</button></p>)
            }
        </div>
    );
};

export default Cart;