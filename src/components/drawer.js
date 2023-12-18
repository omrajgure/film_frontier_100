import React from "react";
import { Stack, Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import { List } from "@mui/material";
import { IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

export const Drawer = ({
  is_drawer_visible,
  set_drawer_visiblity,
  is_movies_checked,
  set_is_movies_checked,
  is_series_checked,
  set_is_series_checked,
  is_Romance_checked,
  set_is_Romance_checked,
  is_Action_checked,
  set_is_Action_checked,
  is_Drama_checked,
  set_is_Drama_checked,
  is_Comedy_checked,
  set_is_Comedy_checked,
  is_Crime_checked,
  set_is_Crime_checked,
}) => {
  function handle_check() {
    set_is_movies_checked(false);
    set_is_series_checked(false);
    set_is_Romance_checked(false);
    set_is_Action_checked(false);
    set_is_Drama_checked(false);
    set_is_Comedy_checked(false);
    set_is_Crime_checked(false);
  }
  function movie_checkbox_clicked() {
    set_is_movies_checked((prevcheck) => !prevcheck);
  }
  function series_checkbox_clicked() {
    set_is_series_checked((prevcheck) => !prevcheck);
  }
  function romance_checkbox_clicked() {
    set_is_Romance_checked((prevcheck) => !prevcheck);
  }
  function action_checkbox_clicked() {
    set_is_Action_checked((prevcheck) => !prevcheck);
  }
  function drama_checkbox_clicked() {
    set_is_Drama_checked((prevcheck) => !prevcheck);
  }
  function comedy_checkbox_clicked() {
    set_is_Comedy_checked((prevcheck) => !prevcheck);
  }

  function crime_checkbox_clicked() {
    set_is_Crime_checked((prevcheck) => !prevcheck);
  }
  function handleclick() {
    set_drawer_visiblity(false);
  }

  useEffect(() => {
    if (is_drawer_visible) {
      // Set a short delay before changing visibility to ensure transition effect
      const timeoutId = setTimeout(() => {
        setTransform("translateX(0)");
      }, 10);
      return () => clearTimeout(timeoutId);
    } else {
      setTransform("translateX(-100%)");
    }
  }, [is_drawer_visible]);

  const [transform, setTransform] = useState(
    is_drawer_visible ? "translateX(0)" : "translateX(-100%)"
  );

  return (
    <Stack
      zIndex={"100"}
      position={"absolute"}
      top={"0"}
      left={"0"}
      sx={{
        backgroundColor: "#3D3D3D",
        color: "white",
        borderRight: "solid 2px lightgrey",
        borderBottom: "solid 2px lightgrey",
        transform: transform,
        transition: "transform 0.3s ease-in-out",
      }}
      width={"15rem"}
      height={"100vh"}
      display={is_drawer_visible ? "block" : "none"}
    >
      <Box
        display={"flex"}
        justifyContent={"flex-end"}
        height={"3rem"}
        mt={"1rem"}
      >
        <IconButton onClick={handleclick}>
          <CloseIcon
            sx={{
              color: "white",
              backgroundColor: "grey",
              borderRadius: "12px",
            }}
          />
        </IconButton>
      </Box>
      <Typography
        textAlign={"center"}
        mb={4}
        sx={{ backgroundColor: "lightgrey", color: "black" }}
      >
        Filters
      </Typography>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        padding={"0 5px"}
        mb={2}
      >
        <FormControlLabel
          value="start"
          control={
            <Checkbox
              checked={is_movies_checked}
              onChange={movie_checkbox_clicked}
              sx={{
                color: "gray",
                borderRadius: "0",
                padding: "0",
                margin: "0 1rem",
              }}
            />
          }
          label={
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <span>Movies</span>
              <span style={{ color: "white", marginLeft: "2px" }}>*</span>
            </div>
          }
          // label="Movies"
          labelPlacement="start"
        />
        <FormControlLabel
          sx={{ marginRight: "1rem" }}
          value="start"
          control={
            <Checkbox
              checked={is_series_checked}
              onChange={series_checkbox_clicked}
              sx={{
                color: "gray",
                borderRadius: "0",
                padding: "0",
                margin: "0 1rem",
              }}
            />
          }
          label="Series"
          labelPlacement="start"
        />
      </Box>

      <List sx={{ marginLeft: "0.5rem" }}>
        <FormGroup>
          <FormControlLabel
            sx={{ marginBottom: "1rem" }}
            control={
              <Checkbox
                checked={is_Romance_checked}
                onChange={romance_checkbox_clicked}
                sx={{
                  color: "gray",
                  borderRadius: "0",
                  padding: "0",
                  margin: "0 1rem",
                }}
                disabled={!is_movies_checked && !is_series_checked}
              />
            }
            label="Romance"
          />
          <FormControlLabel
            sx={{ marginBottom: "1rem" }}
            control={
              <Checkbox
                checked={is_Action_checked}
                onChange={action_checkbox_clicked}
                sx={{
                  color: "gray",
                  borderRadius: "0",
                  padding: "0",
                  margin: "0 1rem",
                }}
                disabled={!is_movies_checked && !is_series_checked}
              />
            }
            label="Action"
          />
          <FormControlLabel
            sx={{ marginBottom: "1rem" }}
            control={
              <Checkbox
                checked={is_Drama_checked}
                onChange={drama_checkbox_clicked}
                sx={{
                  color: "gray",
                  borderRadius: "0",
                  padding: "0",
                  margin: "0 1rem",
                }}
                disabled={!is_movies_checked && !is_series_checked}
              />
            }
            label="Drama"
          />
          <FormControlLabel
            sx={{ marginBottom: "1rem" }}
            control={
              <Checkbox
                checked={is_Comedy_checked}
                onChange={comedy_checkbox_clicked}
                sx={{
                  color: "gray",
                  borderRadius: "0",
                  padding: "0",
                  margin: "0 1rem",
                }}
                disabled={!is_movies_checked && !is_series_checked}
              />
            }
            label="Comedy"
          />

          <FormControlLabel
            sx={{ marginBottom: "1rem" }}
            control={
              <Checkbox
                checked={is_Crime_checked}
                onChange={crime_checkbox_clicked}
                sx={{
                  color: "gray",
                  borderRadius: "0",
                  padding: "0",
                  margin: "0 1rem",
                }}
                disabled={!is_movies_checked && !is_series_checked}
              />
            }
            label="Crime"
          />
        </FormGroup>
      </List>

      <Box display={"flex"} justifyContent={"center"}>
        <Button onClick={handle_check} sx={{ marginTop: "2rem" }}>
          Clear All
        </Button>
      </Box>
    </Stack>
  );
};
