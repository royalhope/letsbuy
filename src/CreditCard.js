import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './CreditCard.css';

function CreditCard() {
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCVC] = useState('');
    const [focus, setFocus] = useState('');

    return (
        <div className="App">
            <Cards 
                number={number}
                expiry={expiry}
                name={name}
                cvc={cvc}
                focused={focus}
            />

                <input 
                    type="tel" 
                    name="number" 
                    placeholder="Card Number" 
                    value={number} 
                    onChange={e => setNumber(e.target.value)} 
                    onFocus={e => setFocus(e.target.name)} 
                />

                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    onFocus={e => setFocus(e.target.name)} 
                />

                <input 
                    type="text" 
                    name="expiry" 
                    placeholder="MM/YY Expiry" 
                    value={expiry} 
                    onChange={e => setExpiry(e.target.value)} 
                    onFocus={e => setFocus(e.target.name)} 
                />

                    <input 
                    type="text" 
                    name="cvc" 
                    placeholder="CVC" 
                    value={cvc} 
                    onChange={e => setCVC(e.target.value)} 
                    onFocus={e => setFocus(e.target.name)} 
                />
        </div>
    )
}

export default CreditCard
