import React from 'react';
import Button from './Button';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <Button
          text="Facebook"
          onClick={() => window.open('https://www.facebook.com', '_blank')}
        />
        <Button
          text="Twitter"
          onClick={() => window.open('https://www.twitter.com', '_blank')}
        />
        <Button
          text="Instagram"
          onClick={() => window.open('https://www.instagram.com', '_blank')}
        />
      </div>
    </footer>
  );
}

export default Footer;
