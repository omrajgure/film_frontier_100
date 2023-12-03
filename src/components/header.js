import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import { Search_loader } from "./search_loader";
import { useState, useEffect } from "react";
import axios from "axios";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "32ch",
      "&:focus": {
        width: "60ch",
      },
    },
  },
}));

export const Header = ({
  is_drawer_visible,
  set_drawer_visiblity,
  movie_names,
  movie_ser_data,
}) => {
  const [search_inp, set_search_inp] = useState("");
  const [display_prop, set_display_prop] = useState("none");
  const [match_item, set_match_item] = useState([]);

  // console.log(movie_ser_data);

  useEffect(() => {
    if (search_inp === "") {
      set_display_prop("none");
    } else {
      set_display_prop("block");
    }
  }, [search_inp]);

  const search_mov_series = (search_inp) => {
    const matching_items = movie_ser_data.filter((movie) => {
      return movie.title.includes(search_inp);
    });

    set_match_item(matching_items);
  };

  function handleclick() {
    set_drawer_visiblity(true);
  }
  function handleinput(text) {
    set_search_inp(text);
    search_mov_series(text);
  }
  function handleblur(e) {
    const timer = setTimeout(() => {
      set_display_prop("none");
    }, 220);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleclick}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "#BF932C",
            }}
          >
            FilmFrontier 100
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onBlur={(e) => {
                handleblur(e);
              }}
              value={search_inp}
              onChange={(e) => {
                handleinput(e.target.value.toLowerCase());
              }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Search_loader
        display_prop={display_prop}
        set_display_prop={set_display_prop}
        matched_items={match_item}
      />
    </Box>
  );
};
