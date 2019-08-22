import React, { Component } from "react";
import Slider from "react-slick";
import './home-slider.styles.css';

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
            <img src="./../../static/slide-1.jpg" className="slide-img only-desktop" alt="Slide"/>
            <img src="./../../static/slide-mobile-1.jpg" className="slide-img only-mobile" alt="Slide"/>
          </div>
          <div>
            <img src="./../../static/slide-2.jpg" className="slide-img only-desktop" alt="Slide"/>
            <img src="./../../static/slide-mobile-1.jpg" className="slide-img only-mobile" alt="Slide"/>
          </div>
          <div>
            <img src="./../../static/slide-2.jpg" className="slide-img only-desktop" alt="Slide"/>
            <img src="./../../static/slide-mobile-1.jpg" className="slide-img only-mobile" alt="Slide"/>
          </div>
        </Slider>
      </div>
    );
  }
}