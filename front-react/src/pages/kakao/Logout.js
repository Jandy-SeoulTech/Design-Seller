import React, {useEffect} from 'react'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../reducers/user';

const Logout = () => {
    const [ , , removeCookie] = useCookies([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = () => {
        removeCookie("user_token", { path : '/'});
        removeCookie("nick_name", { path : '/'});
        dispatch(logout());
    }
    

    useEffect(() => {
      logoutHandler();
      navigate('/', {replace : true})
    })
    
  return (
    <div>로그아웃 중</div>
  )
}

export default Logout