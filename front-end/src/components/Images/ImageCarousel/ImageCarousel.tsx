import React, { useState } from "react";
import { Link } from "../../../types/Post";

interface Props {
  images: Array<Link>;
}

const ImageCarousel: React.FC<Props> = props => {
  const { images } = props;
  const [currentImage, changeCurrentImage] = useState(0);
  // console.log(currentImage);
  return (
    <React.Fragment>
      <section className="card-image-carousel">
        <img src={images[currentImage].url} alt={images[currentImage].source} />
      </section>
      {images.length <= 1 ? null : (
        <section className="card-image-controller">
          <img
            src={require("../../../images/left.svg")}
            onClick={() => {
              if (currentImage - 1 < 0) changeCurrentImage(images.length - 1);
              else changeCurrentImage(currentImage - 1);
            }}
          />
          <img
            src={require("../../../images/right.svg")}
            onClick={() => {
              if (currentImage + 1 >= images.length) changeCurrentImage(0);
              else changeCurrentImage(currentImage + 1);
            }}
          />
        </section>
      )}
    </React.Fragment>
  );
};

export default ImageCarousel;
