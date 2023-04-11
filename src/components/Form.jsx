import * as React from "react";
import { Stack } from "@mui/system";
import { Typography, Grid } from "@mui/material";
import FormImageFrame from "../assets/images/formImage.svg";
import FormImage from "../assets/images/formImageCard.svg";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Input from "./Input";
import Glow from "../assets/icons/FormGlowIcon.svg";
import { PhoneNumberInput } from "./PhoneNumberInput";
import { styled } from "@mui/material/styles";
import "./Form.css";

const CustomButton = styled(Button)(({ theme }) => ({
  "&:hover": {
    background: "linear-gradient(92.12deg, #FF5C00  -30.61%, #F1C800 117.44%)",
  },
  backgroundColor: "#E0F4FF",
  color: "#0A0034",
}));

export default function BasicTextFields() {
  return (
    <FormControl fullWidth>
      <Grid container className="form">
        <Grid xs={12} md={6} item mb={4} >
          <Typography variant="h2" mb={4} className="formHeading">
            Get in Touch
          </Typography>
          <Typography
            variant="p"
            style={{
              fontSize: "1.17rem",
              fontWeight: 300,
              opacity: 0.8,
              lineHeight: "1.7rem",
              marginRight:"4rem"
            }}
          >
            Do you need a demo or more info; <br /> 
            drop a message we are always ready
            to help.
          </Typography>
        </Grid>
        <img
          src={Glow}
          alt="Glow"
          style={{ position: "absolute", top: 0, right: 0, opacity: 0.35 }}
        />
        <img
          src={FormImage}
          alt="pattern"
          style={{ position: "absolute", bottom: 0, left: 0, width: "30%" }}
        />
        <img
          src={FormImageFrame}
          alt="patterns"
          style={{ position: "absolute", bottom: 0, left: 0, width: "50%" }}
        />

        <Grid xs={12} md={6} item>
          <Stack spacing={3}>
            <Input label="BUSINESS NAME" />
            <Input label="FIRST NAME" />
            <Input label="LAST NAME" />
            <Input label="EMAIL" />
            <PhoneNumberInput />
            <CustomButton variant="contained" type="submit" size="large">
              Get in Touch
            </CustomButton>
          </Stack>
        </Grid>
      </Grid>
    </FormControl>
  );
}
