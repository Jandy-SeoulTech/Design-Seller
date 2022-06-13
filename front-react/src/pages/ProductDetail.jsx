import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/common/Header";
import swal from "sweetalert";
import { useSelector, useDispatch } from "react-redux";
import productSlice from "../lib/productApi";
import { getPrdDetailDB } from "../lib/productApi";

function ProductDetail(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const prd_list = useSelector((state) => state.prd.list);
  // const prd_idx=prd_list.findIndex((p)=>p.pr) = prd_list[prd_list.findIndex((p) => p.id === id)];
  const product = prd_list[id];
  const prd = product.stringfy();
  useEffect(() => {
    //db에서 product 조회
    dispatch(getPrdDetailDB(id));
  }, []);

  //상품 구매를 위한 옵션

  const [option, setOption] = useState([]);
  const [count, setCount] = useState(0);

  //상품 옵션을 선택하면 화면에 elements 추가 렌더링
  const selectOption = (e) => {
    const _options = option.filter((o, id) => {
      if (o !== e.target.value) {
        return o;
      }
    });
    let price = Number(e.target.value.slice(-7, -1).split(",").join("").trim());
    setOption([
      ..._options,
      { text: e.target.value, num: 1, prd: product, count: price },
    ]);
    setCount(count + price);
  };
  //옵션 삭제
  const deleteOption = (target) => {
    const _options = option.filter((option, idx) => {
      if (option.text !== target.text) {
        return option;
      }
      setCount();
    });
    setOption(_options);
  };

  const setShoppingBasket = () => {
    swal({
      title: "장바구니에 담았습니다",
      icon: "success",
      buttons: {
        goCart: { text: "장바구니 이동", value: "goCart" },
        cancel: "쇼핑 계속하기",
      },
    });
  };
  return (
    <>
      <Header />
      <div>{product}</div>
      <Line />

      <div>판매기간 </div>
      <Line />

      <div>
        <Select onChange={selectOption}>
          <option>[필수] 옵션을 선택해 주세요 </option>
          <option> ------------------ </option>
        </Select>
      </div>
      <Button onClick={setShoppingBasket}>장바구니</Button>
      <Button>구매하기</Button>
    </>
  );
}
const Line = styled.hr`
  border: solid 0.2px #ebebeb;
  width: 92%;
`;
const Select = styled.select`
  appearance: none;
`;
const Button = styled.button`
  color: "rgb(255, 111, 97)";
`;
export default ProductDetail;
