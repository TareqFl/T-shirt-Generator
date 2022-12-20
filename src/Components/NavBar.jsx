import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";

import Font from "react-font";
import { Box } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <AppBar
      position="absolute"
      sx={{
        overflow: "hidden",
        flexGrow: 1,
        backgroundColor: "#333333",
        "::before": {
          content: `""`,
          display: "inline-block",
          width: "100%",
          height: "8px",
          backgroundColor: "darkorange",
          transform: "rotate(-2deg)",
        },
        "::after": {
          content: `""`,
          display: "inline-block",
          width: "100%",
          height: "8px",
          backgroundColor: "darkorange",
          transform: "rotate(-2deg)",
        },
      }}
    >
      <Toolbar>
        <Box flex={1} sx={{ textAlign: "center" }}>
          <Font family="Rubik Vinyl" z>
            <h1>SHIRT SHACK</h1>
          </Font>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
