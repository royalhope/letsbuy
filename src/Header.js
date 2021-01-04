import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase.js';
import { Badge } from '@material-ui/core';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link className="logo" to="/">
                <img src="https://cdn.cp.adobe.io/content/2/dcx/cddd7656-7984-40e3-a24a-31eaf899b2c2/rendition/preview.jpg/version/2/format/jpg/dimension/width/size/208" alt="LetsBuy" />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" placeholder="Search LetsBuy" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
            
                <Link className="auth-user" to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">Hello, {!user ? 'Guest' : user.email || user.phoneNumber}</span>

                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                
                <Link className="basket_nav" to="/checkout">
                    <div className="header__optionBasket">
                        <Badge badgeContent={basket?.length} color="secondary" max={9}>
                            <ShoppingBasketIcon />
                        </Badge>
                        <span className="header__optionLineTwo header__basketCount"></span>
                    </div>    
                </Link>

            </div>
        </div>
    )
}

export default Header
