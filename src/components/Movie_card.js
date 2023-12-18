import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Movies.css";
export const Movie_card = ({ top_10_movies }) => {
  return (
    <Box
      className="horizontal_scrolling"
      sx={{ flexGrow: 1, color: "white", overflowX: "auto" }}
      mt={3}
      ml={2}
    >
      <Grid container spacing={2} sx={{ display: "flex", flexWrap: "nowrap" }}>
        {top_10_movies.map((movie, index) => {
          return (
            <a
              target="blank"
              href={movie.imdb_link}
              style={{ textDecoration: "none", margin: "0.4rem", padding: "0" }}
            >
              <Grid item mb={2} position={"relative"} sx={{ width: "15rem" }}>
                <div
                  style={{
                    width: "2rem",
                    backgroundColor: "#BF932C",
                    position: "absolute",
                    top: "0.5rem",
                    left: "0",
                    color: "black",
                    opacity: "0.8",
                  }}
                >
                  <p style={{ padding: "5px", textAlign: "center" }}>
                    {movie.rank}
                  </p>
                </div>
                <Card
                  className="card_outer"
                  sx={{
                    minWidth: 200,
                    backgroundColor: "#292828",
                    color: "white",
                  }}
                >
                  <CardMedia
                    className="card_img"
                    component="img"
                    alt={movie.title}
                    height="140"
                    image={movie.image}
                    sx={{
                      height: "15rem",
                      width: "100%",
                      objectFit: "fill",
                    }}
                  />
                  <CardContent>
                    <Typography
                      minHeight={"5rem"}
                      maxHeight={"5rem"}
                      lineHeight={"1.7rem"}
                      overflow={"hidden"}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {movie.title}
                    </Typography>
                    <Typography
                      minHeight={"5rem"}
                      maxHeight={"5rem"}
                      variant="body2"
                      color="#888888"
                      overflow={"hidden"}
                    >
                      {movie.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ marginLeft: "0.5rem" }}>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            </a>
          );
        })}
      </Grid>
    </Box>
  );
};
