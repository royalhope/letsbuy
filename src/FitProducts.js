import React, { useEffect, useState } from 'react';
import Product from './Product.js';
import './Home.css';
import { db } from './firebase.js';

function Home() {
    const [fitnessProducts1, setFitnessProducts1] = useState([]);
    const [fitnessProducts2, setFitnessProducts2] = useState([]);
    const [fitnessProducts3, setFitnessProducts3] = useState([]);

    useEffect(() => {
        db.collection('fitness_products').onSnapshot((snapshot) => (
            setFitnessProducts1(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ));
    }, []);

    useEffect(() => {
        db.collection('fitness_products2').onSnapshot((snapshot) => (
            setFitnessProducts2(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ));
    }, []);

    useEffect(() => {
        db.collection('fitness_products3').onSnapshot((snapshot) => (
            setFitnessProducts3(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ));
    }, []);

    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://cdn.cp.adobe.io/content/2/dcx/d0342cb5-f718-4262-98f2-6636c6de117e/rendition/preview.jpg/version/2/format/jpg/dimension/width/size/1089" alt="" />

                <div className="home__row">
                    {fitnessProducts1.map((product) => (
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
                    {fitnessProducts2.map((product) => (
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
                    {fitnessProducts3.map((product) => (
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

export default Home
