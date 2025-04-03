import React from "react";
import Text from "../../components/text";
import TextTranslation from "../../components/lang";
import "./sections.css";

// image
import dezinf from "../../assets/dezinf.webp";
import ConnectionBtn from "../../components/btn";
import Animation from "../../components/animation";

export default function Section_home() {
  return (
    <div id="home" className="homeSection md:my-[0] mt-[120px] 2xl:px-[0] xl:px-[20px] sm:px-[10px] px-[5px] ">
      <div className="container">
        <div className={`w-full flex mt-[10vw]`}>
          <div className=" homeSection_left md:w-[50%] py-[20px] flex flex-col gap-[20px] ">
            <Animation>
              <p className="title">
                <Text
                id_name="home_txt"
                  t_color="text-green-800"
                  f_size="text-[35px]"
                  sm_size="text-[55px]"
                  f_weight="font-[700]"
                >
                  <TextTranslation txt="Xizmat" />
                </Text>
              </p>
            </Animation>
            <Animation>
              <p className="title_text w-[70%]">
                <Text f_size="text-[22px]" id_name="home_txt">
                  <TextTranslation txt="Xizmat_txt" />
                </Text>
              </p>
            </Animation>
            <ConnectionBtn id_name="xizmat_btn" />
          </div>
          <div className="homeSection_right md:w-[50%] h-auto md:flex none ">
            <img
              className=" w-[100%] h-auto rounded-[16px] "
              src={dezinf}
              loading="lazy"
              alt="dezBuxoro.uz"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
