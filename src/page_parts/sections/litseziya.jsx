import React from "react";
import "./sections.css";

// images
import clear from "../../assets/official.jpg";
import icon from "../../assets/icon.svg";
import Text from "../../components/text";
import TextTranslation from "../../components/lang";

export default function Litseziya() {
  return (
    <div className="litsenziya 2xl:px-[0] xl:px-[20px] sm:px-[10px] px-[5px] ">
      <div className="container">
        <div className="litsenziya_grp w-full rounded-[18px] flex items-center md:justify-between justify-center  py-[30px] px-[50px] ">
          <img
            src={clear}
            loading="lazy"
            className=" md:flex hidden rounded-[18px] w-[48%] "
            alt="clear image"
          />
          <div className="litsenziya_right md:w-[45%] flex flex-col gap-[30px] ">
            <img
              src={icon}
              loading="lazy"
              className="w-[100px] "
              alt="icon image"
            />
            <Text
              f_size="text-[30px]"
              f_weight="font-[800]"
              t_color="text-white"
            >
              <TextTranslation txt="kafolat" />
            </Text>
            <button className="border-none rounded-[25px] text-[23px] font-[800] bg-white text-black py-[8px] px-[16px] w-[200px]">
              <TextTranslation txt="Bog`lanish" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
