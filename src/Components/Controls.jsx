import { Button, Stack } from "@mui/material";
import React from "react";
import Font from "react-font";

const Controls = ({ font, text }) => {
  return (
    <Stack display="flex" direction="column" spacing={2}>
      <Font family={font}>
        <p>{text}</p>
      </Font>

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
