import {
  AddPhotoAlternate,
  FontDownload,
  Image,
  SixtyFps,
} from "@mui/icons-material";
import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setBack, setFront, setPage } from "../Actions";

const Menu = () => {
  const [sdbr, setSdbr] = React.useState(false);
  const dispatch = useDispatch();
  return (
    <Paper
      elevation={8}
      sx={{
        backgroundColor: "#333333",
        width: { xs: "50%", sm: "50px" },
        height: "400px",
        overflow: "hidden",
        gap: sdbr ? 2 : 0,
        borderRadius: "12px",
        display: { xs: "none", sm: "flex" },
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderTop: sdbr ? "6px solid darkorange" : "200px solid darkOrange",
        borderBottom: sdbr ? "6px solid darkorange" : "200px solid #333",
        position: "relative",
        transition: "all 0.75s",
      }}
      onMouseEnter={() => setSdbr(true)}
      onMouseLeave={() => setSdbr(false)}
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
          dispatch(setPage("uploads"));
          dispatch(setFront());
        }}
      >
        <AddPhotoAlternate
          fontSize="large"
          sx={{
            borderRadius: "24px",
            transition: "all 0.35s",
          }}
          onClick={() => {
            dispatch(setPage("uploads"));
            dispatch(setFront());
          }}
        />
        <Typography fontSize="0.5rem" fontWeight="bold">
          Upload
        </Typography>
      </Button>
    </Paper>
  );
};

export default Menu;
