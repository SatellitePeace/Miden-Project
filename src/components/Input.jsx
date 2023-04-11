import React from "react";
import { TextField } from "@mui/material";

export default function Input({label}) {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      required
      size="large"
      style={{ background: "rgba(255, 255, 255, 0.1)", borderRadius: "4px" }}
      InputLabelProps={{
        style: { color: '#fff', fontSize:".8rem" }, 
      }}
      sx={{
        input: { color: "#fff" },
        "& .MuiOutlinedInput-root.Mui-focused": {
          "& > fieldset": { borderColor: "#fff" },
        },
      }}
    />
  );
}
