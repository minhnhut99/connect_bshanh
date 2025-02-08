import React, { useState } from "react";
import "./Home.scss";
import Fb from "../img/facebook.png";
import Phone from "../img/phone.png";
import Zalo from "../img/zalo.png";
import Tiktok from "../img/tiktok.png";
import Yt from "../img/youtube.png";
import Web from "../img/web.webp";
import GGmap from "../img/ggmap.png";
const Home = () => {
  const [preventDefaultZalo, setPreventDefaultZalo] = useState(false);

  const handleZaloClick = (event) => {
    if (preventDefaultZalo) {
      event.preventDefault();
    }
  };
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
          <a
            className="itemLink"
            href="https://zalo.me/644304092688832402?fbclid=IwAR0tlj_2PDLC58oQzaZRiCPMnDdumASJU69OQWOYbtXNcqSCpjSdlKcEE5A_aem_AXSj7Lpbudgb3LJjz8s51NrBAFoPlV4kQZ0V_cJdougtUUl5YGROqPih2QN6WtosyJ3b5YmcAlzMlIzovy7nbomj"
            rel="noopener noreferrer"
            onClick={handleZaloClick}
          >
            <img className="icon" src={Zalo} alt="" />
            <div className="text"> ZALO</div>
          </a>
        </div>
        <div className="item">
          <a
            className="itemLink"
            href="https://www.tiktok.com/@bshanh.vn?_r=1&_d=secCgYIASAHKAESPgo83LToNv8tSXpjsMQp6URT%2B2FK4RuNsoKgLOTtAL16Dr2BIt5bIR8bgb3oEZs%2F8CbpC2PKTqJyUbUUIfNJGgA%3D&checksum=674daf9bdee43837b7a59969be0a432307f58a67eb5d80dff74f7ccb440699b7&sec_uid=MS4wLjABAAAAw7xyAYLGA7wSRplCupQmNB6tgZspI_OfUIYHlcjuddxkVZyBEWPph2D8yzajONpJ&sec_user_id=MS4wLjABAAAADic9cttkxiwVeQ-XWLyLQiFqe8mnuCMoJM3n8k9E9oCUrOZHWM0USXnUxfWVAfXB&share_app_id=1180&share_author_id=7254599050832643090&share_link_id=081f278d-f21f-43df-bedd-badca94417aa&sharer_language=vi&social_share_type=5&source=h5_t&timestamp=1738985834&u_code=dc6g5ah3d1f0im&ugbiz_name=ACCOUNT&user_id=6821837728368657409&utm_campaign=client_share&utm_medium=android&utm_source=copy"
          >
            <img className="icon" src={Tiktok} alt="" />
            <div className="text"> TIKTOK</div>
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
