import React from 'react';
import { Link } from 'react-router';

const Footer = (props) => {

  return (
    <footer className="footer">
      <small className="footer-copy">
        &copy; 2018 TingTing. All rights reserved.
      </small>
      <ul className='footer-links'>
        <li><a className="footer-text" href="https://www.linkedin.com/feed/">Linkedin</a></li>
        <li><a className="footer-text" href="https://github.com/jiangtt18/Castlebnb">Github</a></li>
        <li><a className="footer-text" href="https://castlebnb.herokuapp.com/#/">Website</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
