import {
  AddPhotoAlternate,
  EmojiEmotionsOutlined,
  FontDownload,
  Image,
  KeyboardArrowRight,
  SixtyFps,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import Texts from "./Texts";
import Images from "./Images";
import Numbers from "./Numbers";
import Emojis from "./Emojis";
import Uploads from "./Uploads";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setBack, setFront } from "../Actions";

// import t from "../Assets/tshirt.svg";
const LeftSide = () => {
  const [sdbr, setSdbr] = React.useState(false);

  const dispatch = useDispatch();
  const { Page } = useSelector((state) => state);
  return (
    <Box flex={1} sx={{ display: "flex", height: "800px" }}>
      <Paper
        elevation={8}
        sx={{
          backgroundColor: "#333333",
          width: "15%",
          height: "400px",
          overflow: "hidden",
          gap: sdbr ? 2 : 0,
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderTop: sdbr ? "6px solid darkorange" : "200px solid darkOrange",
          borderBottom: sdbr ? "6px solid darkorange" : "200px solid #333",
          position: "relative",
          transition: "all 0.5s",
        }}
      >
        <Typography fontWeight="bold" textAlign="center" color="darkorange">
          Menu
        </Typography>
        <Button
          size="small"
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            "&:hover": { backgroundColor: "#fff", color: "darkorange" },
            transition: "all 0.35s",
          }}
          onClick={() => {
            dispatch(setFront());
            dispatch(setPage("texts"));
          }}
        >
          <FontDownload
            fontSize="large"
            sx={{
              borderRadius: "24px",
              transition: "all 0.35s",
            }}
            onClick={() => {
              dispatch(setFront());
              dispatch(setPage("texts"));
            }}
          />
          <Typography fontSize="0.5rem" fontWeight="bold">
            Text
          </Typography>
        </Button>
        <Button
          size="small"
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            "&:hover": { backgroundColor: "#fff", color: "darkorange" },
            transition: "all 0.35s",
          }}
          onClick={() => {
            dispatch(setPage("images"));
            dispatch(setFront());
          }}
        >
          <Image
            fontSize="large"
            sx={{
              borderRadius: "24px",
              transition: "all 0.35s",
            }}
            onClick={() => {
              dispatch(setPage("images"));
              dispatch(setFront());
            }}
          />
          <Typography fontSize="0.5rem" fontWeight="bold">
            Image
          </Typography>
        </Button>
        <Button
          size="small"
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            "&:hover": { backgroundColor: "#fff", color: "darkorange" },
            transition: "all 0.35s",
          }}
          onClick={() => {
            dispatch(setPage("numbers"));
            dispatch(setBack());
          }}
        >
          <SixtyFps
            fontSize="large"
            sx={{
              borderRadius: "24px",
              transition: "all 0.35s",
            }}
            onClick={() => {
              dispatch(setPage("numbers"));
              dispatch(setBack());
            }}
          />
          <Typography fontSize="0.5rem" fontWeight="bold">
            NUMBER
          </Typography>
        </Button>
        {/* <Button
          size="small"
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            "&:hover": { backgroundColor: "#fff", color: "darkorange" },
            transition: "all 0.35s",
          }}
          onClick={() => dispatch(setPage("emojis"))}
        >
          <EmojiEmotionsOutlined
            fontSize="large"
            sx={{
              borderRadius: "24px",
              transition: "all 0.35s",
            }}
            onClick={() => dispatch(setBack())}
          />
          <Typography fontSize="0.5rem" fontWeight="bold">
            Emoji
          </Typography>
        </Button> */}
        <Button
          size="small"
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            "&:hover": { backgroundColor: "#fff", color: "darkorange" },
            transition: "all 0.35s",
          }}
          onClick={() => dispatch(setPage("uploads"))}
        >
          <AddPhotoAlternate
            fontSize="large"
            sx={{
              borderRadius: "24px",
              transition: "all 0.35s",
            }}
          />
          <Typography fontSize="0.5rem" fontWeight="bold">
            Upload
          </Typography>
        </Button>
      </Paper>

      {/* Menu Button */}
      <Box>
        <IconButton variant="contained" onClick={() => setSdbr(!sdbr)}>
          <KeyboardArrowRight
            fontSize="large"
            sx={{
              transform: sdbr && "rotate(180deg)",
              transition: "transform 0.75s",
            }}
          />
        </IconButton>
      </Box>

      {/* Display Buttons */}
      <Box
        flex={1}
        sx={{
          height: "100%",
          overflowY: "auto",
          "::-webkit-scrollbar": { width: "2px" },
          "::-webkit-scrollbar-thumb": {
            backgroundColor: "darkorange",
          },
        }}
      >
        {Page === null && (
          <Paper
            elevation={8}
            sx={{
              backgroundColor: "#333333",
              borderRadius: "12px",
              overflow: "hidden",
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
                  onClick={() => dispatch(setPage("numbers"))}
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
                  onClick={() => dispatch(setPage("emojis"))}
                >
                  <EmojiEmotionsOutlined fontSize="large" />
                  <Typography fontWeight="bold" textAlign="center">
                    Emoji
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
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  color="warning"
                  sx={{ color: "white" }}
                  onClick={() => window.location.reload()}
                >
                  <Typography fontWeight="bold" textAlign="center">
                    reset
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Paper>
        )}
        {Page === "texts" && <Texts />}
        {Page === "images" && <Images />}
        {Page === "numbers" && <Numbers />}
        {Page === "emojis" && <Emojis />}
        {Page === "uploads" && <Uploads />}
      </Box>
    </Box>
  );
};

export default LeftSide;
