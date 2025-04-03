import React from "react";
import "../../App.css";
import Text from "../../components/text";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone, FiArrowUpRight } from "react-icons/fi";

// image and icons
import logo from "../../assets/logo.png";
import Animation from "../../components/animation";
import TextTranslation from "../../components/lang";
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <div className="w-full mt-[50px] border-t-[2px] border-gray-600 pt-[90px] pb-[150px]">
      <div className="container  ">
        <Animation>
          <div className="flex flex-wrap md:p-[0] px-[50px] flex-row items-center gap-[100px]">
            <Link to="/" duration={500} offset={-200}>
              <img
                src={logo}
                loading="lazy"
                alt="logo image"
                className="w-[280px]"
              />
            </Link>
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center gap-[20px]">
                <button className="border-[2px] border-gray-300 rounded-[8px] pt-[10px] p-[8px] text-[18px]">
                  <CiLocationOn />
                </button>
                <Text f_size="text-[20px]" f_weight={"medium"}>
                  {" "}
                  <TextTranslation txt="shahar" />{" "}
                </Text>
                <FiArrowUpRight className="text-[20px] font-bold" />
              </div>
              <div className="flex gap-[20px] items-center">
                <button className="border-[2px] border-gray-300 rounded-[8px] pt-[10px] p-[8px] text-[18px]">
                  <FiPhone />
                </button>
                <Text f_size="text-[20px]" f_weight={"medium"}>
                  {" "}
                  +998 94 033 72 12{" "}
                </Text>
                <FiArrowUpRight className="text-[20px] font-bold" />
              </div>
            </div>
          </div>
        </Animation>
      </div>
    </div>
  );
}
