import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PlaceIcon from '@mui/icons-material/Place';
import ReviewsIcon from '@mui/icons-material/Reviews';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='footerLeft'>
        <h3>Contact</h3>
          <p> +1 (909) 627-7569 </p>
          <p>CountryFSweb@gmail.com</p>
          <p>6160 Riverside Dr Chino, CA 91710</p>
      </div>
      <div className='storeHours'>
      <h3>Store Hours</h3>
                    <p>Monday - Friday: 8am - 5pm</p>
                    <p>Saturday: 8am - 4pm</p>
                    <p>Sunday: Closed</p>
      </div>
      <div className="footerRight">
          <div className="socialMedia">
            <a href="https://maps.app.goo.gl/iS64xBMdFqw8EgT96" target="_blank" rel="noopener noreferrer">
              <PlaceIcon/>
            </a>
            <a href="https://www.instagram.com/countryfarmsupply/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/company/country-farm-supply/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href="https://www.yelp.com/biz/country-farm-supply-chino" target="_blank" rel="noopener noreferrer">
              <ReviewsIcon />
            </a>
          </div>
      </div>
    </div>
  );
}

export default Footer;