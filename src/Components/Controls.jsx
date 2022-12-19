import { Box, Button, Slider, Stack, Typography } from "@mui/material";
import React from "react";
import Font from "react-font";
import { HexColorPicker } from "react-colorful";

const Controls = ({ font, text }) => {
  const [fntSize, setFntSize] = React.useState(1);
  const [ltrSpace, setLtrSpace] = React.useState(1);
  const [rt, setRt] = React.useState(0);
  const [color, setColor] = React.useState("#fff");
  return (
    <Stack display="flex" direction="column" spacing={2} sx={{ width: "100%" }}>
      <Font family={font}>
        <p
          style={{
            color,
            fontSize: fntSize !== 1 && fntSize + "rem",
            letterSpacing: ltrSpace !== 1 && ltrSpace + "px",
            transform: rt !== 0 && `rotate(${rt}deg)`,
            transition: "all 0.35s",
          }}
        >
          {text}
        </p>
      </Font>

      <Box sx={{ width: "100%" }}>
        <Typography fontWeight="bold" variant="h6" fontSize="1.1rem">
          Font Size: {fntSize === 1 ? "default" : fntSize}
        </Typography>
        <Slider
          size="small"
          min={1}
          max={3}
          aria-label="Small"
          valueLabelDisplay="auto"
          sx={{ color: "darkorange" }}
          onChange={(e) => setFntSize(e.target.value)}
        />
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography fontWeight="bold" variant="h6" fontSize="1.1rem">
          Letter-Spacing: {ltrSpace === 1 ? "default" : ltrSpace}
        </Typography>
        <Slider
          size="small"
          min={1}
          max={8}
          aria-label="Small"
          valueLabelDisplay="auto"
          sx={{ color: "darkorange" }}
          onChange={(e) => setLtrSpace(e.target.value)}
        />
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography fontWeight="bold" variant="h6" fontSize="1.1rem">
          Rotate: {rt === 0 ? "0deg" : rt + "deg"}
        </Typography>
        <Slider
          size="small"
          min={0}
          max={360}
          aria-label="Small"
          valueLabelDisplay="auto"
          sx={{ color: "darkorange" }}
          onChange={(e) => setRt(e.target.value)}
        />
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography fontWeight="bold" variant="h6" fontSize="1.1rem">
          color: {color}
        </Typography>
        <HexColorPicker color={color} onChange={setColor} />
      </Box>

      <Button
        fullWidth
        variant="contained"
        color="warning"
        onClick={() => alert(`${text} ${font}`)}
      >
        Add Text
      </Button>
    </Stack>
  );
};

export default Controls;
