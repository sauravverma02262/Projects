import React, { Component } from "react";
import { connect } from "react-redux";
import ImageSlider from "../Slider/Slider";
import ImageGrid from "../Components/ImageGrid/ImageGrid";
import { getServiceImages } from "../../Store/Home/actionCreator";
import AboutUs from "./Aboutus";
export class HomePage extends Component {
  componentDidMount = () => {
    this.props.getServiceImages();
  };
  render() {
    const { images } = this.props;
    return (
      <div className="home">
        <ImageSlider duration={5000} />
        <ImageGrid
          styles="service-1"
          title="Open Your World"
          subTitle="Get inspired, find the best deals and start an unforgettable journey"
          images={images}
          noOfImages={4}
          grid={2}
          overlayText="Plan A Trip"
          buttonText="Book Now"
        />
        <ImageGrid
          styles="service-2"
          title="Trending Citie"
          subTitle="The most searched for cities on TrvlX"
          images={images}
          noOfImages={15}
          grid={3}
          overlayText="Places To Explore"
          buttonText="Book Flight Now"
        />

        <ImageGrid
          styles="service-3"
          title="Trending Citie"
          subTitle="The most searched for cities on TrvlX"
          images={images}
          noOfImages={15}
          grid={4}
          overlayText="Places To Explore"
          buttonText="Book Flight Now"
        />
        <AboutUs />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  images: state.Home.images
});

const mapDispatchToProps = {
  getServiceImages
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
