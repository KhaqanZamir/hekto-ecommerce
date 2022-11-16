import {
  faEnvelope,
  faHeart,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faCartShopping,
  faPhone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <header>
      {/* ===== Top Header ===== */}
      <div className="w-full bg-purple h-auto">
        <div className="container h-auto items-center mx-auto">
          <div className="w-full min-h-[44px] flex flex-wrap gap-3 justify-between items-center p-3 md:p-0">
            <div className="flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-3 text-light-gray font-josefin text-sm md:text-base font-semibold min-w-max">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>user@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-light-gray font-josefin text-sm md:text-base font-semibold min-w-max">
                <FontAwesomeIcon icon={faPhone} />
                <span>(12345)67890</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <div className="flex items-baseline gap-2 text-light-gray font-josefin text-sm md:text-base font-semibold min-w-max">
                <span>Login</span>
                <FontAwesomeIcon width={14} icon={faUser} />
              </div>
              <div className="flex items-baseline gap-2 text-light-gray font-josefin text-sm md:text-base font-semibold min-w-max">
                <span>Wishlist</span>
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <div className="text-light-gray font-josefin text-sm md:text-base font-semibold min-w-max">
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Main Header ===== */}
      <div className="w-full bg-white h-auto my-3">
        <div className="container h-auto items-center mx-auto">
          <div className="hidden lg:flex items-center justify-between gap-5">
            <div className="flex items-center gap-28">
              <img className="" src={Logo} alt="" />
              <ul className="list-none flex items-baseline gap-7">
                <li>Home</li>
                <li>Pages</li>
                <li>Products</li>
                <li>Blog</li>
                <li>Shop</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="flex">
              <input
                className=" px-2 py-1 border-[2px] border-r-0 border-[#E7E6EF] outline-none"
                type={"text"}
                placeholder="Search"
              />
              <button className="bg-pink px-3">
                <FontAwesomeIcon color="white" icon={faSearch} />
              </button>
            </div>
          </div>
          <button className="block lg:hidden rounded-full w-9 h-9 bg-gray-400">
            <FontAwesomeIcon icon={faBars} />
          </button>
          {/* <div className="block lg:hidden absolute left-0 top-0 w-[315px] h-[100vh] bg-black">

          </div> */}
        </div>
      </div>
    </header>
  );
}
