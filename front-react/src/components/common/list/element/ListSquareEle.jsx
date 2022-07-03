import React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styled from "styled-components";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

function ListSquareEle(props) {
  const link = props.link;
  const { id, company, name, price, like, view } = props.item;

  const productionThumbnailImage =
    link === "makeit" ? props.item.productionThumbnailImage : props.item.image;

  const size = props.size;
  const linkUrl = `/${link}/detail/${id}`;
  return (
    <Link to={linkUrl}>
      <Box sx={{ maxWidth: size, pb: 2, mb: 5 }}>
        <Box
          component="img"
          sx={{ width: size, height: size }}
          src={productionThumbnailImage}
        />
        <Box sx={{ p: "12px" }}>
          <Typography variant="body4" color="text.secondary">
            {company}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {name}
          </Typography>
        </Box>
        <Box sx={{ position: "relative" }}>
          <Typography
            size="small"
            sx={{
              position: "absolute",
              left: "15px",
            }}
          >
            {price + "00"}원
          </Typography>
          <IconButton
            aria-label="add to favorites"
            sx={{
              position: "absolute",
              right: "10px",
            }}
          >
            <FavoriteIcon /> <Typography size="small">{like}</Typography>
          </IconButton>
        </Box>
      </Box>
    </Link>
  );
}
const StyledImg = styled.img`
  max-width: 289px;
  max-height: 304px;
  min-width: 50wh;
`;
export default ListSquareEle;
