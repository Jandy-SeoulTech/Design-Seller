import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from "styled-components";

function Banner() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <>
      <StyledSlider {...settings}>
        <div>first </div>
        <div>second</div>
        <div>third</div>
      </StyledSlider>
    </>
  );
}
const StyledSlider = styled(Slider)`
  .slick-list {
    width: 100vh;
    margin: 0 auto;
    height: 300px;
    color: white;
    background-color: #ffd600;
  }
`;
export default Banner;
