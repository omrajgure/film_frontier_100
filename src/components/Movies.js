import React from "react";
import { Typography, Box } from "@mui/material";
import { Movie_card } from "./Movie_card";

import "./Movies.css";
export const Movies = ({ top_20_movies, top_20_series }) => {
  let top10_mov = top_20_movies.slice(0, 10);
  let top10_ser = top_20_series.slice(0, 10);
  return (
    <div>
      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "1rem" }}
      >
        <div className="yellow_highlighter_div"></div>
        <Typography sx={{ color: "white", display: "contents" }}>
          Top 10 Movies
        </Typography>
      </div>
      <Movie_card top_10_movies={top10_mov} />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "1rem",
          marginTop: "5rem",
        }}
      >
        <div className="yellow_highlighter_div"></div>
        <Typography sx={{ color: "white", display: "contents" }}>
          Top 10 Series
        </Typography>
      </div>
      <Movie_card top_10_movies={top10_ser} />
    </div>
  );
};
