import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Card, Typography, Stack } from "@mui/material";

const CustomCard = styled(Card)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(5),
  background: "rgba(255, 255, 255, 0.05)",
  color: "#fff",
  minHeight: "15.5rem",
  "@media (max-width: 767px)": {
    flexWrap: "wrap",
  },
}));

export default function FeaturesCard(props) {
  return (
    <CustomCard >
      <Box mr={2}>
        <img src={props.icon} alt="card icons" />
      </Box>
      <Stack spacing={2}>
        <Typography variant="h5">{props.topic}</Typography>
        <Typography>{props.content}</Typography>
      </Stack>
    </CustomCard>
  );
}
