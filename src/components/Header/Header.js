import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <div className="header">
            <nav>
                <a href="/catalogue">Course Catalogue</a>
                <a href="/sign">Sign Up</a>
                <a href="/login">Login</a>
                <span id="about"><a href="/about">About us / Terms and Policies</a></span>
            </nav>
            </div>
            <div className="slogan">
             <h1>Learn at your own pace!!</h1>
            </div>
        </div>
    );
};

export default Header;