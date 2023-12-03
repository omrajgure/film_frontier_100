import React from "react";
import "./Movies.css";
import { Movie_card } from "./Movie_card";
import { Typography } from "@mui/material";
export const Filters_render = ({
  top_20_movies,
  top_20_series,
  romance_movies,
  action_movies,
  drama_movies,
  comedy_movies,
  crime_movies,
}) => {
  let first_ten;
  let next_ten;
  if (top_20_movies) {
    first_ten = top_20_movies.slice(0, 10);
    next_ten = top_20_movies.slice(10, 20);
  }
  let first_ten_series;
  let next_ten_series;
  if (top_20_series) {
    first_ten_series = top_20_series.slice(0, 10);
    next_ten_series = top_20_series.slice(10, 20);
  }
  let first_action;
  let next_action;
  if (action_movies) {
    if (action_movies.length > 15) {
      first_action = action_movies.slice(0, 15);
      next_action = action_movies.slice(15);
    }
  }

  let first_drama;
  let next_drama;
  let next_2_drama;
  let next_3_drama;
  let next_4_drama;
  if (drama_movies) {
    if (drama_movies.length > 100) {
      first_drama = drama_movies.slice(0, 20);
      next_drama = drama_movies.slice(20, 40);
      next_2_drama = drama_movies.slice(40, 60);
      next_3_drama = drama_movies.slice(60, 80);
      next_4_drama = drama_movies.slice(80);
    } else if (drama_movies.length < 80) {
      first_drama = drama_movies.slice(0, 20);
      next_drama = drama_movies.slice(20, 40);
      next_2_drama = drama_movies.slice(40);
    }
  }
  let first_comedy;
  let next_comedy;
  //   let next_2_comedy;
  if (comedy_movies) {
    if (comedy_movies.length < 15) {
      first_comedy = comedy_movies.slice(0, 6);
      next_comedy = comedy_movies.slice(6);
    } else {
      first_comedy = comedy_movies.slice(0, 20);
      next_comedy = comedy_movies.slice(20);
    }
  }
  let first_crime;
  let next_crime;
  if (crime_movies) {
    if (crime_movies.length <= 20) {
      first_crime = crime_movies.slice(0, 10);
      next_crime = crime_movies.slice(10);
    } else {
      first_crime = crime_movies.slice(0, 20);
      next_crime = crime_movies.slice(20);
    }
  }

  return (
    <div>
      {top_20_movies ? (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "1rem",
            }}
          >
            <div className="yellow_highlighter_div"></div>
            <Typography sx={{ color: "white", display: "contents" }}>
              Movies
            </Typography>
          </div>
          <Movie_card top_10_movies={first_ten} />
          <Movie_card top_10_movies={next_ten} />{" "}
        </div>
      ) : (
        ""
      )}

      {top_20_series ? (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "1rem",
            }}
          >
            <div className="yellow_highlighter_div"></div>
            <Typography sx={{ color: "white", display: "contents" }}>
              Series
            </Typography>
          </div>
          <Movie_card top_10_movies={first_ten_series} />
          <Movie_card top_10_movies={next_ten_series} />
        </div>
      ) : (
        ""
      )}
      {romance_movies ? (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "1rem",
            }}
          >
            <div className="yellow_highlighter_div"></div>
            <Typography sx={{ color: "white", display: "contents" }}>
              Romantic
            </Typography>
          </div>
          <Movie_card top_10_movies={romance_movies} />
        </div>
      ) : (
        ""
      )}
      {action_movies ? (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "1rem",
            }}
          >
            <div className="yellow_highlighter_div"></div>
            <Typography sx={{ color: "white", display: "contents" }}>
              Action
            </Typography>
          </div>
          (
          {next_action.length < 4 ? (
            <Movie_card top_10_movies={action_movies} />
          ) : (
            <Movie_card
              top_10_movies={first_action ? first_action : action_movies}
            />
          )}
          ) (
          {next_action.length < 4 ? (
            ""
          ) : (
            <Movie_card
              top_10_movies={next_action ? next_action : action_movies}
            />
          )}
          )
        </div>
      ) : (
        ""
      )}
      {drama_movies ? (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "1rem",
            }}
          >
            <div className="yellow_highlighter_div"></div>
            <Typography sx={{ color: "white", display: "contents" }}>
              Drama
            </Typography>
          </div>
          {drama_movies.length > 100 ? (
            <div>
              <Movie_card top_10_movies={next_2_drama} />
              <Movie_card top_10_movies={next_drama} />
              <Movie_card top_10_movies={first_drama} />
              <Movie_card top_10_movies={next_3_drama} />
              <Movie_card top_10_movies={next_4_drama} />
            </div>
          ) : (
            <div>
              <Movie_card top_10_movies={next_drama} />
              <Movie_card top_10_movies={next_2_drama} />
              <Movie_card top_10_movies={first_drama} />
            </div>
          )}
        </div>
      ) : (
        ""
      )}
      {comedy_movies ? (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "1rem",
            }}
          >
            <div className="yellow_highlighter_div"></div>
            <Typography sx={{ color: "white", display: "contents" }}>
              Comedy
            </Typography>
          </div>
          <Movie_card top_10_movies={first_comedy} />
          <Movie_card top_10_movies={next_comedy} />
        </div>
      ) : (
        ""
      )}
      {crime_movies ? (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "1rem",
            }}
          >
            <div className="yellow_highlighter_div"></div>
            <Typography sx={{ color: "white", display: "contents" }}>
              Crime
            </Typography>
          </div>
          <Movie_card top_10_movies={next_crime} />
          <Movie_card top_10_movies={first_crime} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
