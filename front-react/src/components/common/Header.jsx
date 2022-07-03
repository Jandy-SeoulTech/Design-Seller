import { React } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

function Header(props) {
  const [loginCookie, ] = useCookies([]);
  const {user_token, nick_name} = loginCookie;
  

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
        {user_token ? (
          <StyledLi>
            <StyledLink to="/">{nick_name}님</StyledLink>
          </StyledLi>
        ) : (
          <StyledLi>
            <StyledLink to="/login">로그인</StyledLink>
          </StyledLi>
        )}
        {user_token ? (
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
