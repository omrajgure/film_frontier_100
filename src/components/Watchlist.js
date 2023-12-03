import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import { Future_signin } from "./future_signin";
import { useState } from "react";
export const Watchlist = () => {
  const [isclicked, set_isclicked] = useState(false);
  return (
    <Box mb={10} position={"relative"}>
      <Stack
        textAlign={"center"}
        sx={{ color: "white" }}
        alignItems="center"
        justifyContent={"center"}
        mt={15}
      >
        <AddToQueueIcon sx={{ fontSize: "3rem", marginBottom: "2rem" }} />
        <Typography>Sign in to access your watchlist</Typography>
        <Typography>
          Save shows and movies to keep track of what you need to watch.
        </Typography>
        <Button
          onClick={() => {
            set_isclicked(true);
          }}
          variant="contained"
          sx={{ marginTop: "1rem" }}
        >
          Sign In
        </Button>
      </Stack>
      <Future_signin isclicked={isclicked} set_isclicked={set_isclicked} />
    </Box>
  );
};
