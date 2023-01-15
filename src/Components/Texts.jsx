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
import { useDispatch, useSelector } from "react-redux";
import { frontStyledText } from "../Actions";

const Texts = () => {
  const [txt, setTxt] = React.useState("");
  const [controls, setControls] = React.useState({ bool: false, font: "" });

  const dispatch = useDispatch();
  const { FrontStyling } = useSelector((state) => state);
  const { text } = FrontStyling;
  const { value, bool } = text;
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
    <Stack
      flex={1}
      display="flex"
      direction="column"
      spacing={2}
      sx={{ width: "250px" }}
    >
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
            dispatch(
              frontStyledText({
                ...text,

                bool: false,
              })
            )
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
        value={value}
        fullWidth
        variant="filled"
        color="warning"
        autoComplete="off"
        sx={{ input: { color: "white", fontWeight: "bold" } }}
        // onChange={(e) => setTxt(e.target.value.substring(0, 11))}
        onChange={(e) =>
          dispatch(
            frontStyledText({
              ...text,
              value: e.target.value.substring(0, 5),
            })
          )
        }
      />

      <Paper
        elevation={6}
        sx={{ textAlign: "center", backgroundColor: "transparent", p: 4 }}
      >
        {bool === false ? (
          text.value &&
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
                onClick={() =>
                  dispatch(
                    frontStyledText({
                      ...text,
                      font: fnt,
                      bool: true,
                    })
                  )
                }
              >
                <Stack display="flex" direction="column">
                  <Font key={idx} family={fnt}>
                    <p>{text.value}</p>
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
