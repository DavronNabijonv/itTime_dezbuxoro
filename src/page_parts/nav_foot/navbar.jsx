import React from "react";
import "../../App.css";
import { NavLink} from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import TextTranslation from "../../components/lang";
import "./navbar.css";
import { Link } from 'react-scroll';

// logo and icons image
import logo from "../../assets/logo.png";
import ConnectionBtn from "../../components/btn";

export default function Navbar() {
  // Togle variable
  const [toggle, setToggle] = useState(false);
  const [togglerIcon, setTogglerIcon] = useState("toggler");

  // change active toggler
  const changeToggler = () => {
    // for show up responsive navbar
    setToggle(!toggle);

    // animation class for toggle icon
    togglerIcon === "toggler"
      ? setTogglerIcon("toggler toggle")
      : setTogglerIcon("toggler");
  };

  // useTranslation variable
  const { i18n } = useTranslation();

  // change language function
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div
      className={`w-[100%] bg-white border-gray shadow-lg shadow-gray-200 fixed z-[1000] top-0`}
    >
      <div className="container">
        <div
          className={`w-full flex justify-between items-center pb-[10px] pt-[10px] pr-[10px] `}
        >
          <Link to="/" smooth={true} duration={500} offset={-200} >
            <img
              className={`logo_img w-[225px]`}
              loading="lazy"
              src={logo}
              alt="logo image"
            />
          </Link>
          <div
            className={`lg:w-auto flex justify-around items-center lg:gap-[10px] gap-[5px]`}
          >
            <div className="nav_link_group bg-white flex items-center lg:gap-[20px] md:gap-[8px]">
              <LinkGroup />
            </div>

            {/* change language part */}
            <div className="w-[110px] flex flex-col justify-center items-center rounded-[15px] ">
              <select
                onChange={handleChange}
                className="flex items-center gap-[18px] pt-[3px] pb-[3px] pl-[8px] pr-[8px] bg-white lg:text-[18px] text-gray-700 font-bold border-[2px] border-black rounded-[14px]"
              >
                <option
                  value={"uz"}
                  className="w-full hover:text-white hover:bg-blue-800 text-gray-800 rounded-t-lg lg:text-[18px] p-[2px]"
                >
                  Uzbek
                </option>
                <option
                  value={"ru"}
                  className="w-full hover:text-white hover:bg-blue-800 text-gray-800 lg:text-[18px] p-[2px]"
                >
                  Русский
                </option>
                <option
                  value={"en"}
                  className="w-full hover:text-white hover:bg-blue-800 text-gray-800 rounded-b-lg lg:text-[18px] p-[2px]"
                >
                  English
                </option>
              </select>
            </div>

            <div onClick={changeToggler} className={togglerIcon}>
              <div className="toggle_item1"></div>
              <div className="toggle_item2"></div>
              <div className="toggle_item3"></div>
            </div>

            <div
              className={
                toggle ? "nav_link_group_phone active" : "nav_link_group_phone"
              }
            >
              <div onClick={changeToggler} className={togglerIcon}>
                <div className="toggle_item1"></div>
                <div className="toggle_item2"></div>
                <div className="toggle_item3"></div>
              </div>
              <div className=" flex flex-col gap-[20px] pl-[30px] ">
                <LinkGroup togle_func={changeToggler} />
              </div>
              <ConnectionBtn id_name="togle_navbar_btn" close_togle={changeToggler} />
            </div>

            <ConnectionBtn id_name="navbar_btn" />
          </div>
        </div>
      </div>
      <div onClick={changeToggler} className={toggle ? "overflow active" : "overflow"}></div>
    </div>
  );
}

function LinkGroup({togle_func}) {
  return (
    <>
      <Link to='home' smooth={true} duration={500} offset={-200} onClick={togle_func}
        className={`lg:text-[25px]  md:text-[16px] text-[25px] hover:cursor-pointer text-gray-500 hover:text-black`}
      >
        <TextTranslation txt="Asosiy" />
      </Link>
      <Link to='about' smooth={true} duration={500} offset={-200} onClick={togle_func}
        className={`lg:text-[25px] md:text-[16px] text-[25px] hover:cursor-pointer text-gray-500 hover:text-black`}
      >
        <TextTranslation txt="Biz_xaqimizda" />
      </Link>
      <Link to='service' smooth={true} duration={500} offset={-200} onClick={togle_func}
        className={`lg:text-[25px] md:text-[16px] text-[25px] hover:cursor-pointer text-gray-500 hover:text-black`}
      >
        <TextTranslation txt="Xizmatlar" />
      </Link>
      <Link to='faq' smooth={true} duration={500} offset={-200} onClick={togle_func}
        className={`lg:text-[25px] md:text-[16px] text-[25px] hover:cursor-pointer text-gray-500 hover:text-black`}
      >
        <TextTranslation txt="FAQ" />
      </Link>
    </>
  );
}
