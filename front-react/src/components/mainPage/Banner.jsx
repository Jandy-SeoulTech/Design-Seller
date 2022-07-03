import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from "styled-components";
import 배너1 from "../../assets/img/배너1.png";
import 배너2 from "../../assets/img/배너2.jpg";
import 배너3 from "../../assets/img/배너3.png";
import 배너4 from "../../assets/img/배너4.png";

function Banner() {
  const settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,

    pauseOnHover: true,
  };
  return (
    <>
      <StyledSlider {...settings}>
        <BannerImg src={배너1} />
        <BannerImg src={배너2} />
        <BannerImg src={배너3} />
        <BannerImg src={배너4} />
      </StyledSlider>
    </>
  );
}
const StyledSlider = styled(Slider)`
  .slick-list {
    max-width: 100vw;
    min-width : 1080px;
    margin: 0 auto;
    color: white;
    background-color: #ffd600;
  }
`;
const BannerImg = styled.img`
`;
export default Banner;
