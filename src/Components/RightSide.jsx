import React from "react";
import { Box, Divider } from "@mui/material";

// import rct from "../Assets/logo-og.png";
// import Draggable from "react-draggable";
// import Font from "react-font";
// import r from "../Assets/R.jpg";

import { useSelector } from "react-redux";
import Font from "react-font";
import Draggable from "react-draggable";

const shirt = "https://svgsilh.com/svg/34481.svg";

const RightSide = () => {
  const [mouse, setMouse] = React.useState(false);
  const { FrontStyling, Canvas, View, BackStyling } = useSelector(
    (state) => state
  );
  const { text, image } = FrontStyling;
  const { value, fntSize, ltrSpace, rt, color, font } = text;
  const { imageValue, imageSize, rtn } = image;
  const { front, back } = Canvas;
  const { backText, backNumber } = BackStyling;
  const { textValue } = backText;
  const { Number } = backNumber;
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
            display: mouse ? "block" : "none",
            width: "2px",
            position: "absolute",
            backgroundColor: mouse ? "white" : "rgba(35,35,35,0.3)",
            left: "50%",
            zIndex: 0,
          }}
        />

        {/* FRONT SIDE */}
        <Draggable bounds="parent">
          <Box
            sx={{
              display: "inline-block",
              p: 0,
              "&:hover": { cursor: "pointer" },
            }}
          >
            <Font family={font}>
              <p
                style={{
                  display: View ? "block" : "none",
                  margin: 0,
                  color,
                  fontSize: fntSize !== 1 && fntSize + "rem",
                  letterSpacing: ltrSpace !== 1 && ltrSpace + "px",
                  transform: rt !== 0 && `rotate(${rt}deg)`,
                  transition: "all 0.35s",
                }}
              >
                {value}
              </p>
            </Font>
          </Box>
        </Draggable>
        {imageValue && (
          <Draggable bounds={"parent"}>
            <Box
              sx={{
                display: View ? "inline-block" : "none",
                width: `${imageSize}%`,

                img: {
                  width: "100%",
                  height: "100%",
                  display: "block",
                  transform: `rotate(${rtn}deg)`,
                },
                "&:hover": { cursor: "pointer" },
              }}
            >
              <img src={imageValue} alt={shirt} width="100%" />
            </Box>
          </Draggable>
        )}
        {/* End OF FRONT SIDE */}

        {/* BACK SIDE */}

        <Draggable bounds="parent">
          <Box
            sx={{
              display: View ? "none" : "inline-block",
              p: 0,
              "&:hover": { cursor: "pointer" },
            }}
          >
            <Font family={"Anton"}>
              <p
                style={{
                  display: View ? "none" : "block",
                  // margin: 0,
                  // color,
                  // fontSize: fntSize !== 1 && fntSize + "rem",
                  // letterSpacing: ltrSpace !== 1 && ltrSpace + "px",
                  // transform: rt !== 0 && `rotate(${rt}deg)`,
                  transition: "all 0.35s",
                }}
              >
                {textValue}
              </p>
            </Font>
          </Box>
        </Draggable>
        <Draggable bounds="parent">
          <Box
            sx={{
              display: View ? "none" : "inline-block",
              p: 0,
              "&:hover": { cursor: "pointer" },
            }}
          >
            <Font family={"Anton"}>
              <p
                style={{
                  display: View ? "none" : "block",
                  // margin: 0,
                  // color,
                  // fontSize: fntSize !== 1 && fntSize + "rem",
                  // letterSpacing: ltrSpace !== 1 && ltrSpace + "px",
                  // transform: rt !== 0 && `rotate(${rt}deg)`,
                  transition: "all 0.35s",
                }}
              >
                {Number}
              </p>
            </Font>
          </Box>
        </Draggable>
        {/* END OF BACK SIDE */}
      </Box>

      {/* FRONT AND BACK CANVAS */}
      <img
        src={front}
        alt={"Canvas"}
        width="100%"
        height="100%"
        style={{
          position: "relative",
          zIndex: 1,
          display: View ? "block" : "none",
        }}
      />
      <img
        src={back}
        alt={"Canvas"}
        width="100%"
        height="100%"
        style={{
          position: "relative",
          zIndex: 1,
          display: View ? "none" : "block",
        }}
      />
    </Box>
  );
};

export default RightSide;
