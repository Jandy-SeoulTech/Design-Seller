import { React, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import "./App.css";
import Login from "./pages/Login";
import Auth from "./pages/kakao/Auth.js";
import Profile from "./pages/kakao/Profile.js";
import { ProductDetail, Mymarket, ProductRegister } from "./pages/market";
import {
  MakeitHome,
  MakeitCategory,
  MakeitDetail,
  MakeitOrder,
  MakeitPurchase,
} from "./pages/Makeit";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Logout from "./pages/kakao/Logout";
import { history } from "./reducers/history.js";

function App() {
  const user = localStorage.getItem("user");

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route
            path="/mypage"
            element={user ? <Mypage /> : <Navigate to="/login" />}
          />
          <Route
            path="/myMarket"
            element={user ? <Mymarket /> : <Navigate to="/login" />}
          /> */}
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/myMarket" element={<Mymarket />} />
          <Route path="/product/register" element={<ProductRegister />} />
          <Route path="/product/detail/:id" element={<ProductDetail />} />
          <Route
            path="/product/category"
            element={<MakeitCategory link="product" />}
          />

          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/makeit" element={<MakeitHome />} />
          <Route path="/makeit/category" element={<MakeitCategory />} />
          <Route path="/makeit/detail/:id" element={<MakeitDetail />} />
          <Route path="/makeit/order/:id/:cookie" element={<MakeitOrder />} />
          <Route
            path="/makeit/purchase/:id/:cookie"
            element={<MakeitPurchase />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
