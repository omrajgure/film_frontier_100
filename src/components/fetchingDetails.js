import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
export const FetchingDetails = () => {
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "30rem",
          color: "white",
          alignItems: "center",
        }}
      >
        <Box>Fetching details...</Box>
      </Box>
    </div>
  );
};
