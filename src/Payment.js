import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './reducer.js';
import { db } from './firebase';
import firebase from 'firebase';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import UserLocation from './UserLocation';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');

    const history = useHistory();

    const userOrders = () => {
        if (number && name && expiry && cvc !== null ) {
            history.replace('/');
            alert(`Order of ₹${getBasketTotal(basket)} successful!`);
            dispatch({
                type: 'EMPTY_BASKET'
            });
            
            db.collection("payments").add({
                price: getBasketTotal(basket),
                email: user.email,
                cvc: cvc,
                numberOfItems: basket.length,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                displayName: user.displayName,
                creditCardNumber: number,
                basket: basket
            });
        } else {
            alert('Please fill credit card details!');
        }
        
    };

//     var str=user.email;
// var nameMatch = str.match(/^([^@]*)@/);
// var Name = nameMatch ? nameMatch[1] : null;

    console.log('basket', basket);
    console.log('user', user);
    console.log('stateValue', useStateValue);

    return (
        <div className="payment">
            {!user ? (
                history.replace('/login-payment')
            ) : (
                <div className="payment__container">

                    <h1>
                        Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                    </h1>
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Delivery Address</h3>
                        </div>

                        <div className="payment__address">
                            <p>{user?.email}</p>
                            <UserLocation />
                        </div>
                    </div>

                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Review Items And Delivery</h3>
                        </div>

                        <div className="payment__items">
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

                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Payment Method : <br /> Credit Card</h3>
                        </div>

                        <div className="payment__details">
                            <div className="payment__cardNumber">
                                <div className="App">
                                    <Cards 
                                        number={number}
                                        expiry={expiry}
                                        name={name}
                                        cvc={cvc}
                                        focused={focus}
                                    />

                                    <br />
                                    
                                    <input
                                        className="credit-card-input"
                                        type="tel" 
                                        name="number" 
                                        placeholder="Card Number" 
                                        value={number}
                                        maxLength={16}
                                        onChange={e => setNumber(e.target.value)} 
                                        onFocus={e => setFocus(e.target.name)} 
                                    />

                                    <input
                                        className="credit-card-input"
                                        type="text" 
                                        name="name" 
                                        placeholder="Full Name" 
                                        value={name} 
                                        onChange={e => setName(e.target.value)} 
                                        onFocus={e => setFocus(e.target.name)} 
                                    />

                                    <input
                                        className="credit-card-input"
                                        type="tel"
                                        name="expiry"
                                        placeholder="Expiry" 
                                        value={expiry}
                                        maxLength={4}
                                        onChange={e => setExpiry(e.target.value)} 
                                        onFocus={e => setFocus(e.target.name)} 
                                    />

                                    <input
                                        className="credit-card-input"
                                        type="tel" 
                                        name="cvc" 
                                        placeholder="CVC" 
                                        value={cvc} 
                                        maxLength={4}
                                        onChange={e => setCvc(e.target.value)} 
                                        onFocus={e => setFocus(e.target.name)} 
                                    />
                                </div>
                            </div>

                            <div className="payment__price">
                                <br />
                                <CurrencyFormat renderText={(value) => (
                                    <>
                                        <p>
                                            Subtotal ({basket.length} items): <strong>{value}</strong>
                                        </p>
                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₹ "}
                                />
                            
                                <button className="submit-payment" onClick={userOrders}>Submit</button>
                            </div>
                        </div>
                    </div>
            </div>)}      
        </div>
    )
}

export default Payment
