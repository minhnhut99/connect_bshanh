import React from "react";
import "./Home.scss";
import Fb from "../img/facebook.png";
import Phone from "../img/phone.png";
import Zalo from "../img/zalo.png";
import Yt from "../img/youtube.png";
import Web from "../img/web.webp";
import GGmap from "../img/ggmap.png";
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <h1>
          KẾT NỐI VỚI <h2>BS HẠNH</h2>
        </h1>
        <div className="heading-title">
          <p className="note-heading">Bấm vào các ô bên dưới nhé!</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-hand-finger"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" />
            <path d="M11 11.5v-2a1.5 1.5 0 1 1 3 0v2.5" />
            <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" />
            <path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />
          </svg>
        </div>
        <div className="item">
          <a
            className="itemLink"
            href="https://www.facebook.com/profile.php?id=100094284863683"
            rel="noopener noreferrer"
          >
            <img className="icon" src={Fb} alt="facebook" />
            <div className="text"> FACEBOOK</div>
          </a>
        </div>
        <div className="item">
          <a
            className="itemLink"
            href="https://www.youtube.com/@bshanhxuongkhop2054"
            rel="noopener noreferrer"
          >
            <img className="icon" src={Yt} alt="" />
            <div className="text"> YOUTUBE</div>
          </a>
        </div>
        <div className="item">
          <a className="itemLink" href="https://zaloapp.com/qr/p/1ish5otifvgtc">
            <img className="icon" src={Zalo} alt="" />
            <div className="text"> ZALO</div>
          </a>
        </div>
        <div className="item">
          <a
            className="itemLink"
            href="https://www.google.com/maps/dir//129+Phan+%C4%90%C3%ACnh+Ph%C3%B9ng,+Ch%C3%A2u+Ph%C3%BA+B,+Ch%C3%A2u+%C4%90%E1%BB%91c,+An+Giang,+Vi%E1%BB%87t+Nam/@10.7068433,105.1204859,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x310a26a889e15793:0x5da1468ab508cf6d!2m2!1d105.1230608!2d10.706838!3e0?hl=vi-VN&entry=ttu"
          >
            <img className="icon" src={GGmap} alt="" />
            <div className="text">ĐỊA CHỈ GOOGLE MAPS</div>
          </a>
        </div>
        <div className="item">
          <a className="itemLink" href="https://bshanh.vn">
            <img className="icon" src={Web} alt="" />
            <div className="text"> TRANG WEB</div>
          </a>
        </div>
        <div className="item">
        
          <a className="itemLink" href="tel:+84839306969">
            <img className="icon" src={Phone} alt="" />
            <div className="text">GỌI ĐIỆN TRỰC TIẾP</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
