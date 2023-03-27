import * as React from "react";
import { styled } from "@mui/material/styles";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
// @import url('https://fonts.cdnfonts.com/css/euclid-circular-a');

// import cardOne from "../assets/icons/Group 55277.svg";
// import cardThree from "../assets/icons/Group 55276.svg";
// import cardFour from "../assets/icons/Group 55275.svg";
import { Card, Typography, Stack } from "@mui/material";

const CustomCard = styled(Card)(({ theme }) => ({
  display: "flex",
  minHeight: theme.spacing(15),
  padding: theme.spacing(4),
  background: "rgba(255, 255, 255, 0.05)",
  color: "#fff",
  "@media (max-width: 768px)": {
    flexWrap: "wrap",
  },
}));

export default function FeaturesCard(props) {
  return (
    <CustomCard >
      <Box mr={2}>
        <img src={props.icon} alt="" />
      </Box>
      <Stack spacing={2}>
        <Typography variant="h5">{props.topic}</Typography>
        <Typography>{props.content}</Typography>
      </Stack>
    </CustomCard>
  );
}
