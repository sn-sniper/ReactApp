import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            <ul className='cartItems'>
                {cart.map((product, index) => (
                    <li key={index}>
                        <button className='remBtn' onClick={() => removeFromCart(product)}>×</button>
                        {product.name} - ${product.price}
                        </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
