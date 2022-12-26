import { Box, Button, Slider, Stack, Typography } from "@mui/material";
import { frontStyledUpload } from "../Actions";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

const Uploads = () => {
  const dispatch = useDispatch();
  const { FrontStyling } = useSelector((state) => state);
  const { upload } = FrontStyling;
  const { uploadValue, uploadSize, uploadRtn } = upload;

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      dispatch(
        frontStyledUpload({
          ...upload,
          uploadValue: URL.createObjectURL(e.target.files[0]),
        })
      );
    }
  };

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
            Upload Image
          </Typography>
        </Box>
      </Stack>
      <Button
        variant="contained"
        component="label"
        fullWidth
        color="warning"
        sx={{ color: "white" }}
      >
        Upload
        <input
          hidden
          multiple
          accept="image/*"
          type="file"
          onChange={handleChange}
        />
      </Button>

      {uploadValue && (
        <Stack
          display="flex"
          direction="column"
          spacing={4}
          sx={{ p: 4, width: "100%" }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography fontWeight="bold" variant="h6" fontSize="1.1rem">
              Image Size: {uploadSize === 10 ? "default" : uploadSize}
            </Typography>
            <Slider
              value={uploadSize}
              size="small"
              min={10}
              max={100}
              aria-label="Small"
              valueLabelDisplay="auto"
              sx={{ color: "darkorange" }}
              onChange={(e) =>
                dispatch(
                  frontStyledUpload({ ...upload, uploadSize: e.target.value })
                )
              }
            />
          </Box>

          <Box sx={{ width: "100%" }}>
            <Typography fontWeight="bold" variant="h6" fontSize="1.1rem">
              Image Rotate: {uploadRtn === 0 ? "default" : uploadRtn}
            </Typography>
            <Slider
              value={uploadRtn}
              size="small"
              min={0}
              max={360}
              aria-label="Small"
              valueLabelDisplay="auto"
              sx={{ color: "darkorange" }}
              onChange={(e) =>
                dispatch(
                  frontStyledUpload({ ...upload, uploadRtn: e.target.value })
                )
              }
            />
          </Box>
        </Stack>
      )}
    </Stack>
  );
};

export default Uploads;
