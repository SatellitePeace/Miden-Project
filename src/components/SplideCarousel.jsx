import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
import "./SplideCarousel.css";
import "../index.css"

export default function SplideCarousel(index) {
  const options = {
    pagination: true,
    type: "loop",
    autoplay: "play",
    perPage: 1,
    arrows: false,
    interval: 4000,
  };
  return (
    <header>
      <Splide
        options={options}
        hasTrack={false}
        aria-labelledby="carousel-heading"
      >
        <SplideTrack>
          <SplideSlide>
            <h1>Issue Virtual Cards without Borders</h1>
            <p>
              Miden enables startups and businesses within Africa issue virtual
              payment cards through a bespoke API to provide unmatched features
            </p>
          </SplideSlide>
          <SplideSlide>
            <h1>Completly Design Your Card</h1>
            <p>
              All issued cards have no source tags and can be fully branded as
              yours.
            </p>
          </SplideSlide>
          <SplideSlide>
            <h1>Issuers Control</h1>
            <p>
              Set spending limits, card crediting capacity, and expiration dates
              ensuring you are in full control.
            </p>
          </SplideSlide>
          <SplideSlide>
            <h1>Transform Your Finances </h1>
            <p>
              Looking for an easy way to manage your finances? We provide the
              best solutions to help you achieve your financial goals with ease.
            </p>
            <br />
          </SplideSlide>
        </SplideTrack>
        {/*  */}
        <div className="btns">
          <button className="standard-btn">apply now</button>
          <button className="outline">API docs &rarr;</button>
        </div>
        {/*  */}
        <div class="splide__progress">
          <div class="splide_progress_bar"></div>
        </div>
      </Splide>
    </header>
  );
}
