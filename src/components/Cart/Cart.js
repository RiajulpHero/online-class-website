import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, course) => total + Number(course.price), 0);
    return (
        <div className="cart">
            <h3>My courses</h3>
            <p>Courses enrolled: {cart.length}</p>
            <p>Total price: ${Number(total).toFixed(2)}</p>
            <button id="review-btn">Review enrolment</button>
        </div>
    );
};

export default Cart;