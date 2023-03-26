import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import { Typography, Grid } from "@mui/material";
import FormImageFrame from "../assets/images/formImage.svg";
import FormImage from "../assets/images/formImageCard.svg";
import Button from "@mui/material/Button";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import { useTheme } from '@mui/material/styles';

export default function BasicTextFields() {
  const theme =  useTheme()
  return (
      <Grid
        container
        p = {4}
        style={{
          background: "rgba(11, 156, 199, 0.36)",
          display: "flex",
          color: "white",
          marginTop: "5rem",
          borderRadius: "2px",
          position:"relative"
        }}
      >
        <Grid sm = {12} md = {6} item >
          <Typography variant="h3">Get in Touch</Typography>
          <Typography variant="p">
            Do you need a demo or more info; drop a message we are always ready
            to help.
          </Typography>
        </Grid>
        <img src={FormImage} alt="" style={{position:"absolute", bottom:0,left:0, width:"30%"}} />
        <img src={FormImageFrame} alt="" style={{position:"absolute", bottom:0,left:0,width:"50%"}} />
        <Grid md = {6} sm = {12} item>
        <FormControl fullWidth>
          <Stack  spacing={4}>
            <TextField
              id="outlined-basic"
              label="BUSINESS NAME"
              variant="outlined"
              required
              size="small"
              color = ""
              sx = {{ input : {color:theme.palette.common.white}}}
            />
            <TextField
              id="outlined-basic"
              label="FIRST NAME"
              variant="outlined"
              required
              size="small"
              sx = {{ input : {color:theme.palette.common.white}, }}
            />
            <TextField
              id="outlined-basic"
              label="LAST NAME"
              variant="outlined"
              required
              size="small"
                   sx = {{ input : {color:theme.palette.common.white}, }}
            />
            <TextField
              id="outlined-basic"
              label="EMAIL"
              type="email"
              required
              variant="outlined"
              size="small"
              sx = {{ input : {color:theme.palette.common.white}, }}
            />
            <TextField
              id="outlined-basic"
              label="PHONE NO"
              type="tel"
              required
              variant="outlined"
              size="small"
              fullWidth
              sx = {{ input : {color:theme.palette.common.white}, }}
            />
            <Button
              variant="contained"
              type="submit"
              size="meduim"
              style={{ backgroundColor: "#E0F4FF", color: "#0A0034" }}
            >
              Get in Touch
            </Button>
          </Stack>
        </FormControl>
        </Grid>
      </Grid>
  );
}
