import React, { Component } from "react";
import Slider from "react-slick";

export default class HomeSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      autoplay: true,
      infinite: true,
      adaptiveHeight: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="./../../static/flyer.png" className="slide-img" alt="Slide"/>
          </div>
          <div>
            <img src="./../../static/flyer.png" className="slide-img" alt="Slide"/>
          </div>
          <div>
            <img src="./../../static/flyer.png" className="slide-img" alt="Slide"/>
          </div>
        </Slider>
      </div>
    );
  }
}