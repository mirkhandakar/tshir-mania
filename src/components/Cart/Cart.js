import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveCart }) => {
    //conditional rendering option
    // 1. Element variable
    // 2. Ternary operator (condition ? True : False);
    // 3. Short operator (Shorthand operator)

    let command;
    if (cart.length === 0) {
        command = <p>Please add at least one item</p>
    }
    else if (cart.length === 1) {
        command = <p>Please add more....</p>
    }
    else {
        command = <p>Thanks for adding items</p>
    }
    return (
        <div>
            <h2>Item Selected: {cart.length}</h2>

            {
                cart.map(tShirt => <p>{tShirt.name}
                    <button onClick={() => { handleRemoveCart(tShirt) }}>X</button></p>)
            }
            {command}
            {cart.length === 0 || <p className='orange'>YaY!!! You are buying</p>}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal Added</h3>
                <p>You have three gift</p>
            </div>}
            {cart.length !== 4 ? <p>Keep additing</p> : <button>Remove All</button>}
            {cart.length === 4 && <button className='orange'>Review All</button>}
        </div>
    );
};

export default Cart;