import { Close, Undo } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Font from "react-font";
import Controls from "./Controls";

const Texts = () => {
  const [txt, setTxt] = React.useState("");
  const [controls, setControls] = React.useState({ bool: false, font: "" });
  const fnts = [
    "Rubik Gemstones",
    "Rubik 80s Fade",
    "Rubik Vinyl",
    "Rubik Storm",
    "Playfair Display",
    "Rubik Spray Paint",
    "Rubik Puddles",
    "Anton",
    "Bebas Neue",
  ];

  return (
    <Stack flex={1} display="flex" direction="column" spacing={2}>
      <Stack
        flex={1}
        display="flex"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        bgcolor={"#333333"}
      >
        <Box flex={1}>
          <Typography textAlign="center" fontWeight="bold" color="white">
            Add Text
          </Typography>
        </Box>
        <IconButton
          onClick={() =>
            setControls((prevValue) => {
              return { ...prevValue, bool: false };
            })
          }
          size="small"
          sx={{ display: controls ? "inline-block" : "none" }}
        >
          <Undo sx={{ color: "orange", "&:hover": { color: "darkorange" } }} />
        </IconButton>
        <IconButton size="small">
          <Close sx={{ color: "gray", "&:hover": { color: "darkgray" } }} />
        </IconButton>
      </Stack>

      {/* Inputs */}
      <TextField
        label="Enter Text Here"
        value={txt}
        fullWidth
        variant="filled"
        color="warning"
        autoComplete="off"
        onChange={(e) => setTxt(e.target.value.substring(0, 11))}
        sx={{ input: { color: "white", fontWeight: "bold" } }}
      />

      <Paper
        elevation={6}
        sx={{ textAlign: "center", backgroundColor: "transparent", p: 4 }}
      >
        {controls.bool === false ? (
          txt &&
          fnts.map((fnt, idx) => {
            return (
              <Button
                fullWidth
                variant="text"
                sx={{
                  textDecoration: "none",
                  textTransform: "none",
                  color: "black",
                  fontSize: "large",
                  "&:hover": {
                    color: "orange",
                    backgroundColor: "transparent",
                  },
                }}
                onClick={() => setControls({ bool: true, font: fnt })}
              >
                <Stack display="flex" direction="column">
                  <Font key={idx} family={fnt}>
                    <p>{txt}</p>
                  </Font>
                  <Typography variatn="h6" textAlign="center">
                    {fnt}
                  </Typography>
                </Stack>
              </Button>
            );
          })
        ) : (
          <Controls font={controls.font} text={txt} />
        )}
      </Paper>
    </Stack>
  );
};

export default Texts;
