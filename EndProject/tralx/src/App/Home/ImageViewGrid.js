import React, { Component } from "react";
import Button from "react-bootstrap/lib/Button";
export default class ImageViewGrid extends Component {
  render() {
    const {
      images,
      noOfImages,
      grid,
      title,
      caption,
      buttonText,
      overlayText
    } = this.props;
    return (
      <div className={`places grid-${grid}`}>
        <div className="caption">
          <h2>{title}</h2>
        </div>
        <div className="sub-cap">
          <small>{caption}</small>
        </div>
        {images &&
          images.map(
            (image, index) =>
              index < noOfImages && (
                <div key={index} className={`pImage pImage${index}`}>
                  {<img src={image.largeImageURL} alt={`img-${index}`} />}
                  <div className="overlay">
                    <div className="over-cont">
                      <h1>{overlayText}</h1>
                      <Button>{buttonText}</Button>
                    </div>
                  </div>
                </div>
              )
          )}
      </div>
    );
  }
}
