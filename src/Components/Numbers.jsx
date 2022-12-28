import { Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { setBackNumber, setBackText } from "../Actions";
import { useDispatch, useSelector } from "react-redux";
import Font from "react-font";

// Anton
const Numbers = () => {
  const dispatch = useDispatch();
  const { BackStyling } = useSelector((state) => state);
  const { backText, backNumber } = BackStyling;
  const { textValue } = backText;
  const { Number } = backNumber;
  return (
    <Stack
      flex={1}
      display="flex"
      direction="column"
      alignItems="start"
      sx={{ height: "600px", overflow: "auto", width: "250px" }}
      spacing={2}
    >
      <Box>
        <Typography textAlign="center" fontWeight="bold" color="white">
          Add Tag
        </Typography>
      </Box>

      {/* Inputs */}
      <TextField
        label="Enter Name Here"
        value={textValue}
        fullWidth
        variant="filled"
        color="warning"
        autoComplete="off"
        sx={{ input: { color: "white", fontWeight: "bold" } }}
        onChange={(e) =>
          dispatch(
            setBackText({
              ...backText,
              textValue: e.target.value.substring(0, 15).toUpperCase(),
            })
          )
        }
      />

      <Box
        sx={{
          width: "100%",
          display: textValue ? "block" : "none",
        }}
      >
        <Font family="Anton">
          <p
            style={{
              textAlign: "center",

              color: "#fff",
            }}
          >
            {textValue}
          </p>
        </Font>
      </Box>

      {/* Inputs */}
      <TextField
        label="Enter Number Here"
        value={Number}
        fullWidth
        variant="filled"
        color="warning"
        autoComplete="off"
        sx={{ input: { color: "white", fontWeight: "bold" } }}
        onChange={(e) =>
          dispatch(
            setBackNumber({
              ...backNumber,
              Number: e.target.value.substring(0, 15).toUpperCase(),
            })
          )
        }
      />

      <Box
        sx={{
          width: "100%",
          display: Number ? "block" : "none",
        }}
      >
        <Font family="Anton">
          <p
            style={{
              textAlign: "center",

              color: "#fff",
            }}
          >
            {Number}
          </p>
        </Font>
      </Box>
    </Stack>
  );
};

export default Numbers;
