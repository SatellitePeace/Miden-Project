// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

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
    title: "Issue Virtual Cards without Borders",
    caption:
      "Miden enables startups and businesses within  Africa issue virtual payment cards through a bespoke API to provide unmatched features",
  },
  {
    title: "Issue Virtual Cards without Borders",
    caption:
      "Miden enables startups and businesses within  Africa issue virtual payment cards through a bespoke API to provide unmatched features",
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
      {slideContent.map(({title, caption}, index) => (
        <SwiperSlide>
          <Stack sx = {{padding: "6rem"}} spacing={4}>
            <Typography variant="h2">{title}</Typography>
            <Typography lineHeight="150%" variant="p">{caption}</Typography>
          </Stack>
        </SwiperSlide>
      ))}
      <Box px = "6rem">
        <Button sx = {{marginRight: '30px', width: 150, background: "#fff", color: "#0A0034"}} variant="contained">Sign Up</Button>
        <Button sx = {{ width: 150, color: '#fff' }} variant="outlined">API Docs → </Button>
      </Box>
      <div class="swiper-pagination"></div>
    </Swiper>
  );
};
