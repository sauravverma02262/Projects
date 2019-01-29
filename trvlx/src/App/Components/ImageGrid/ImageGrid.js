import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class ImageGrid extends Component {
  render() {
    const {
      styles,
      title,
      subTitle,
      images,
      noOfImages,
      overlayText,
      buttonText,
      grid
    } = this.props;
    return (
      <div className={`imageGrid ${styles}`}>
        <div className="title">{title}</div>
        <div className="sub-title">
          <small>{subTitle}</small>
        </div>
        <div className={`img-${grid}`}>
          {images &&
            images.map(
              (image, index) =>
                index < noOfImages && (
                  <div key={index} className="box">
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
      </div>
    );
  }
}
