import React, { useEffect, useState } from 'react';
import Product from './Product.js';
import './Home.css';
import { db } from './firebase.js';

function Books() {
    const [bookProducts1, setBookProducts1] = useState([]);
    const [bookProducts2, setBookProducts2] = useState([]);
    const [bookProducts3, setBookProducts3] = useState([]);
    const [bookProducts4, setBookProducts4] = useState([]);

    useEffect(() => {
        db.collection('books').onSnapshot((snapshot) => (
            setBookProducts1(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ));
    }, []);

    useEffect(() => {
        db.collection('books2').onSnapshot((snapshot) => (
            setBookProducts2(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ));
    }, []);

    useEffect(() => {
        db.collection('books3').onSnapshot((snapshot) => (
            setBookProducts3(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ));
    }, []);

    useEffect(() => {
        db.collection('books4').onSnapshot((snapshot) => (
            setBookProducts4(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ));
    }, []);

    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://cdn.cp.adobe.io/content/2/dcx/d0342cb5-f718-4262-98f2-6636c6de117e/rendition/preview.jpg/version/2/format/jpg/dimension/width/size/1089" alt="" />

                <div className="home__row">
                    {bookProducts1.map((product) => (
                        <Product
                            id={product.data.id}
                            title={product.data.title}
                            image={product.data.image}
                            rating={product.data.rating}
                            price={product.data.price}
                        />
                    ))}
                </div>

                <div className="home__row">
                    {bookProducts2.map((product) => (
                        <Product
                            id={product.data.id}
                            title={product.data.title}
                            image={product.data.image}
                            rating={product.data.rating}
                            price={product.data.price}
                        />
                    ))}
                </div>

                <div className="home__row">
                    {bookProducts3.map((product) => (
                        <Product
                            id={product.data.id}
                            title={product.data.title}
                            image={product.data.image}
                            rating={product.data.rating}
                            price={product.data.price}
                        />
                    ))}
                </div>

                <div className="home__row">
                    {bookProducts4.map((product) => (
                        <Product
                            id={product.data.id}
                            title={product.data.title}
                            image={product.data.image}
                            rating={product.data.rating}
                            price={product.data.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Books