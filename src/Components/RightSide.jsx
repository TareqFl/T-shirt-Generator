import React from "react";
import { Box, Divider, Fab, Typography } from "@mui/material";

// import rct from "../Assets/logo-og.png";
// import Draggable from "react-draggable";
// import Font from "react-font";
// import r from "../Assets/R.jpg";

import { useDispatch, useSelector } from "react-redux";
import { deleteFrontStyledImage, deleteFrontStyledUpload } from "../Actions";
import Font from "react-font";
import Draggable from "react-draggable";
import { Close } from "@mui/icons-material";

const shirt = "https://svgsilh.com/svg/34481.svg";

const RightSide = () => {
  const [mouse, setMouse] = React.useState(false);
  const [hovering, setHovering] = React.useState({
    frontImage: false,
    frontUploads: false,
  });

  const dispatch = useDispatch();

  const { FrontStyling, Canvas, View, BackStyling } = useSelector(
    (state) => state
  );
  const { text, image, upload } = FrontStyling;
  const { value, fntSize, ltrSpace, rt, color, font } = text;
  const { imageValue, imageSize, rtn } = image;
  const { uploadValue, uploadSize, uploadRtn } = upload;
  const { front, back } = Canvas;
  const { backText, backNumber } = BackStyling;
  const { textValue } = backText;
  const { Number } = backNumber;
  const { frontImage, frontUploads } = hovering;
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
              onMouseEnter={() =>
                setHovering((prevValue) => {
                  return { ...prevValue, frontImage: true };
                })
              }
              onMouseLeave={() =>
                setHovering((prevValue) => {
                  return { ...prevValue, frontImage: false };
                })
              }
            >
              <Box
                sx={{
                  width: "100%",
                  position: "relative",
                  transform: `rotate(${rtn}deg)`,
                }}
              >
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    zIndex: 1,
                  }}
                ></Box>
                <Fab
                  size="small"
                  sx={{
                    position: "fixed",
                    top: -20,
                    right: -10,
                    display: frontImage ? "inline-flex" : "none",
                    zIndex: 3,
                  }}
                  onClick={() => dispatch(deleteFrontStyledImage())}
                >
                  <Close fontSize="small" />
                </Fab>
                <img src={imageValue} alt={shirt} width="100%" />
              </Box>
            </Box>
          </Draggable>
        )}

        {uploadValue && (
          <Draggable bounds={"parent"}>
            <Box
              sx={{
                display: View ? "inline-block" : "none",
                width: `${uploadSize}%`,

                img: {
                  width: "100%",
                  height: "100%",
                  display: "block",
                },
                "&:hover": { cursor: "pointer" },
              }}
              onMouseEnter={() =>
                setHovering((prevValue) => {
                  return { ...prevValue, frontUploads: true };
                })
              }
              onMouseLeave={() =>
                setHovering((prevValue) => {
                  return { ...prevValue, frontUploads: false };
                })
              }
            >
              <Box
                sx={{
                  width: "100%",
                  position: "relative",
                  transform: `rotate(${uploadRtn}deg)`,
                }}
              >
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                  }}
                ></Box>
                <Fab
                  size="small"
                  sx={{
                    position: "fixed",
                    top: -20,
                    right: -10,
                    display: frontUploads ? "inline-flex" : "none",
                    zIndex: 3,
                  }}
                  onClick={() => dispatch(deleteFrontStyledUpload())}
                >
                  <Close fontSize="small" />
                </Fab>
                <img src={uploadValue} alt={uploadValue} width="100%" />
              </Box>
            </Box>
          </Draggable>
        )}
        {/* End OF FRONT SIDE */}

        {/* BACK SIDE */}

        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          width="100%"
          alignItems="center"
        >
          <Font family={"Anton"}>
            <Typography
              sx={{
                fontFamily: "inherit",
                display: View ? "none" : "inline-block",
                margin: 0,
                color: "white",
                transition: "all 0.35s",
              }}
              variant="h1"
            >
              {textValue}
            </Typography>
          </Font>

          <Font family={"Anton"}>
            <Typography
              sx={{
                fontFamily: "inherit",
                display: View ? "none" : "inline-block",
                margin: 0,
                color: "white",
                letterSpacing: "4px",
                transition: "all 0.35s",
              }}
              variant="h1"
            >
              {Number}
            </Typography>
          </Font>
        </Box>

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
