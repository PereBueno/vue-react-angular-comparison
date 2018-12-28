import React from 'react';
import './Footer.css';

// Not extending component, as the footer is stateless 
const Footer = () => {  
  return (
    <footer className="footer is-primary">
      <div className="container">
        <div className="columns">
          <div className="column">
            <p>Some randome text goes here</p>
          </div>
          <div className="column has-text-right">
            <a href="/" className="icon"><i className="fa fa-facebook"></i></a>
            <a href="/" className="icon"><i className="fa fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
