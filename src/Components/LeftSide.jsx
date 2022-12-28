import {
  AddPhotoAlternate,
  FontDownload,
  Image,
  SixtyFps,
} from "@mui/icons-material";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Texts from "./Texts";
import Images from "./Images";
import Numbers from "./Numbers";
// import Emojis from "./Emojis";
import Uploads from "./Uploads";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setBack } from "../Actions";
import Menu from "./Menu";

// import t from "../Assets/tshirt.svg";
const LeftSide = () => {
  const dispatch = useDispatch();
  const { Page } = useSelector((state) => state);
  return (
    <Box
      sx={{
        display: "flex",
        height: { xs: "400px", sm: "800px" },
        flexGrow: { xs: 0, sm: 1 },
        gap: 2,
      }}
    >
      <Menu />

      {/* Display Buttons */}
      <Box
        flex={1}
        sx={{
          display: { xs: "none", sm: "block" },
          height: "100%",
          overflowY: "auto",
          "::-webkit-scrollbar": { width: "2px" },
          "::-webkit-scrollbar-thumb": {
            backgroundColor: "darkorange",
          },
          maxWidth: "250px",
        }}
      >
        {Page === null && (
          <Paper
            elevation={4}
            sx={{
              backgroundColor: "#333333",
              borderRadius: "12px",
              overflow: "hidden",
              mt: 1,
              p: 1,
              width: "250px",
              display: { xs: "none", sm: "block" },
            }}
          >
            <Typography
              variant="h6"
              textAlign="center"
              fontWeight="bold"
              color="#EEEEEE"
              sx={{
                "::after": {
                  content: `""`,
                  display: "block",
                  width: "100%",
                  height: "2px",
                  backgroundColor: "darkorange",
                },
              }}
            >
              Customise Your Shirt
            </Typography>
            <Grid container gap={4} mt={2} justifyContent="center">
              <Grid item>
                <Button
                  fullWidth
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    color: "white",
                    borderRadius: "12px",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "darkorange",
                      borderRadius: "12px",
                    },
                  }}
                  onClick={() => dispatch(setPage("texts"))}
                >
                  <FontDownload fontSize="large" />
                  <Typography fontWeight="bold" textAlign="center">
                    Text
                  </Typography>
                </Button>
              </Grid>

              <Grid item>
                <Button
                  fullWidth
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    color: "white",
                    borderRadius: "12px",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "darkorange",
                      borderRadius: "12px",
                    },
                  }}
                  onClick={() => dispatch(setPage("images"))}
                >
                  <Image fontSize="large" />
                  <Typography fontWeight="bold" textAlign="center">
                    Image
                  </Typography>
                </Button>
              </Grid>

              <Grid
                item
                sx={{
                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "darkorange",
                    borderRadius: "12px",
                  },
                }}
              >
                <Button
                  fullWidth
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    color: "white",
                    borderRadius: "12px",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "darkorange",
                      borderRadius: "12px",
                    },
                  }}
                  onClick={() => {
                    dispatch(setPage("numbers"));
                    dispatch(setBack());
                  }}
                >
                  <SixtyFps fontSize="large" />
                  <Typography fontWeight="bold" textAlign="center">
                    Number
                  </Typography>
                </Button>
              </Grid>

              <Grid item>
                <Button
                  fullWidth
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    color: "white",
                    borderRadius: "12px",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "darkorange",
                      borderRadius: "12px",
                    },
                  }}
                  onClick={() => dispatch(setPage("uploads"))}
                >
                  <AddPhotoAlternate fontSize="large" />
                  <Typography fontWeight="bold" textAlign="center">
                    upload
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Paper>
        )}
        {Page === "texts" && <Texts />}
        {Page === "images" && <Images />}
        {Page === "numbers" && <Numbers />}
        {/* {Page === "emojis" && <Emojis />} */}
        {Page === "uploads" && <Uploads />}
      </Box>
    </Box>
  );
};

export default LeftSide;
