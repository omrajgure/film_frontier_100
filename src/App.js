import React from "react";
import { Header } from "./components/header";
import { ImgSlider } from "./components/slider";
import { Movies } from "./components/Movies";
import axios from "axios";
import { useState, useEffect } from "react";
import { Drawer } from "./components/drawer";
import { Watchlist } from "./components/Watchlist";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Typography } from "@mui/material";
import { Filters_render } from "./components/filters_render";
import { FetchingDetails } from "./components/fetchingDetails";
import "./components/Movies.css";

const App = () => {
  const [isfetching, setfetching] = useState(false);
  const [movie_names, set_movie_names] = useState([]);
  const [movie_ser_data, set_movie_ser_data] = useState([]);
  //////
  const [is_drawer_visible, set_drawer_visiblity] = useState(false);
  const [top_5_movies, set_top_5_movies] = useState([]);
  const [top_20_movies, settop_20_movies] = useState([]);
  const [top_20_series, settop_20_series] = useState([]);
  //////
  const [top_romance_movies, set_top_romance_movies] = useState([]);
  const [top_romance_series, set_top_romance_series] = useState([]);
  const [top_action_movies, set_top_action_movies] = useState([]);
  const [top_action_series, set_top_action_series] = useState([]);
  const [top_drama_movies, set_top_drama_movies] = useState([]);
  const [top_drama_series, set_top_drama_series] = useState([]);
  const [top_comedy_movies, set_top_comedy_movies] = useState([]);
  const [top_comedy_series, set_top_comedy_series] = useState([]);
  const [top_crime_movies, set_top_crime_movies] = useState([]);
  const [top_crime_series, set_top_crime_series] = useState([]);

  //////
  const [top_romance_movies_and_series, set_top_romance_movies_and_series] =
    useState([]);
  const [top_action_movies_and_series, set_top_action_movies_and_series] =
    useState([]);
  const [top_drama_movies_and_series, set_top_drama_movies_and_series] =
    useState([]);
  const [top_comedy_movies_and_series, set_top_comedy_movies_and_series] =
    useState([]);

  const [top_crime_movies_and_series, set_top_crime_movies_and_series] =
    useState([]);

  //////
  const [is_movies_checked, set_is_movies_checked] = useState(false);
  const [is_series_checked, set_is_series_checked] = useState(false);
  const [is_Romance_checked, set_is_Romance_checked] = useState(false);
  const [is_Action_checked, set_is_Action_checked] = useState(false);
  const [is_Drama_checked, set_is_Drama_checked] = useState(false);
  const [is_Comedy_checked, set_is_Comedy_checked] = useState(false);
  const [is_Crime_checked, set_is_Crime_checked] = useState(false);
  //////
  const options_movies = {
    method: "GET",
    url: "https://imdb-top-100-movies.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": "1aae5f82a7mshb72abb994999e43p1ec0a5jsn443fb3cdb3c9",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };
  const option_series = {
    method: "GET",
    url: "https://imdb-top-100-movies.p.rapidapi.com/series/",
    headers: {
      "X-RapidAPI-Key": "1aae5f82a7mshb72abb994999e43p1ec0a5jsn443fb3cdb3c9",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  useEffect(() => {
    performfetch();
  }, []);

  async function performfetch() {
    try {
      setfetching(true);
      const res = await axios.get(
        "https://imdb-top-100-movies.p.rapidapi.com",
        options_movies
      );
      const series_res = await axios.get(
        "https://imdb-top-100-movies.p.rapidapi.com/series",
        option_series
      );

      //// all movie and series data
      // const mov_ser_data = [...res.data, ...series_res.data];
      const mov_data = res.data.map((movie) => {
        return { title: movie.title.toLowerCase(), link: movie.imdb_link };
      });
      const ser_data = series_res.data.map((movie) => {
        return { title: movie.title.toLowerCase(), link: movie.imdb_link };
      });
      const mov_ser_data = [...mov_data, ...ser_data];
      set_movie_ser_data(mov_ser_data);
      /// only names
      const movie_names = res.data.map((movie) => {
        return movie.title.toLowerCase();
      });
      const series_names = series_res.data.map((movie) => {
        return movie.title.toLowerCase();
      });
      const mov_ser_names = [...movie_names, ...series_names];
      set_movie_names(mov_ser_names);
      const mov_ser_all = [...res.data, ...series_res.data];
      //// romance
      const romance_movies_series = mov_ser_all.filter((movie, index) => {
        if (movie.genre.includes("Romance")) {
          return movie;
        }
      });

      const romance_movies = res.data.filter((movie) => {
        if (movie.genre.includes("Romance")) {
          return movie;
        }
      });
      const romance_series = series_res.data.filter((movie) => {
        if (movie.genre.includes("Romance")) {
          return movie;
        }
      });
      set_top_romance_movies_and_series(romance_movies_series);
      set_top_romance_movies(romance_movies);
      set_top_romance_series(romance_series);

      /// Action
      const action_mov_ser = mov_ser_all.filter((movie) => {
        if (movie.genre.includes("Action")) {
          return movie;
        }
      });
      const action_movies = res.data.filter((movie) => {
        if (movie.genre.includes("Action")) {
          return movie;
        }
      });
      const action_series = series_res.data.filter((movie) => {
        if (movie.genre.includes("Action")) {
          return movie;
        }
      });

      set_top_action_movies_and_series(action_mov_ser);
      set_top_action_movies(action_movies);
      set_top_action_series(action_series);

      /// Drama

      const drama_mov_ser = mov_ser_all.filter((movie) => {
        return movie.genre.includes("Drama");
      });
      const drama_mov = res.data.filter((movie) => {
        return movie.genre.includes("Drama");
      });
      const drama_ser = series_res.data.filter((movie) => {
        return movie.genre.includes("Drama");
      });
      set_top_drama_movies_and_series(drama_mov_ser);
      set_top_drama_movies(drama_mov);
      set_top_drama_series(drama_ser);

      /// Comedy
      const comedy_mov_ser = mov_ser_all.filter((movie) => {
        return movie.genre.includes("Comedy");
      });
      const comedy_movies = res.data.filter((movie) => {
        return movie.genre.includes("Comedy");
      });
      const comedy_series = series_res.data.filter((movie) => {
        return movie.genre.includes("Comedy");
      });

      set_top_comedy_movies_and_series(comedy_mov_ser);
      set_top_comedy_movies(comedy_movies);
      set_top_comedy_series(comedy_series);

      /// Crime
      const crime_mov_ser = mov_ser_all.filter((movie) => {
        return movie.genre.includes("Crime");
      });
      const crime_movies = res.data.filter((movie) => {
        return movie.genre.includes("Crime");
      });
      const crime_series = series_res.data.filter((movie) => {
        return movie.genre.includes("Crime");
      });

      set_top_crime_movies_and_series(crime_mov_ser);
      set_top_crime_movies(crime_movies);
      set_top_crime_series(crime_series);

      // if (res.data[0].genre.some((genre) => ["Drama", "Crime"].includes(genre))) {
      //   console.log("Drama or Crime spotted");
      // } else {
      //   console.log("something not spotted");
      // }
      // console.log(res.data[0].genre);
      // or  res.data.filter((movies)=>{return movies.rank<=20})
      const top_5 = res.data.slice(0, 5);
      const top20 = res.data.slice(0, 20);
      const top20_series = series_res.data.slice(0, 20);

      set_top_5_movies(top_5);
      settop_20_movies(top20);
      settop_20_series(top20_series);
    } catch (e) {
      console.log("API error");
    } finally {
      setfetching(false);
    }
  }
  ///////////////   object prop   ////////////////

  let filtersProps = {};

  if (is_Romance_checked) {
    if (is_movies_checked && is_series_checked) {
      filtersProps.romance_movies = top_romance_movies_and_series;
    } else if (is_movies_checked) {
      filtersProps.romance_movies = top_romance_movies;
    } else {
      filtersProps.romance_movies = top_romance_series;
    }
  }

  if (is_Action_checked) {
    if (is_movies_checked && is_series_checked) {
      filtersProps.action_movies = top_action_movies_and_series;
    } else if (is_movies_checked) {
      filtersProps.action_movies = top_action_movies;
    } else {
      filtersProps.action_movies = top_action_series;
    }
  }

  if (is_Drama_checked) {
    if (is_movies_checked && is_series_checked) {
      filtersProps.drama_movies = top_drama_movies_and_series;
    } else if (is_movies_checked) {
      filtersProps.drama_movies = top_drama_movies;
    } else {
      filtersProps.drama_movies = top_drama_series;
    }
  }

  if (is_Comedy_checked) {
    if (is_movies_checked && is_series_checked) {
      filtersProps.comedy_movies = top_comedy_movies_and_series;
    } else if (is_movies_checked) {
      filtersProps.comedy_movies = top_comedy_movies;
    } else {
      filtersProps.comedy_movies = top_comedy_series;
    }
  }

  if (is_Crime_checked) {
    if (is_movies_checked && is_series_checked) {
      filtersProps.crime_movies = top_crime_movies_and_series;
    } else if (is_movies_checked) {
      filtersProps.crime_movies = top_crime_movies;
    } else {
      filtersProps.crime_movies = top_crime_series;
    }
  }

  if (
    is_movies_checked &&
    !is_Action_checked &&
    !is_Comedy_checked &&
    !is_Crime_checked &&
    !is_Drama_checked &&
    !is_Romance_checked
  ) {
    filtersProps.top_20_movies = top_20_movies;
  }

  if (
    is_series_checked &&
    !is_Action_checked &&
    !is_Comedy_checked &&
    !is_Crime_checked &&
    !is_Drama_checked &&
    !is_Romance_checked
  ) {
    filtersProps.top_20_series = top_20_series;
  }
  let filters_content;

  if (is_movies_checked || is_series_checked) {
    filters_content = <Filters_render {...filtersProps} />;
  }

  ////////////////////////////

  let watchlist_content = (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "1rem",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <Typography sx={{ color: "#BF932C", display: "contents" }}>
          What to watch ?
        </Typography>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "1rem" }}
      >
        <div className="yellow_highlighter_div"></div>
        <Typography sx={{ color: "white", display: "contents" }}>
          From your Watchlist <ChevronRightIcon />
        </Typography>
      </div>
      <Watchlist />
    </div>
  );

  //   let filters_content;

  //   if (is_movies_checked) {
  //     if (
  //       is_Romance_checked &&
  //       is_Action_checked &&
  //       is_Drama_checked &&
  //       is_Comedy_checked &&
  //       is_Crime_checked
  //     ) {
  //       filters_content = (
  //         <Filters_render
  //           romance_movies={top_romance_movies}
  //           action_movies={top_action_movies}
  //           drama_movies={top_drama_movies}
  //           comedy_movies={top_comedy_movies}
  //           crime_movies={top_crime_movies}
  //         />
  //       );
  //     }

  //     /////////
  //     else if (is_Romance_checked) {
  //       filters_content = <Filters_render romance_movies={top_romance_movies} />;
  //     } else if (is_Action_checked) {
  //       filters_content = <Filters_render action_movies={top_action_movies} />;
  //     } else if (is_Drama_checked) {
  //       filters_content = <Filters_render drama_movies={top_drama_movies} />;
  //     } else if (is_Comedy_checked) {
  //       filters_content = <Filters_render comedy_movies={top_comedy_movies} />;
  //     } else if (is_Crime_checked) {
  //       filters_content = <Filters_render crime_movies={top_crime_movies} />;
  //     } else {
  //       filters_content = <Filters_render top_20_movies={top_20_movies} />;
  //     }
  //   }
  //   if (is_series_checked) {
  //     if (is_Romance_checked) {
  //       filters_content = <Filters_render romance_movies={top_romance_series} />;
  //     } else if (is_Action_checked) {
  //       filters_content = <Filters_render action_movies={top_action_series} />;
  //     } else if (is_Drama_checked) {
  //       filters_content = <Filters_render drama_movies={top_drama_series} />;
  //     } else if (is_Comedy_checked) {
  //       filters_content = <Filters_render comedy_movies={top_comedy_series} />;
  //     } else if (is_Crime_checked) {
  //       filters_content = <Filters_render crime_movies={top_crime_series} />;
  //     } else {
  //       filters_content = <Filters_render top_20_series={top_20_series} />;
  //     }
  //   }
  //   if (is_series_checked && is_movies_checked) {
  //     if (is_Romance_checked) {
  //       //   console.log(top_romance_movies_and_series);
  //       filters_content = (
  //         <Filters_render romance_movies={top_romance_movies_and_series} />
  //       );
  //     } else if (is_Action_checked) {
  //       filters_content = (
  //         <Filters_render action_movies={top_action_movies_and_series} />
  //       );
  //     } else if (is_Drama_checked) {
  //       filters_content = (
  //         <Filters_render drama_movies={top_drama_movies_and_series} />
  //       );
  //     } else if (is_Comedy_checked) {
  //       filters_content = (
  //         <Filters_render comedy_movies={top_comedy_movies_and_series} />
  //       );
  //     } else if (is_Crime_checked) {
  //       filters_content = (
  //         <Filters_render crime_movies={top_crime_movies_and_series} />
  //       );
  //     } else {
  //       filters_content = (
  //         <Filters_render
  //           top_20_movies={top_20_movies}
  //           top_20_series={top_20_series}
  //         />
  //       );
  //     }
  //   }

  return (
    <div>
      <Header
        is_drawer_visible={is_drawer_visible}
        set_drawer_visiblity={set_drawer_visiblity}
        movie_names={movie_names}
        movie_ser_data={movie_ser_data}
      />
      <Drawer
        is_drawer_visible={is_drawer_visible}
        set_drawer_visiblity={set_drawer_visiblity}
        is_movies_checked={is_movies_checked}
        set_is_movies_checked={set_is_movies_checked}
        is_series_checked={is_series_checked}
        set_is_series_checked={set_is_series_checked}
        is_Romance_checked={is_Romance_checked}
        set_is_Romance_checked={set_is_Romance_checked}
        is_Action_checked={is_Action_checked}
        set_is_Action_checked={set_is_Action_checked}
        is_Drama_checked={is_Drama_checked}
        set_is_Drama_checked={set_is_Drama_checked}
        is_Comedy_checked={is_Comedy_checked}
        set_is_Comedy_checked={set_is_Comedy_checked}
        is_Crime_checked={is_Crime_checked}
        set_is_Crime_checked={set_is_Crime_checked}
      />
      {isfetching ? (
        <FetchingDetails />
      ) : filters_content ? (
        filters_content
      ) : (
        <div>
          <ImgSlider top_5_movies={top_5_movies} />
          <Movies
            top_20_movies={top_20_movies}
            top_20_series={top_20_series}
          />{" "}
        </div>
      )}

      {watchlist_content}
    </div>
  );
};

export default App;
