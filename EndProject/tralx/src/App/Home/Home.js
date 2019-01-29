import React, { Component } from "react";
import { connect } from "react-redux";
import Jumbotron from "react-bootstrap/lib/Jumbotron";
import FlightForm from "../Components/Forms/FlightForm/FlightForm";
import { getImages } from "../../Store/Home/actionCreator";
import Button from "react-bootstrap/lib/Button";
import ImageViewGrid from "./ImageViewGrid";
import Footer from "../Components/Footer/Footer";
export class Home extends Component {
  componentDidMount() {
    this.props.getImages();
  }
  render() {
    const { images } = this.props;
    return (
      <div className="Home">
        <Jumbotron>
          <div className="grid">
            <div className="form">
              <FlightForm />
            </div>
          </div>
        </Jumbotron>
        <ImageViewGrid
          images={images}
          noOfImages={4}
          grid={2}
          title="Open Your World"
          caption="Get inspired, find the best deals and start an unforgettable journey"
          overlayText="Plan a trip"
          buttonText="Plan Now"
        />
        <ImageViewGrid
          images={images}
          noOfImages={12}
          grid={`3 places-to-visit`}
          title="Trending Citie"
          caption="The most searched for cities on TrvlX"
          overlayText="Popular places to visit"
          buttonText="Book A flight"
        />

        <div className="app-container grid-4">
          <div className="tag-line">A little bit more about TrvlX flights</div>
          <div className="sub-cap">
            Here’s why travellers use TrvlX as their free service to find cheap
            flights
          </div>
          <div className="reasons">
            <div className="r-1">
              <h3>Get the best deals</h3>
              <small>
                We search and compare real-time prices on flights, hotels and
                cars so you can find the cheapest, quickest and best travel
                deals
              </small>
            </div>
            <div className="r-2">
              <h3>100% price transparency</h3>
              <small>
                The prices you see are never affected by your searches, no
                matter how many you make. We do not use cookies to adjust or
                increase prices.
              </small>
            </div>
            <div className="r-3">
              <h3>Trusted and free</h3>
              <small>
                We’re completely free to use – no hidden charges or fees – and
                we’re endorsed by Frommer’s, CNN and the New York Times
              </small>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  images: state.Home.images
});

const mapDispatchToProps = {
  getImages
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
