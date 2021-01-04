import React from 'react';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer.js';
import './Subtotal.css';
import { useHistory } from "react-router-dom";

function Subtotal() {
    const history = useHistory();
    const [{ basket }] = useStateValue();

    const payment = (e) => {
        if (basket == 0) {
            alert('Basket is empty!')
        } else {
            history.replace('/payment');
        }
    }

    return (
        <div className="subtotal">
            <CurrencyFormat renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" />This order contains a gift
                    </small>
                </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            
            <button onClick={payment}>Continue to Checkout</button>
        </div>
    )
}

export default Subtotal
