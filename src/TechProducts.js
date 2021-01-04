import React, { useEffect, useState } from 'react';
import Product from './Product.js';
import './Home.css';
import { db } from './firebase.js';

function TechProducts() {
    const [techProducts1, setTechProducts1] = useState([]);
    const [techProducts2, setTechProducts2] = useState([]);
    const [techProducts3, setTechProducts3] = useState([]);
    const [techProducts4, setTechProducts4] = useState([]);

    useEffect(() => {
        db.collection('tech_products').onSnapshot((snapshot) => (
            setTechProducts1(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ));
    }, []);

    useEffect(() => {
        db.collection('tech_products2').onSnapshot((snapshot) => (
            setTechProducts2(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ));
    }, []);

    useEffect(() => {
        db.collection('tech_products3').onSnapshot((snapshot) => (
            setTechProducts3(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ));
    }, []);

    useEffect(() => {
        db.collection('tech_products4').onSnapshot((snapshot) => (
            setTechProducts4(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ));
    }, []);

    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://cdn.cp.adobe.io/content/2/dcx/d0342cb5-f718-4262-98f2-6636c6de117e/rendition/preview.jpg/version/2/format/jpg/dimension/width/size/1089" alt="" />

                <div className="home__row">
                    {techProducts1.map((product) => (
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
                    {techProducts2.map((product) => (
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
                    {techProducts3.map((product) => (
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
                    {techProducts4.map((product) => (
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

export default TechProducts
