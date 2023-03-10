import React from "react";
import { Box, CssBaseline, IconButton, Paper, Stack } from "@mui/material";
import { Container } from "@mui/system";
import NavBar from "./Components/NavBar";

import t from "./Assets/tshirt.svg";
import LeftSide from "./Components/LeftSide";
import RightSide from "./Components/RightSide";
import { useDispatch, useSelector } from "react-redux";
import {
  set_Black_Canvas,
  set_Red_Canvas,
  set_Green_Canvas,
  setFront,
  setBack,
} from "./Actions";
import SnackWindow from "./Components/Window";
import MyDrawer from "./Components/MyDrawer";
import { GitHub } from "@mui/icons-material";
const App = () => {
  const dispatch = useDispatch();
  const { Canvas } = useSelector((state) => state);
  const { front, back } = Canvas;

  const [clicked, setclicked] = React.useState(false);
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#333",
        position: "relative",
        pt: { xs: "50%", sm: "90%", lg: 25 },
        overflowY: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CssBaseline />
      {/* My Github */}
      <IconButton
        size="large"
        sx={{
          position: "absolute",
          bottom: 0,
          right: 25,
          display: { xs: "inline-flex", sm: "none", md: "inline-flex" },
        }}
        onClick={() =>
          window.open("https://github.com/TareqFl/T-shirt-Generator")
        }
      >
        <GitHub fontSize="large" sx={{ color: "darkorange" }} />
      </IconButton>
      <IconButton
        size="large"
        sx={{
          position: "absolute",
          top: "20%",
          left: 25,
          display: { xs: "none", sm: "inline-flex", md: "none" },
        }}
        onClick={() =>
          window.open("https://github.com/TareqFl/T-shirt-Generator")
        }
      >
        <GitHub fontSize="large" sx={{ color: "darkorange" }} />
      </IconButton>
      <NavBar />
      <Box sx={{ position: "absolute", bottom: 100, left: 0 }}>
        <SnackWindow />
      </Box>
      {/* animated  mobile button */}
      <IconButton
        size="large"
        sx={{
          position: "absolute",
          top: "15%",
          left: "10%",
          overflowX: "hidden",
          p: 2,
        }}
        onClick={() => setclicked(!clicked)}
      >
        <Box
          sx={{
            display: { xs: "inline-flex", sm: "none" },
            position: "absolute",
            width: "24px",
            height: "2px",
            backgroundColor: "darkorange",
            ml: clicked ? -8 : 0,
            transition: "0.35s",
            "&::before": {
              content: `""`,
              position: "absolute",
              width: "100%",
              height: "2px",
              backgroundColor: "darkorange",
              top: clicked ? 0 : -6,
              left: clicked ? 32 : 0,
              transform: clicked ? "rotate(45deg)" : "rotate(0deg)",
              transition: "0.35s",
            },
            "&::after": {
              content: `""`,
              position: "absolute",
              width: "100%",
              height: "2px",
              backgroundColor: "darkorange",
              bottom: clicked ? 0 : -6,
              left: clicked ? 32 : 0,
              transform: clicked ? "rotate(-45deg)" : "rotate(0deg)",
              transition: "0.35s",
            },
          }}
        ></Box>
      </IconButton>
      {/* End of Animated Mobile Button */}
      {/* Mobile Drawer */}
      <MyDrawer clicked={clicked} />
      {/* End Of Mobile Drawer */}
      <Container sx={{ height: { xs: "400px", sm: "800px" } }}>
        <Stack
          display="flex"
          direction="row"
          sx={{
            marginTop: 0,
            position: "relative",
            height: "100%",
            zIndex: 1,
          }}
          spacing={2}
        >
          <LeftSide />
          <RightSide />
        </Stack>
      </Container>
      <Paper
        elevation={12}
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
          p: 0.5,
        }}
      >
        <IconButton
          size="small"
          sx={{
            backgroundColor: "#333333",
            "&:hover": { backgroundColor: "#333333", transform: "scale(1.3)" },
            transition: "all 0.35s",
          }}
          onClick={() => dispatch(set_Black_Canvas())}
        >
          <img src={t} alt="logo" width="100%" />
        </IconButton>
        <IconButton
          size="small"
          sx={{
            backgroundColor: "#58664f",
            "&:hover": { backgroundColor: "#58664f", transform: "scale(1.3)" },
            transition: "all 0.35s",
          }}
          onClick={() => dispatch(set_Green_Canvas())}
        >
          <img src={t} alt="logo" width="100%" />
        </IconButton>
        <IconButton
          size="small"
          sx={{
            backgroundColor: "#b20b29",
            "&:hover": { backgroundColor: "#b20b29", transform: "scale(1.3)" },
            transition: "all 0.35s",
          }}
          onClick={() => dispatch(set_Red_Canvas())}
        >
          <img src={t} alt="logo" width="100%" />
        </IconButton>
      </Paper>
      <Paper
        elevation={12}
        sx={{
          backgroundColor: "darkorange",
          position: "absolute",
          top: { xs: "15%", sm: "15%" },
          right: { xs: "30%", sm: "15%" },
          width: "55px",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          borderRadius: "24px",
          p: 0.5,
          zIndex: 10,
        }}
      >
        <IconButton
          size="small"
          sx={{
            "&:hover": { transform: "scale(1.3)" },
            transition: "all 0.35s",
          }}
          onClick={() => dispatch(setFront())}
        >
          <img src={front} alt="logo" width="100%" />
        </IconButton>
      </Paper>
      <Paper
        elevation={12}
        sx={{
          backgroundColor: "darkorange",
          position: "absolute",
          top: { xs: "25%", sm: "25%" },
          right: { xs: "30%", sm: "15%" },
          width: "55px",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          borderRadius: "24px",
          p: 0.5,
          zIndex: 10,
        }}
      >
        <IconButton
          size="small"
          sx={{
            "&:hover": { transform: "scale(1.3)" },
            transition: "all 0.35s",
          }}
          onClick={() => dispatch(setBack())}
        >
          <img src={back} alt="logo" width="100%" />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default App;
