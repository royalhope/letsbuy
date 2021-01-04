import React, { useEffect, useState } from 'react';
import Product from './Product.js';
import './Home.css';
import { db } from './firebase.js';

function Electronics() {
    const [electronicProducts1, setElectronicProducts1] = useState([]);
    const [electronicProducts2, setElectronicProducts2] = useState([]);
    const [electronicProducts3, setElectronicProducts3] = useState([]);
    const [electronicProducts4, setElectronicProducts4] = useState([]);

    useEffect(() => {
        db.collection('electronics').onSnapshot((snapshot) => (
            setElectronicProducts1(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ));
    }, []);

    useEffect(() => {
        db.collection('electronics2').onSnapshot((snapshot) => (
            setElectronicProducts2(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ));
    }, []);

    useEffect(() => {
        db.collection('electronics3').onSnapshot((snapshot) => (
            setElectronicProducts3(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ));
    }, []);

    useEffect(() => {
        db.collection('electronics4').onSnapshot((snapshot) => (
            setElectronicProducts4(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ));
    }, []);

    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://cdn.cp.adobe.io/content/2/dcx/d0342cb5-f718-4262-98f2-6636c6de117e/rendition/preview.jpg/version/2/format/jpg/dimension/width/size/1089" alt="" />

                <div className="home__row">
                    {electronicProducts1.map((product) => (
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
                    {electronicProducts2.map((product) => (
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
                    {electronicProducts3.map((product) => (
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
                    {electronicProducts4.map((product) => (
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

export default Electronics
