import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

function Header(props) {
  const dispatch = useDispatch();
  const user_nickname = useSelector(state => state.user.value.nickname);
  const logined = useSelector(state => state.user.value.logined);
  const [user_cookies, setCookie] = useCookies(['user_token']);
  

  //깨달은 사싦 -> 결국 해당 토큰을 통해 유저정보를 서버에서 끌어오지 못하면 닉네임을 store에 저장하는 것은 의미가 없다! 
  //새로고침하면 결국 사라지기 때문에
  // 이를 해결하기위해 react-persist 라는 놈을 도입! -> 이친구는 redux store를 Storage내에 저장하기 때문에 마치 Storage내의 값을 store처럼 사용할 수 있다!

  useEffect(() => {
    
  }, [user_cookies])
  

  return (
    <>
      <Logo
        onClick={() => {
          // window.history.go("/");
        }}
      >
        로고
      </Logo>
      <ul style={{ listStyle: "none" }}>
        <StyledLi>
          <StyledLink to="/">market</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/makeit">make it</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/myMarket">my Market</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/mypage">my Page</StyledLink>
        </StyledLi>
        {user_nickname ? (
          <StyledLi>
            <StyledLink to="/">{user_nickname}님</StyledLink>
          </StyledLi>
        ) : (
          <StyledLi>
            <StyledLink to="/login">로그인</StyledLink>
          </StyledLi>
        )}
        {user_cookies ? (
          <StyledLi>
            <StyledLink to="/logout">로그아웃</StyledLink>
          </StyledLi>
        ) : (
          <StyledLi>
            <StyledLink to="/">회원가입</StyledLink>
          </StyledLi>
        )}
      </ul>
    </>
  );
}

const Logo = styled.div`
  font-size: 20px;
`;
const StyledLi = styled.li`
  list-style: none;
  display: inline-block;
  margin: 10px 10px;
  height: 14px;
  font-size: 12px;
  line-height: 14px;
  position: relative;
  cursor: pointer;
  align-items: center;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-size: 20px;
`;

export default Header;
