import React, { useEffect, useState } from "react";
import "../styles.scss";
import "./carousel.scss";

const SLIDES = [
  { id: 0, src: "images/img0.svg" },
  { id: 1, src: "images/img1.svg" },
  { id: 2, src: "images/img2.svg" }
];

const Carousel = () => {
  const [imgPos, setImgPos] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let timer: number | undefined;
    if (isPlaying) {
      timer = setInterval(() => {
        setImgPos((imgPos + 1) % 3);
      }, 4500);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isPlaying, imgPos]);

  const play = () => {
    setIsPlaying(true);
  };

  const pause = () => {
    setIsPlaying(false);
  };

  const activeClass = (activeImgPos: number) => {
    if (imgPos === activeImgPos) return "active";
  };

  const renderImages = () =>
    SLIDES.map((slide) => (
      <div
        key={`image-${slide.id}`}
        className={`image-container img${slide.id} img${slide.id}-pos${imgPos}`}
      >
        <img className={activeClass(slide.id)} src={slide.src} />
      </div>
    ));

  const renderIndicators = () =>
    SLIDES.map((slide) => (
      <div key={`indicator-${slide.id}`} className="row">
        <button
          className={`indicator-number ${activeClass(slide.id)}`}
          onClick={() => setImgPos(slide.id)}
        >
          0{slide.id + 1}
        </button>
        <div className={`bar ${activeClass(slide.id)}`} />
      </div>
    ));

  return (
    <div className="carousel-component">
      <div className="images-container">{renderImages()}</div>
      <div className="indicators-container">
        {renderIndicators()}
        {isPlaying ? (
          <button className="play-pause-btn pause" onClick={pause}>
            <img src="icons/pause.png" />
          </button>
        ) : (
          <button className="play-pause-btn play" onClick={play}>
            <img src="icons/play.png" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
