import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";
import { Box, Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { selectCate } from "../../reducers/categoryApi";

function OptionSelector() {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.category.allCategories);
  const ITEM_HEIGHT = allCategories.length === 0 ? 0 : allCategories.length;
  const [selected, setselected] = useState(
    useSelector((state) => state.category.selected.id - 1)
  );

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (event, index) => {
    setAnchorEl(null);
    setselected(index);
    dispatch(selectCate(allCategories[index]));
  };

  return (
    <div>
      <Container sx={{ height: "200px", backgroundColor: "#FFE664" }}>
        <FlexDiv>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <Box>
              <MenuIcon />
            </Box>
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 50,
                width: "20ch",
              },
            }}
          >
            {ITEM_HEIGHT !== 0 ? (
              allCategories.map((option, index) => (
                <MenuItem
                  key={option.id}
                  value={option.name}
                  selected={option.name === allCategories[0].name}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option.name}
                </MenuItem>
              ))
            ) : (
              <div></div>
            )}
          </Menu>
          <StyledH>
            {isNaN(selected)
              ? "카테고리를 선택해주세요"
              : allCategories[selected].name}
          </StyledH>
        </FlexDiv>
      </Container>
    </div>
  );
}

const FlexDiv = styled.div`
  display: flex;
  text-align: center;
  vertical-align: middle;
  position: relative;
  top: 40%;
`;

const StyledH = styled.h1`
  margin: 0 auto;
`;
export default OptionSelector;
