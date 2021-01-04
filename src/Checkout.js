import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal.js';
import CheckoutProduct from './CheckoutProduct.js';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://cdn.cp.adobe.io/content/2/dcx/9f98d688-20d0-4d30-80c6-632e47c957f2/rendition/preview.jpg/version/1/format/jpg/dimension/width/size/950" />

                <div>
                    <h3>Hello, {!user ? 'Guest' : user.email || user.phoneNumber}</h3>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;