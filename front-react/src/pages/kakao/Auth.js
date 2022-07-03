import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from '../../reducers/user';

function Auth() {
    const token = new URL(window.location.href).searchParams.get("token");
    const nickname = new URL(window.location.href).searchParams.get("nickname");
    const [, setCookie] = useCookies([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const setToken = async () => {
      const expires = new Date()
      expires.setDate(expires.getDate() + 1);
        if (token) {
          //쿠키 저장
          setCookie('user_token', token, { path : '/', expires : expires});
          setCookie('nick_name', nickname, {path: '/', expires: expires});
        }
    }
    const setNickname = () => {
      if (nickname !== null || nickname !== "") {
        //유저 닉네임 state저장
        navigate('/', {replace: true});
        dispatch(login({
          logined : true,
          nickname : nickname
        }))
      }
    }
    useEffect(() => {
      setToken();
      setNickname();
    })

  return <div>{token}</div>;
  }
export default Auth;
