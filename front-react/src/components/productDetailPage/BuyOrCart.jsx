import { React, useEffect, useState } from "react";
import styled from "styled-components";
import swal from "sweetalert";
import { useSelector, useDispatch } from "react-redux";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Grid from "../../components/common/Grid";
import { history } from "../../reducers/history";
import { Box } from "@mui/material";
import ImgSlicker from "../common/ImgSlicker";

function BuyOrCart(props) {
  //상품 정보
  const {
    id,
    item,
    image_list,
    price,
    market,
    reg_date,
    category,
    image,
    info,
    description,
  } = props.productInfo;

  //상품 구매를 위한 옵션
  const [option, setOption] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [sum, setSum] = useState(0);
  const optionList = ["화이트", "블랙"];
  //상품 옵션을 선택하면 화면에 elements 추가 렌더링
  const selectOption = (e) => {
    const _options = option.filter((o, id) => {
      if (o !== e.target.value) {
        return o;
      }
    });
    setOption([
      ..._options,
      { text: e.target.value, num: 1, prd: id, count: price },
    ]);
    setQuantity(quantity + price);
  };
  //옵션 삭제
  // const deleteOption = (target) => {
  //   const _options = option.filter((option, idx) => {
  //     if (option.text !== target.text) {
  //       return option;
  //     }
  //     setQuantity();
  //   });
  //   setOption(_options);
  // };

  //수량 변경
  const plusQuantity = (option) => {
    setQuantity((current) => current + 1);
    setSum(sum + price);
    // option.num += 1;
    // option.sum += price;
  };
  const minusQuantity = (option) => {
    quantity > 1 && setQuantity((current) => current - 1);

    if (sum > 0 && option.num > 1) {
      setSum(sum - price);
      option.num -= 1;
      option.sum -= price;
    }
  };
  const setShoppingBasket = () => {
    if (!localStorage.getItem("token")) {
      history.pushState("/login");
      swal({
        title: "로그인 후 장바구니 이용이 가능합니다",
        icon: "info",
      });
    }
    swal({
      title: "장바구니에 담았습니다",
      icon: "success",
      buttons: {
        goCart: { div: "장바구니 이동", value: "goCart" },
        cancel: "쇼핑 계속하기",
      },
    });
    // 장바구니 넣는거 구현
  };
  // const heartClick = (e) => {
  //   // 하트 클릭시 색 변화
  //   console.log(e.CurrentTarget);
  //   e.CurrentTarget.color = "#black";
  // };
  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,1fr)"
        gap={6}
        sx={{
          maxWidth: "lg",
          height: 600,
          m: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mr: 5,
          }}
        >
          <ImgSlicker imgs={[image]}></ImgSlicker>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            ml: 5,
          }}
        >
          <ItemName>{item}</ItemName>
          <ItemDetails>
            <ItemDetailLabel>마켓</ItemDetailLabel>
            <ItemDetailContent>{market}</ItemDetailContent>
          </ItemDetails>
          <Line></Line>
          <ItemDetails>
            <ItemDetailLabel>상품 정보</ItemDetailLabel>
            <ItemDetailContent>{category}</ItemDetailContent>
          </ItemDetails>
          <Line></Line>
          <ItemDetails></ItemDetails>
          <ItemDetails>
            <ItemDetailLabel>상품 선택</ItemDetailLabel>
          </ItemDetails>

          <Select onChange={selectOption}>
            <OptionGrid>[필수] 옵션을 선택해 주세요 </OptionGrid>
            <OptionGrid disabled="true"> ------------------ </OptionGrid>
            {optionList.map((opt, idx) => {
              return (
                <option value={opt} key={id + idx}>
                  {opt}
                </option>
              );
            })}
          </Select>

          {option && //선택한 옵션이 존재할 때 화면 렌더링
            option.map((o, idx) => {
              return (
                <Grid padding="16px" key={idx}>
                  <Grid bg="rgb(248, 248, 248)" height="90px" padding="16px">
                    <Grid is_flex padding="0 0 14px 0">
                      {/* <div margin="0" size="13px">
                          {optionList.includes("[") ? (
                            <div>
                              [{optionList.text.split("[")[1].split("]")[0]}]
                            </div>
                          ) : null}
                          {optionList.text.split("[")[0].split("(")[0]}
                        </div> */}
                      {/* <RemoveCircleOutlineIcon
                          onClick={() => {
                            deleteOption(optionList);
                          }}
                        ></RemoveCircleOutlineIcon> */}
                      {o.text}
                    </Grid>
                    <Grid height="28px" is_flex center>
                      <Grid is_flex width="116px">
                        <Grid
                          onClick={() => {
                            minusQuantity(option);
                          }}
                          width="28px"
                          height="28px"
                          bg="rgb(255, 255, 255)"
                        >
                          <RemoveIcon />
                        </Grid>
                        <Grid
                          width="50px"
                          height="28px"
                          bg="rgb(255, 255, 255)"
                          margin="0 5px"
                        >
                          {option.num ? option.num : 1}
                        </Grid>
                        <Grid
                          onClick={() => {
                            plusQuantity(option);
                          }}
                          width="28px"
                          height="28px"
                          bg="rgb(255, 255, 255)"
                        >
                          <AddIcon />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
          <Grid padding="16px" right>
            <div size="0.8em" margin="0">
              총 상품 가격
              <div style={{ fontSize: "22px", margin: "0 0 0 8px" }}>
                {quantity}.000원
              </div>
            </div>
          </Grid>
          <Grid is_flex padding="16px 16px">
            <FavoriteBorderIcon
              sx={{
                border: 1,
                borderColor: "#C4C4C4",
                "&:hover": { color: "#ffe664" },
              }}
            />
            <ShoppingBasketIcon
              sx={{ color: "#ffe664", border: 1, borderColor: "#C4C4C4" }}
              onClick={setShoppingBasket}
            />
            <StyledBuyButton>구매하기</StyledBuyButton>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

BuyOrCart.defaultProps = {
  id: 0,
  item: "아이폰 하드 케이스",
  image_list: [],
  price: 20.0,
  market: "짐승친구들",
  reg_date: "",
  category: "아이폰",
  option_list: ["블랙", "화이트"],
  thumbnail_image:
    "https://image1.marpple.co/files/u_1889845/2022/5/original/7cc1043fe80934a258563d769bc99345decaea7c1.png?q=92&w=432&f=jpeg&bg=f6f6f6",
  info: " 얇고 가벼운 폴리카보네이트 소재의 하드케이스입니다. 충격에 강하고 부드러운 그립감을 갖습니다. 화려하고 선명한 컬러 표현이 가능하며 긁힘과 색바램에 강합니다.   소재 : 폴리카보네이트 제조국 : Made in Korea   주의사항  모델컷의 경우 촬영장소의 환경에 따라 실제 색상과 상이할 수 있습니다. 오염 시 수건에 미지근한 물을 적셔 오염 부분을 닦아 주시기 바랍니다. 케이스 교체 시에 무리한 힘을 가하지 마십시오. 내구성이 우수하지만, 고열에서의 장시간 노출 시에는 변형이 올 수 있습니다. 카드수납은 불가능합니다.  ",

  description: "설명",
};

const ItemName = styled.h2`
  text-align: left;
  font-size: 36px;
  line-height: 44px;
`;
const Line = styled.hr`
  border: solid 0.2px #ebebeb;
  width: 92%;
`;

const ItemDetails = styled.div`
  display: block;
  position: relative;
  margin-bottom: 50px;
`;

const ItemDetailLabel = styled.ul`
  position: absolute;
  left: 10px;
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
  margin-botton: 30px;
`;

const ItemDetailContent = styled.ul`
  position: absolute;
  left: 200px;
  font-size: 16px;
  line-height: 24px;
`;

const Select = styled.select`
  appearance: none;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  width: 100%;
  height: 40px;
  border: 1px solid rgb(236, 236, 236);
  color: rgb(196, 196, 196);
  padding-left: 12px;
  border-radius: 4px;
  font-size: 14px;

  background-position-x: calc(100% - 12px);
`;
const OptionGrid = styled.option`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid rgb(236, 236, 236);
  background-color: rgb(248, 248, 248);
  color: rgb(59, 59, 59);
`;

const Unit = styled.span`
  font-size: 0.7em;
  font-weight: 400;
  color: #a1a1a1;
`;

const StyledBuyButton = styled.button`
  width: 350px;
  margin-left: 30px;
  color:black;
  background-color: #ffe664;
  border-radius:5
  border:none
  text: bold;
`;
export default BuyOrCart;
