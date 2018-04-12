import React from 'react';
import { Link } from 'react-router';

const Footer = (props) => {

  return (
    <div className="footer">
      <span className="footer-text-container">
        <a className="footer-text" href="https://www.linkedin.com/feed/">Company</a>
        <a className="footer-text" href="https://github.com/jiangtt18/Castlebnb">About</a>
        <a className="footer-text" href="https://castlebnb.herokuapp.com/#/">Hosting</a>
      </span>
    </div>
  );
};

export default Footer;
