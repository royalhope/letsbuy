import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <p>© 2020 LetsBuy, All rights reserved</p>
            <p><a className="footer__nav" href="/contact">Contact Us</a> · <a href="/about" className="footer__nav">About the creator</a> · <a href="/#" className="footer__nav">Products</a> · <a className="footer__nav" href="/feedback">Give Feedback</a></p>
        </div>
    )
}

export default Footer;