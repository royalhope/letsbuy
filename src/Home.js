import React, { useEffect, useState } from 'react';
import Product from './Product.js';
import './Home.css';
import { db } from './firebase.js';

function Home() {
    const [trendingProducts1, setTrendingProducts1] = useState([]);
    const [trendingProducts2, setTrendingProducts2] = useState([]);
    const [trendingProducts3, setTrendingProducts3] = useState([]);

    useEffect(() => {
        db.collection('trending_products').onSnapshot((snapshot) => (
            setTrendingProducts1(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ));
    }, []);

    useEffect(() => {
        db.collection('trending_products2').onSnapshot((snapshot) => (
            setTrendingProducts2(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ));
    }, []);

    useEffect(() => {
        db.collection('trending_products3').onSnapshot((snapshot) => (
            setTrendingProducts3(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ));
    }, []);

    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://cdn.cp.adobe.io/content/2/dcx/d0342cb5-f718-4262-98f2-6636c6de117e/rendition/preview.jpg/version/2/format/jpg/dimension/width/size/1089" alt="" />

                <div className="home__row">
                    {trendingProducts1.map((product) => (
                        <Product
                            title={product.data.title}
                            image={product.data.image}
                            rating={product.data.rating}
                            price={product.data.price}
                        />
                    ))}
                </div>

                <div className="home__row">
                    {trendingProducts2.map((product) => (
                        <Product
                            title={product.data.title}
                            image={product.data.image}
                            rating={product.data.rating}
                            price={product.data.price}
                        />
                    ))}
                </div>

                <div className="home__row">
                    {trendingProducts3.map((product) => (
                        <Product
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

export default Home
