import React, { useEffect, useState } from 'react';
import Product from './Product.js';
import './Home.css';
import { db } from './firebase.js';

function Home() {
    const [dogFoodProducts1, setDogFoodProducts1] = useState([]);
    const [dogFoodProducts2, setDogFoodProducts2] = useState([]);
    const [dogFoodProducts3, setDogFoodProducts3] = useState([]);
    const [dogFoodProducts4, setDogFoodProducts4] = useState([]);

    useEffect(() => {
        db.collection('dogs').onSnapshot((snapshot) => (
            setDogFoodProducts1(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ));
    }, []);

    useEffect(() => {
        db.collection('dogs2').onSnapshot((snapshot) => (
            setDogFoodProducts2(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ));
    }, []);

    useEffect(() => {
        db.collection('dogs3').onSnapshot((snapshot) => (
            setDogFoodProducts3(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ));
    }, []);

    useEffect(() => {
        db.collection('dogs4').onSnapshot((snapshot) => (
            setDogFoodProducts4(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ));
    }, []);

    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://cdn.cp.adobe.io/content/2/dcx/d0342cb5-f718-4262-98f2-6636c6de117e/rendition/preview.jpg/version/2/format/jpg/dimension/width/size/1089" alt="" />

                <div className="home__row">
                    {dogFoodProducts1.map((product) => (
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
                    {dogFoodProducts2.map((product) => (
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
                    {dogFoodProducts3.map((product) => (
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
                    {dogFoodProducts4.map((product) => (
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
