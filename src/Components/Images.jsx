import {
  Close,
  EmojiFlags,
  Map,
  Pets,
  PhotoLibraryOutlined,
  Public,
  StickyNote2,
  Undo,
} from "@mui/icons-material";
import {
  Box,
  Grid,
  IconButton,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { flags, map, globe, sticker, animals } from "../Assets/flags";
import { frontStyledImage } from "../Actions";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

const { mexico, germany, italy, canada, turkey } = flags;
const { coop, peace } = globe;
const { usSticker, madeInUsa } = sticker;
const { lebanon, lebanonTwo } = map;
const { cat, dog } = animals;

const allFlags = [mexico, germany, italy, canada, turkey];
const allGlobe = [coop, peace];
const allStickers = [usSticker, madeInUsa];
const allAnimals = [cat, dog];
const country = [lebanon, lebanonTwo];
const allPhotos = [
  ...allAnimals,
  ...allFlags,
  ...allGlobe,
  ...allStickers,
  ...country,
];
const Images = () => {
  const [ImagePage, setImagPage] = React.useState();
  const dispatch = useDispatch();
  const { FrontStyling } = useSelector((state) => state);
  const { image } = FrontStyling;
  const { imageSize, rtn, bool } = image;

  const CategoryGrid = () => {
    return (
      <>
        <Grid container gap={4}>
          <Grid item>
            <IconButton
              size="large"
              sx={{
                "&:hover": { backgroundColor: "gray", color: "orange" },
                transition: "all 0.35s",
              }}
              onClick={() => setImagPage(allFlags)}
            >
              <EmojiFlags fontSize="large" />
            </IconButton>
          </Grid>

          <Grid item>
            <IconButton
              size="large"
              sx={{
                "&:hover": { backgroundColor: "gray", color: "orange" },
                transition: "all 0.35s",
              }}
              onClick={() => setImagPage(allGlobe)}
            >
              <Public fontSize="large" />
            </IconButton>
          </Grid>

          <Grid item>
            <IconButton
              size="large"
              sx={{
                "&:hover": { backgroundColor: "gray", color: "orange" },
                transition: "all 0.35s",
              }}
              onClick={() => setImagPage(country)}
            >
              <Map fontSize="large" />
            </IconButton>
          </Grid>

          <Grid item>
            <IconButton
              size="large"
              sx={{
                "&:hover": { backgroundColor: "gray", color: "orange" },
                transition: "all 0.35s",
              }}
              onClick={() => setImagPage(allStickers)}
            >
              <StickyNote2 fontSize="large" />
            </IconButton>
          </Grid>

          <Grid item>
            <IconButton
              size="large"
              sx={{
                "&:hover": { backgroundColor: "gray", color: "orange" },
                transition: "all 0.35s",
              }}
              onClick={() => setImagPage(allAnimals)}
            >
              <Pets fontSize="large" />
            </IconButton>
          </Grid>

          <Grid item>
            <IconButton
              size="large"
              sx={{
                "&:hover": { backgroundColor: "gray", color: "orange" },
                transition: "all 0.35s",
              }}
              onClick={() => setImagPage(allPhotos)}
            >
              <PhotoLibraryOutlined fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
        <ImageGrid ImagesToRender={ImagePage} />
      </>
    );
  };

  const ImageGrid = ({ ImagesToRender }) => {
    return (
      <Grid
        container
        gap={2}
        alignItems="center"
        justifyContent="center"
        sx={{ pt: 5 }}
      >
        {ImagesToRender?.map((img, idx) => {
          return (
            <Grid
              key={idx}
              item
              sx={{
                "&:hover": { transform: "scale(1.1)", cursor: "pointer" },
                img: { width: "100%" },
              }}
            >
              <img
                src={img}
                alt="img"
                onClick={() =>
                  dispatch(
                    frontStyledImage({ ...image, imageValue: img, bool: true })
                  )
                }
              />
            </Grid>
          );
        })}
      </Grid>
    );
  };
  const handleSlider = (e) => {
    dispatch(
      frontStyledImage({
        ...image,
        imageSize: e.target.value,
      })
    );
  };
  const Controls = () => {
    return (
      <Stack
        display="flex"
        direction="column"
        spacing={4}
        sx={{ p: 4, width: "100%" }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography fontWeight="bold" variant="h6" fontSize="1.1rem">
            Image Size: {imageSize === 10 ? "default" : imageSize}
          </Typography>
          <Slider
            value={imageSize}
            size="small"
            min={10}
            max={100}
            aria-label="Small"
            valueLabelDisplay="auto"
            sx={{ color: "darkorange" }}
            onChange={handleSlider}
          />
        </Box>

        <Box sx={{ width: "100%" }}>
          <Typography fontWeight="bold" variant="h6" fontSize="1.1rem">
            Image Rotate: {rtn === 0 ? "default" : rtn}
          </Typography>
          <Slider
            value={rtn}
            size="small"
            min={0}
            max={360}
            aria-label="Small"
            valueLabelDisplay="auto"
            sx={{ color: "darkorange" }}
            onChange={(e) =>
              dispatch(
                frontStyledImage({
                  ...image,
                  rtn: e.target.value,
                })
              )
            }
          />
        </Box>
      </Stack>
    );
  };

  return (
    <Stack display="flex" direction="column" spacing={2}>
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
            Add Image
          </Typography>
        </Box>
        <IconButton
          onClick={() => dispatch(frontStyledImage({ ...image, bool: false }))}
          size="small"
        >
          <Undo sx={{ color: "orange", "&:hover": { color: "darkorange" } }} />
        </IconButton>
        <IconButton size="small">
          <Close sx={{ color: "gray", "&:hover": { color: "darkgray" } }} />
        </IconButton>
      </Stack>
      {bool ? <Controls /> : <CategoryGrid />}
    </Stack>
  );
};

export default Images;
