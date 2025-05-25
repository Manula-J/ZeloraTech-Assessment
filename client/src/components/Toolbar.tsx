import { Box } from "@mui/material";
import React from "react";

function Toolbar() {
  return (
    <Box
      sx={{
        maxWidth: "60px",
        flex: 1,
        backgroundColor: "#FEFEFE",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 2,
        gap: 2,
        justifyContent: "space-between",
      }}
    ></Box>
  );
}

export default Toolbar;
