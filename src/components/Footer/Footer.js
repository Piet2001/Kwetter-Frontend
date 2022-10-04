import React from 'react';
import "./Footer.css"

const Footer = () => {


    return (
        <div className="footer">
            <p className="footer-text">
                © Copyright {new Date().getFullYear()} | Kwetter
            </p>
        </div>
    );
};

export default Footer;
