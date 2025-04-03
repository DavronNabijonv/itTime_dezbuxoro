import React from "react";
import "./sections.css";

// images
import clear from "../../assets/official.jpg";
import icon from "../../assets/icon.svg";
import Text from "../../components/text";
import TextTranslation from "../../components/lang";

export default function Litseziya() {
  return (
    <div className="litsenziya ">
      <div className="container">
        <div className="litsenziya_grp w-full rounded-[18px] gap-[20px] flex items-center md:justify-between justify-center  py-[20px] px-[30px] ">
          <img
            id="litsenziya-img"
            src={clear}
            loading="lazy"
            className=" md:flex hidden rounded-[18px] "
            alt="clear image"
          />
          <div id="litsenziya-div" className="litsenziya_right flex flex-col gap-[30px] ">
            <img
              id="litsenziya-img-icon"
              src={icon}
              loading="lazy"
              className="w-[100px] "
              alt="icon image"
            />
            <Text
              id_name="litsenziya-txt"
              f_weight="font-[800]"
              t_color="text-white"
            >
              <TextTranslation txt="kafolat" />
            </Text>
            <button
              id="litsenziya-btn"
              className="border-none rounded-[25px] font-[800] bg-white text-black py-[8px] px-[16px]"
            >
              <TextTranslation txt="Bog`lanish" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
