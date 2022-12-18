import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

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
        <Typography
          variant="h6"
          component="div"
          textAlign="center"
          flexGrow={1}
        >
          The T-Shack
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
