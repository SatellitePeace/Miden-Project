// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Typography, Stack, Button, Box } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./swiper.css";

const listArray = ["slide1", "slide2", "slide3", "slide4"];

const slideContent = [
  {
    title: "Issue Virtual Cards without Borders",
    caption:
      "Miden enables startups and businesses within  Africa issue virtual payment cards through a bespoke API to provide unmatched features",
  },
  {
    title: "Completly Design Your Card",
    caption:
      "All issued cards have no source tags and can be fully branded as yours.",
  },
  {
    title: "Issuers Control",
    caption:
      "Set spending limits, card crediting capacity, and expiration dates ensuring you are in full control.",
  },
  {
    title: "Issue Virtual Cards without Borders",
    caption:
      "Miden enables startups and businesses within  Africa issue virtual payment cards through a bespoke API to provide unmatched features",
  },
];

export default () => {
  return (
    <Swiper
      // install Swiper modules
      style={{
        "@media (max-width: 768px)": {
          width: "100vw",
        },
      }}
      modules={[Pagination, Autoplay]}
      loop={true}
      autoplayDisableOnInteraction={false}
      slidesPerView={1}
      autoHeight={true}
      effect="slide"
      spaceBetween={50}
      autoplay={{
        delay: 3000,
      }}
      pagination={{
        el: ".swiper-pagination",
        clickable: "true",
        type: "bullets",
        renderBullet: function (index, className) {
          return (
            '<span class="' +
            className +
            '">' +
            "<em>" +
            listArray[index] +
            "</em>" +
            "<i></i>" +
            "<b></b>" +
            "</span>"
          );
        },
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {slideContent.map(({ title, caption }, index) => (
        <SwiperSlide>
          <Stack
            sx={{
              padding: "6rem",
              "@media (max-width: 768px)": {
                padding: "6rem 1rem",
                width: "80vw",
              },
            }}
            spacing={4}
          >
            <Typography fontSize="2rem">{title}</Typography>
            <Typography lineHeight="150%" variant="p">
              {caption}
            </Typography>
          </Stack>
        </SwiperSlide>
      ))}
      <Box
        sx={{
          position: "absolute",
          bottom: "4rem",
          paddingLeft: "6rem",
          "@media (max-width: 768px)": {
            paddingLeft: 0,
          },
        }}
      >
        <Button
          sx={{
            marginRight: "30px",
            width: 140,
            background: "#fff",
            color: "#0A0034",
          }}
          variant="contained"
        >
          Sign Up
        </Button>
        <Button sx={{ width: 140, color: "#fff" }} variant="outlined">
          API Docs →{" "}
        </Button>
        {/* sx={HeaderBtnSX} */}
      </Box>
      <div class="swiper-pagination"></div>
    </Swiper>
  );
};
