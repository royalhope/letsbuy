import React, { useState } from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
import CurrencyFormat from "react-currency-format";
import Snackbar from './Snackbar';

function Product({ title, image, price, rating }) {
    const [{}, dispatch] = useStateValue();
    const [open, setOpen] = useState(false);

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });

        setOpen(true);
    };
    return (
        <div style={{userSelect: 'none'}} className="product">
            <Snackbar open={open} setOpen={setOpen} message="Added to basket!" />

            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <CurrencyFormat renderText={(value) => (
                        <>
                            <small>₹</small>
                            <strong>{value}</strong>
                        </>

                        )}
                        decimalScale={2}
                        value={price}
                        displayType={"text"}
                        thousandSeparator={true}
                    />
                </p>

                <div className="product__rating">
                {Array(rating).fill().map((_, i) => (
                    <p>⭐</p>
                ))}
                </div>
            </div>

            <img src={image} alt={title} />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product