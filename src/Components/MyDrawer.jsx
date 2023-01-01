import { Close, Delete } from "@mui/icons-material";
import { Box, Button, Fab, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setPage,
  setBack,
  setFront,
  deleteFrontStyledImage,
  deleteFrontStyledUpload,
} from "../Actions";
import Images from "./Images";
import Numbers from "./Numbers";
import Texts from "./Texts";
import Uploads from "./Uploads";
const MyDrawer = ({ clicked }) => {
  const dispatch = useDispatch();
  const { Page, FrontStyling } = useSelector((state) => state);
  const { image, upload } = FrontStyling;
  const { imageValue } = image;
  const { uploadValue } = upload;
  const mnuAr = ["Text", "Image", "Number", "Upload"];
  return (
    <Box
      sx={{
        width: "100%",
        height: clicked ? "25vh" : 0,
        position: "absolute",
        bottom: 0,
        zIndex: 5,
        backgroundColor: "#333",
        transition: "0.35s",
        display: { xs: "flex", sm: "none" },
        gap: 1,
        justifyContent: "center",
        overflowY: "scroll",
      }}
    >
      <Box flex={1} sx={{ backgroundColor: "#333" }}>
        {mnuAr.map((mn, idx) => {
          return (
            <Button
              key={idx}
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "transparent",
                color: "white",
                "&:hover": { backgroundColor: "#fff", color: "darkorange" },
                mt: 0.5,
                transition: "all 0.75s",
              }}
              onClick={() => {
                switch (mn) {
                  case "Text":
                    dispatch(setFront());
                    return dispatch(setPage("texts"));
                  case "Image":
                    dispatch(setFront());
                    return dispatch(setPage("images"));
                  case "Number":
                    dispatch(setBack());
                    return dispatch(setPage("numbers"));
                  case "Upload":
                    dispatch(setFront());
                    return dispatch(setPage("uploads"));
                  default:
                    break;
                }
              }}
            >
              <Typography fontWeight="bold">{mn}</Typography>
            </Button>
          );
        })}
        <Stack display="flex" direction="column">
          {imageValue && (
            <Box sx={{ position: "relative" }}>
              <IconButton
                size="small"
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  display: imageValue ? "inline-flex" : "none",
                }}
                onClick={() => dispatch(deleteFrontStyledImage())}
              >
                <Delete sx={{ color: "darkorange" }} />
              </IconButton>
              <img src={imageValue} alt="picked" width="100%" />
            </Box>
          )}
          {uploadValue && (
            <Box sx={{ position: "relative" }}>
              <IconButton
                size="small"
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  display: uploadValue ? "inline-flex" : "none",
                }}
                onClick={() => dispatch(deleteFrontStyledUpload())}
              >
                <Delete sx={{ color: "darkorange" }} />
              </IconButton>
              <img src={uploadValue} alt="picked" width="100%" />
            </Box>
          )}
        </Stack>
      </Box>
      <Box flex={2}>
        {Page === "texts" && <Texts />}
        {Page === "images" && <Images />}
        {Page === "numbers" && <Numbers />}
        {/* {Page === "emojis" && <Emojis />} */}
        {Page === "uploads" && <Uploads />}
      </Box>
    </Box>
  );
};

export default MyDrawer;
