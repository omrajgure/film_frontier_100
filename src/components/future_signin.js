import React from "react";
import { Button } from "@mui/material";
import "./Movies.css";
export const Future_signin = ({ isclicked, set_isclicked }) => {
  let dis;
  dis = isclicked ? "flex" : "none";
  return (
    <div>
      <div
        style={{
          height: "15rem",
          fontSize: "1.2rem",
          position: "absolute",
          top: "-3rem",
          left: "0",
          right: "0",
          backgroundColor: "#222222",
          color: "white",
          display: dis,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p>This feature will be coming soon...</p>
        <Button
          onClick={() => {
            set_isclicked(false);
          }}
        >
          Ok
        </Button>
      </div>
    </div>
  );
};
