import React from "react";
import NavBar from "./components/AppBar";
import AnimatedCard from "./components/AnimatedCard";
import FeaturesCard from "./components/FeaturesCard";
import Form from "./components/Form";
import cardFour from "./assets/icons/Group 55277.svg";
import cardThree from "./assets/icons/Group 55276.svg";
import cardOne from "./assets/icons/Group 55275.svg";
import cardTwo from "./assets/icons/cardTwo.svg";
import Rectangle from "./assets/icons/RectangleBgImage.svg";
import pattern from "./assets/icons/pattern.svg";
import Footer from "./components/Footer";
import Glow from "./assets/icons/Glow.svg";
import { Stack, Grid, Typography, Box, Container } from "@mui/material";
// import function to register Swiper custom elements
import Swiper from "./components/Swiper";
// register Swiper custom elements

function App() {
  return (
    <Box
    style={{
      width: "100vw",
      overflowX: "hidden",
    }}
    >
    <Container >
      <NavBar />
      <Grid
        mb={10}
        container
        sx={{
          background: "#1B0577",
          height: "35rem",
          position: "relative",
          "@media (max-width: 768px)": {
            height: "auto"
          },
        }}
      >
        <img
          src={pattern}
          alt="pattern"
          style={{ position: "absolute", top: 0, right: 0, height: "70%" }}
        />
        <img
          src={pattern}
          alt="pattern"
          style={{ position: "absolute", bottom: 0, right: 0, height: "70%" }}
        />
        <img
          src={Glow}
          alt="Glow"
          style={{ position: "absolute", top: 0, left: 0, opacity: 0.35 }}
        />
        <img
          src={Rectangle}
          alt="Rectangle"
          style={{
            position: "absolute",
            right: 0,
            top: "12.5%",
            height: "75%",
          }}
        />
        <Grid sm = {12} item  md = {8}>
          <Swiper />
        </Grid>
       
        <Grid md = {4} sm = {12} item sx = {{ height: "100%", position: "relative"}}>
           <AnimatedCard />
        </Grid>
      </Grid>
      <Stack spacing={4} component="section">
        <Typography textAlign="center" color="#fff" variant="h3">
          Miden Features
        </Typography>
        <Grid style = {{marginLeft: "-1rem"}}  container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12} md={6}>
            <FeaturesCard
              icon={cardOne}
              topic="Corporate cards"
              content="Issue personnel with cards for approved business expenses. 
              Decide who in your company should spend money when and how."
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FeaturesCard
              icon={cardTwo}
              topic="Multiple card schemes"
              content="While issuing cards, 
              Miden lets you select the card scheme of your choice, Visa, Mastercard, virtual cards are avaliable."
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FeaturesCard
              icon={cardThree}
              topic="Validity"
              content="With Miden cards, 
              you can control the tenor of each card and set spending caps for daily, weekly, and monthly usage."
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FeaturesCard
              icon={cardFour}
              topic="Personalise"
              content="To issue, manage, and keep trcak of all transaction, 
              it enables you to create to a customised dashboard & limit access to particular merchant."
            />
          </Grid>
        </Grid>
      </Stack>
      <Form />
      <Footer />
    </Container>
    </Box>
  );
}

export default App;
