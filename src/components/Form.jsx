import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import { Typography, Grid } from "@mui/material";
import FormImageFrame from "../assets/images/formImage.svg";
import FormImage from "../assets/images/formImageCard.svg";
import Button from "@mui/material/Button";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import { useTheme } from "@mui/material/styles";
import Input from "./Input";
import Glow from "../assets/icons/FormGlowIcon.svg";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { styled } from "@mui/material/styles";


const CustomButton = styled(Button)(({ theme }) => ({
  "&:hover": {
    background:
      "linear-gradient(92.12deg, #FF5C00  -30.61%, #F1C800 117.44%)",
  },
  backgroundColor: "#E0F4FF",
  color: "#0A0034"
}));

export default function BasicTextFields() {
  const [value, setValue] = useState();

  const theme = useTheme();

  return (
    <Grid
      container
      p={10}
      style={{
        backgroundColor: "rgba(11, 156, 199, 0.36)",
        display: "flex",
        color: "white",
        marginTop: "5rem",
        borderRadius: "2px",
        position: "relative",
      }}
    >
      <Grid sm={12} md={6} item>
        <Typography variant="h2" mb={4}>
          Get in Touch
        </Typography>
        <Typography variant="p">
          Do you need a demo or more info; <br /> drop a message we are always
          ready to help.
        </Typography>
      </Grid>
      <img
        src={Glow}
        alt="Glow"
        style={{ position: "absolute", top: 0, right: 0, opacity: 0.35 }}
      />
      <img
        src={FormImage}
        alt=""
        style={{ position: "absolute", bottom: 0, left: 0, width: "30%" }}
      />
      <img
        src={FormImageFrame}
        alt=""
        style={{ position: "absolute", bottom: 0, left: 0, width: "50%" }}
      />
      <Grid md={6} sm={12} item>
        <FormControl fullWidth>
          <Stack spacing={4}>
            <Input label="BUSINESS NAME" />
            <Input label="FIRST NAME" />
            <Input label="LAST NAME" />
            <Input label="EMAIL" />
            <Input label="PHONE NO" />
            <PhoneInput
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "4px",
                color: "white",
                height: "3.5rem",
              }}
              placeholder="PHONE NO"
              value={value}
              onChange={setValue}
            />
            <CustomButton variant="contained" type="submit" size="large" >
              Get in Touch
            </CustomButton>
          </Stack>
        </FormControl>
      </Grid>
    </Grid>
  );
}
