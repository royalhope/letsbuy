import React, { useEffect } from 'react';
import Header from'./Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import Login from "./Login.js";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from './firebase.js';
import { useStateValue } from './StateProvider.js';
import Payment from './Payment.js';
import Sidebar from './Sidebar.js';
import TechProducts from './TechProducts.js';
import LoginPayment from './LoginPayment.js';
import FitProducts from './FitProducts.js';
import Toys from './Toys';
import Books from './Books';
import Stationery from './Stationery';
import Dogs from './Dogs';
import Electronics from './Electronics.js';
import Footer from './Footer.js';
import Feedback from './Feedback.js';
import Contact from './Contact.js';
import About from './About.js';

function Routing() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/about">
            <Header />
            <About />
          </Route>

          <Route path="/contact">
            <Header />
            <Contact />
          </Route>

          <Route path="/feedback">
            <Header />
            <Feedback />
          </Route>

          <Route path="/electronics">
            <Header />
            <div className="app__body">
              <Sidebar />
              <Electronics />
            </div>

            <Footer />
          </Route>

          <Route path="/dogs">
            <Header />
            <div className="app__body">
              <Sidebar />
              <Dogs />
            </div>

            <Footer />
          </Route>

          <Route path="/stationery">
            <Header />
            <div className="app__body">
              <Sidebar />
              <Stationery />
            </div>

            <Footer />
          </Route>

          <Route path="/books">
            <Header />
            <div className="app__body">
              <Sidebar />
              <Books />
            </div>

            <Footer />
          </Route>

          <Route path="/toys">
            <Header />
            <div className="app__body">
              <Sidebar />
              <Toys />
            </div>
            
            <Footer />
          </Route>

          <Route path="/fitness">
            <Header />
            <div className="app__body">
              <Sidebar />
              <FitProducts />
            </div>
            
            <Footer />
          </Route>


          <Route path="/login-payment">
            <LoginPayment />
          </Route>

          <Route path="/tech">
          <Header />
            <div className="app__body">
              <Sidebar />
              <TechProducts />
            </div>

            <Footer />
          </Route>

          <Route path="/payment">
            <Header />
            <Payment />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <div className="app__body">
              <Sidebar />
              <Home />
            </div>

            <Footer />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default Routing;
