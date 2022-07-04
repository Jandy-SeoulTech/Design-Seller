import { Avatar, Box } from '@mui/material'
import { React } from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components";

function ListCircle1x5({header, lists, onClickHandler}) {
  
  const allCategories = useSelector((state) => state.category.allCategories);
  //list should be {
  //   id : ,
  //   name : ,
  //   img : .
  // }
  return (
    <div>
      <StyledH>{header}</StyledH>
        <Box display="grid" gridTemplateColumns="repeat(6,1fr)" gap={2}
            sx={{
              mt : 4,
              mb : 4,
            }}>
            {allCategories && allCategories.map((category, index) => 
              <div key={index}>
              <Box gridRow={1} sx={{
                justifyContent: "center"
              }}>
                <Box onClick={() => onClickHandler(category)}>
                  <Avatar sx={{m: '0 auto', width: '100px',
                  height: '100px'}}></Avatar>
                  <StyledP >{category.name}</StyledP>
                </Box>
              </Box>
              </div>
            )}
        </Box>
    </div>
  )
}

const StyledP = styled.p`
  font-size: 16px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
`;

const StyledH = styled.p`
font-weight: bold;
font-size: 20px;
text-align: center;
overflow: hidden;
white-space: nowrap;
`;

export default ListCircle1x5