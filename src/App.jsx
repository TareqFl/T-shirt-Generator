import React from "react";
import { Box, CssBaseline, IconButton, Paper, Stack } from "@mui/material";
import { Container } from "@mui/system";
import NavBar from "./Components/NavBar";

// import Draggable from "react-draggable";
// import Font, { Text } from "react-font";
// import { Resizable } from "react-resizable";

import t from "./Assets/tshirt.svg";
import LeftSide from "./Components/LeftSide";
import RightSide from "./Components/RightSide";

const App = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        height: "100%",
        position: "relative",
        pt: 20.1,
      }}
    >
      <CssBaseline />
      <NavBar />

      <Container>
        <Stack
          display="flex"
          direction="row"
          sx={{ marginTop: 0, height: "800px" }}
          spacing={2}
        >
          <LeftSide />
          <RightSide />
        </Stack>
      </Container>
      <Paper
        elevation={8}
        sx={{
          backgroundColor: "darkorange",
          position: "absolute",
          top: "15%",
          right: "5%",
          width: "55px",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          borderRadius: "24px",
        }}
      >
        <IconButton
          size="small"
          sx={{
            backgroundColor: "#333333",
            "&:hover": { backgroundColor: "#333333", transform: "scale(1.3)" },
          }}
        >
          <img src={t} alt="logo" width="100%" />
        </IconButton>
        <IconButton
          size="small"
          sx={{
            backgroundColor: "#58664f",
            "&:hover": { backgroundColor: "#58664f", transform: "scale(1.3)" },
          }}
        >
          <img src={t} alt="logo" width="100%" />
        </IconButton>
        <IconButton
          size="small"
          sx={{
            backgroundColor: "#b20b29",
            "&:hover": { backgroundColor: "#b20b29", transform: "scale(1.3)" },
          }}
        >
          <img src={t} alt="logo" width="100%" />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default App;
