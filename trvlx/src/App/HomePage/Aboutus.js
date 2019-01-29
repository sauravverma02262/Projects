import React from "react";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="tag-line">A little bit more about TrvlX flights</div>
      <div className="sub-cap">
        Here’s why travellers use TrvlX as their free service to find cheap
        flights
      </div>
      <div className="reasons">
        <div className="r-1">
          <h3>Get the best deals</h3>
          <small>
            We search and compare real-time prices on flights, hotels and cars
            so you can find the cheapest, quickest and best travel deals
          </small>
        </div>
        <div className="r-1">
          <h3>100% price transparency</h3>
          <small>
            The prices you see are never affected by your searches, no matter
            how many you make. We do not use cookies to adjust or increase
            prices.
          </small>
        </div>
        <div className="r-1">
          <h3>Trusted and free</h3>
          <small>
            We’re completely free to use – no hidden charges or fees – and we’re
            endorsed by Frommer’s, CNN and the New York Times
          </small>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
