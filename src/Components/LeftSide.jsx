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
// import t from "../Assets/tshirt.svg";
const LeftSide = () => {
  const [sdbr, setSdbr] = React.useState(false);
  const [section, setSection] = React.useState(null);
  return (
    <Box flex={1} sx={{ display: "flex", height: "800px" }}>
      <Paper
        elevation={24}
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
          transition: "all 0.5s",
          position: "relative",
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
          onClick={() => setSection("texts")}
        >
          <FontDownload
            fontSize="large"
            sx={{
              borderRadius: "24px",
              transition: "all 0.35s",
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
        >
          <Image
            fontSize="large"
            sx={{
              borderRadius: "24px",
              transition: "all 0.35s",
            }}
            onClick={() => setSection("images")}
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
          onClick={() => setSection("numbers")}
        >
          <SixtyFps
            fontSize="large"
            sx={{
              borderRadius: "24px",
              transition: "all 0.35s",
            }}
          />
          <Typography fontSize="0.5rem" fontWeight="bold">
            NUMBER
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
          onClick={() => setSection("emojis")}
        >
          <EmojiEmotionsOutlined
            fontSize="large"
            sx={{
              borderRadius: "24px",
              transition: "all 0.35s",
            }}
          />
          <Typography fontSize="0.5rem" fontWeight="bold">
            Emoji
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
          onClick={() => setSection("uploads")}
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
        {section === null && (
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
                  onClick={() => setSection("texts")}
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
                  onClick={() => setSection("images")}
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
                  onClick={() => setSection("numbers")}
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
                  onClick={() => setSection("emojis")}
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
                  onClick={() => setSection("uploads")}
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
        {section === "texts" && <Texts />}
        {section === "images" && <Images />}
        {section === "numbers" && <Numbers />}
        {section === "emojis" && <Emojis />}
        {section === "uploads" && <Uploads />}
      </Box>
    </Box>
  );
};

export default LeftSide;
