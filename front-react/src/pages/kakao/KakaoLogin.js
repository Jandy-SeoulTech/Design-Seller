import React from "react";
import { KAKAO_AUTH_URL } from "./kakao_config.js";
import kakao_login_png from "../../assets/img/kakao_login_medium_narrow.png";
function Kakaologin() {
  return (
    <div>
      <a href={KAKAO_AUTH_URL}>
        <img src={kakao_login_png} alt="카카오로그인"></img>
      </a>
    </div>
  );
}

export default Kakaologin;
