import React, { Component } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { SliderData } from "../../Store/Data";
import { Link } from "react-router-dom";
export default class ImageSlider extends Component {
  render() {
    const { duration } = this.props;
    return (
      <div className="image-slider">
        <Slider autoplay className="slider-wrapper" duration={duration}>
          {SliderData.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${item.image}') no-repeat center center`
              }}
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button>{item.button}</button>
              </div>
            </div>
          ))}
        </Slider>
        <div className="short-menu">
          <div>
            <Link to="/flight">Flight</Link>{" "}
          </div>
          <div>
            <Link to="/hotels">Hotels</Link>{" "}
          </div>
          <div>
            <Link to="/trip_planner">Trip Planner</Link>{" "}
          </div>
          <div>
            <Link to="/offers">Offers</Link>{" "}
          </div>
        </div>
      </div>
    );
  }
}
