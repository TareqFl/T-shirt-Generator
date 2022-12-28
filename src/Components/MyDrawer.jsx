import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPage, setBack, setFront } from "../Actions";
import Images from "./Images";
import Numbers from "./Numbers";
import Texts from "./Texts";
import Uploads from "./Uploads";
const MyDrawer = ({ clicked }) => {
  const dispatch = useDispatch();
  const { Page } = useSelector((state) => state);
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
                transition: "all 0.35s",
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
