import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ListSquare from "./ListSquare";
import { Container } from "@mui/material";
import styled from "styled-components";

function ListIndexPage({ items }) {
  const listOptions = useSelector((state) => state.category.listfetchOptions);

  return (
    <Container>
      <div>
        <div>{listOptions.categoryId}</div>
        <br></br>
        <Listh2>
          <IndexLen>총 {items.length} 개</IndexLen>
          <IndexOption>인기순 | 최신순 | 이름순</IndexOption>
        </Listh2>
        <ListSquare items={items} link={"makeit"} column={5}></ListSquare>
      </div>
    </Container>
  );
}
export default ListIndexPage;

const Listh2 = styled.div`
  position: relative;
  width: 100%;
`;

const IndexLen = styled.div`
  position: absolute;
  left: 5px;
  display: block;
`;

const IndexOption = styled.div`
  position: absolute;
  right: 5px;
  display: block;
`;
