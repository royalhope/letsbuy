import React, { useState } from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
import Snackbar from './Snackbar';

function CheckoutProduct({ id, title, price, rating, image }) {
    const [{ basket }, dispatch] = useStateValue();
    const [open, setOpen] = useState(false);

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });

        setOpen(true);
    }

    return (
        <div className="checkoutProduct">
            <Snackbar open={open} setOpen={setOpen} message="Removed from basket." />

            <img className="checkoutProduct__image" src={image} />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                <small>₹</small>
                <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button className="checkoutProduct__remove" onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>

        
    )
}

export default CheckoutProduct
