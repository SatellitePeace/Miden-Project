import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export function PhoneNumberInput() {
  const [value, setValue] = useState();

  return (
    <PhoneInput
      country={"ng"}
      placeholder="PHONE NO"
      containerStyle={{
        height: "3.2rem",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "4px",
      }}
      inputStyle={{
        background: "transparent",
        color: "#fff",
        width: "100%",
        height: "100%",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      dropdownStyle={{
        background: "#0A0034",
        color: "orange",
        "&:hover": {
          background: "red",
        },
      }}
      buttonStyle={{
        background: "#0A0034",
        border: "none",
        color: "yellow",
      }}
      searchStyle={{
        width: "3rem",
        background: "yellow",
        color: "green",
        border: "2px solid red",
        fontSize: "3rem",
      }}
      value={value}
      onChange={setValue}
      required
      className="pen"
    />
  );
}
