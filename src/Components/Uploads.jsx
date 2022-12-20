import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Uploads = () => {
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
    </Stack>
  );
};

export default Uploads;
