import React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

function ListSquareEle(props) {
  const link = props.link;
  const {id, company, name, productionThumbnailImage, price, like, view} = props.item;
  const size = props.size;
  const linkUrl = `/${link}/${id}`
  return (
    <Link to={linkUrl}>
      <Box sx={{ maxWidth: size, pb: 2, mb: 5 }}>
        <Box
        component="img"
          sx={{width: size,
            height: size,
          }} src={productionThumbnailImage}
        />
        <Box sx={{p: '12px'}}>
        <Typography variant="body4" color="text.secondary">
            {company}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {name}
          </Typography>
        </Box>
        <Box sx={{position: 'relative'}}>
        <Typography size="small" sx={{
          position: 'absolute', left: '15px'}}>{price} 원</Typography>
          <IconButton aria-label="add to favorites" sx={{
            position: 'absolute', right:'10px'}}>
            <FavoriteIcon /> <Typography size="small">{view}</Typography>
          </IconButton>
        </Box>
      </Box>
    </Link>
  )
}


export default ListSquareEle