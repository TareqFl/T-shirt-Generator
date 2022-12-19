import React from "react";
import { Box, Divider } from "@mui/material";

import front from "../Assets/front_large_extended.avif";
import rct from "../Assets/logo-og.png";

import Draggable from "react-draggable";
// import Font from "react-font";

// import r from "../Assets/R.jpg";

const shirt = "https://svgsilh.com/svg/34481.svg";

const RightSide = () => {
  const [mouse, setMouse] = React.useState(false);
  return (
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
          border: "1px solid transparent",
          "&:hover": { border: "1px solid gray" },
          overflow: "revert",
        }}
        onMouseEnter={() => setMouse(true)}
        onMouseLeave={() => setMouse(false)}
      >
        <Divider
          orientation="vertical"
          sx={{
            width: "2px",
            position: "absolute",
            backgroundColor: mouse ? "white" : "rgba(35,35,35,0.3)",
            left: "50%",
            zIndex: 0,
          }}
        />
        <Draggable bounds={"parent"}>
          <Box
            sx={{
              display: "inline-block",
              width: "50%",
              img: {
                width: "100%",
                height: "100%",
                display: "block",
              },
            }}
          >
            <img src={rct} alt={shirt} />
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
  );
};

export default RightSide;
