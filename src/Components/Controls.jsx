import { Box, Slider, Stack, Typography } from "@mui/material";
import React from "react";

import { HexColorPicker } from "react-colorful";
import { useDispatch, useSelector } from "react-redux";
import { frontStyledText } from "../Actions";
const Controls = () => {
  const dispatch = useDispatch();
  const { FrontStyling } = useSelector((state) => state);
  const { text } = FrontStyling;
  const { fntSize, ltrSpace, rt, color } = text;

  return (
    <Stack display="flex" direction="column" spacing={2} sx={{ width: "100%" }}>
      <Box sx={{ width: "100%" }}>
        <Typography fontWeight="bold" variant="h6" fontSize="1.1rem">
          Font Size: {fntSize === 1 ? "default" : fntSize}
        </Typography>
        <Slider
          value={fntSize}
          size="small"
          min={1}
          max={4}
          aria-label="Small"
          valueLabelDisplay="auto"
          sx={{
            color: "darkorange",
            display: { xs: "none", sm: "inline-block" },
          }}
          onChange={(e) =>
            dispatch(
              frontStyledText({
                ...text,
                fntSize: e.target.value,
              })
            )
          }
        />
        <Slider
          value={fntSize}
          size="small"
          min={1}
          max={2}
          aria-label="Small"
          valueLabelDisplay="auto"
          sx={{
            color: "darkorange",
            display: { xs: "inline-block", sm: "none" },
          }}
          onChange={(e) =>
            dispatch(
              frontStyledText({
                ...text,
                fntSize: e.target.value,
              })
            )
          }
        />
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography fontWeight="bold" variant="h6" fontSize="1.1rem">
          Letter-Spacing: {ltrSpace === 1 ? "default" : ltrSpace}
        </Typography>
        <Slider
          value={ltrSpace}
          size="small"
          min={1}
          max={8}
          aria-label="Small"
          valueLabelDisplay="auto"
          sx={{
            color: "darkorange",
          }}
          onChange={(e) =>
            dispatch(
              frontStyledText({
                ...text,
                ltrSpace: e.target.value,
              })
            )
          }
        />
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography fontWeight="bold" variant="h6" fontSize="1.1rem">
          Rotate: {rt === 0 ? "0deg" : rt + "deg"}
        </Typography>
        <Slider
          value={rt}
          size="small"
          min={0}
          max={360}
          aria-label="Small"
          valueLabelDisplay="auto"
          sx={{
            color: "darkorange",
          }}
          onChange={(e) =>
            dispatch(
              frontStyledText({
                ...text,
                rt: e.target.value,
              })
            )
          }
        />
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography fontWeight="bold" variant="h6" fontSize="1.1rem">
          color: {color}
        </Typography>
        <HexColorPicker
          color={color}
          onChange={(c) =>
            dispatch(
              frontStyledText({
                ...text,
                color: c,
              })
            )
          }
        />
      </Box>
    </Stack>
  );
};

export default Controls;
