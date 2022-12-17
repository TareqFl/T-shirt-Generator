import React from "react";
import { Box, CssBaseline, Divider, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import NavBar from "./Components/NavBar";
import { ReactComponent as Tshirt } from "./Assets/tshirt.svg";
import front from "./Assets/front_large_extended.avif";
import rct from "./Assets/logo-og.png";
import ts from "./Assets/logo-ts.png";
import Draggable from "react-draggable";
import Font, { Text } from "react-font";
import { Resizable } from "react-resizable";

const images = [
  "https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png?20210407134359",
  "https://reactjs.org/logo-og.png",
  "https://images.ctfassets.net/23aumh6u8s0i/4TsG2mTRrLFhlQ9G1m19sC/4c9f98d56165a0bdd71cbe7b9c2e2484/flutter",
  "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80",
  "data:image/png;base64,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",
];

const shirt = "https://svgsilh.com/svg/34481.svg";

const App = () => {
  const [dim, setDim] = React.useState({
    width: 200,
    height: 200,
  });

  const handleDimension = (event, { element, size, handle }) => {
    setDim({ width: size.width, height: size.height });
  };
  return (
    <Box>
      <CssBaseline />
      {/* <NavBar/> */}

      <Container>
        <Stack
          display="flex"
          direction="row"
          sx={{ marginTop: 10, height: "800px" }}
        >
          <Stack flex={1} display="flex" direction="column">
            <Font family="Viga">
              <p>Roboto :)</p>
            </Font>
          </Stack>
          <Box
            flex={2}
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: "40%",
                height: "60%",
                zIndex: 9,
                top: "16%",
                left: "30%",
                "&:hover": { border: "1px solid gray" },
              }}
            >
              <Divider
                variant="vertical"
                sx={{ width: "100%", background: "white" }}
              />
              <Draggable bounds={"parent"}>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    img: {
                      width: "100%",
                      height: "100%",
                      display: "inline-block",
                    },
                  }}
                >
                  <img src={rct} alt={shirt} />
                </Box>
              </Draggable>

              <Draggable bounds={"parent"}>
                <Box
                  display="inline-block"
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                      border: "1px solid gray",
                    },
                  }}
                >
                  <Font family="Viga">
                    <p style={{ color: "white" }}>AW YEAH TAREQ</p>
                  </Font>
                </Box>
              </Draggable>
            </Box>

            <img
              src={front}
              alt={shirt}
              width="100%"
              height="100%"
              style={{ position: "relative", zIndex: 1, display: "block" }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default App;
