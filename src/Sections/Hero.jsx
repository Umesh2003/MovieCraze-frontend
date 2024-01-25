// import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { themeConfig } from "../Utils/themeConfig";
import NavBar from "../Components/NavBar";
import { Box, Image } from "@chakra-ui/react";
import MovieDetail from "./MovieDetail";

export default function Hero() {
  return (
    <Box>
      <NavBar />

      <Carousel>
        <Carousel.Item>
          <Image
            // className="d-block w-100"
            src={themeConfig.heroSectionbg}
            alt="Image One"
            objectFit="cover"
          />
          <div className="carousel-caption">
            <h3 style={{ color: themeConfig.iconstextColor, fontWeight: 700 }}>
              MovieCraze
            </h3>
            <h1 className="big-font">
              Unlimited <span className="text-yellow">Movie</span>, <br></br>
              TVs Shows, & More.
            </h1>
            <br></br>
            <MovieDetail year={2022} duration={120} />
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src="https://themehut.co/wp/movflx/wp-content/uploads/2022/08/banner_bg01.jpg"
            alt="Image Two"
          />
          <div className="carousel-caption">
            <h3 style={{ color: themeConfig.iconstextColor, fontWeight: 700 }}>
              MovieCraze
            </h3>
            <h1 className="big-font">
              Unlimited <span className="text-yellow">Movie</span>, <br></br>
              TVs Shows, & More.
            </h1>

            <br></br>
            <MovieDetail year={2022} duration={120} />
          </div>
        </Carousel.Item>
      </Carousel>
    </Box>
  );
}
