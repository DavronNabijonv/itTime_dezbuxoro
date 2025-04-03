import React from "react";
import Text from "../../components/text";
import Animation from "../../components/animation";
import TextTranslation from "../../components/lang";
import ConnectionBtn from "../../components/btn";
import "./sections.css";

export default function Section_about() {
  return (
    <div className="about my-[100px] 2xl:px-[0] xl:px-[20px] sm:px-[10px] px-[5px] ">
      <div className="container">
        <div className="about_title border-b-[1px] pb-[50px] border-gray-600 ">
          <Animation>
            <Text f_size="text-[30px]" sm_size="text-[35px]" f_weight="font-[600]">
              <h1 className=" w-[100%] ">About us</h1>
            </Text>
          </Animation>
        </div>

        <div className="my-[50px]">
          <Animation>
            <div className="about_group flex  md:flex-nowrap flex-wrap gap-[15px] justify-between ">
              <div className="about1 flex md:border-none border-[1px] border-gray-400 flex-col gap-[20px] md:p-[0] p-[10px] rounded-[18px] ">
                <div className="about1_icon text-[80px] text-[#01510b] ">
                  <svg
                    role="img"
                    aria-labelledby="icon1-title"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    class="about__list-icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    loading="lazy"
                  >
                    <title id="icon1-title">about__icon1</title>
                    <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"></path>
                  </svg>
                </div>

                <Text f_size=" text-[25px] " f_weight=" font-[700] ">
                  <h1 className="about1_title">
                    <TextTranslation txt="Haqimizda_1" />
                  </h1>
                </Text>

                <Text f_size="text-[18px]" t_color="text-teal-900">
                  <p className="about1_txt">
                    <TextTranslation txt="Haqimizda_1_txt" />
                  </p>
                </Text>
              </div>

              <div className="about2 flex md:border-none border-[1px] border-gray-400  flex-col gap-[20px] md:p-[0] p-[10px] rounded-[18px] ">
                <div className="about2_icon text-[80px] text-[#01510b] ">
                  <svg
                    role="img"
                    aria-labelledby="icon2-title"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 256 256"
                    class="about__list-icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    loading="lazy"
                  >
                    <title id="icon2-title">about__icon2</title>
                    <path
                      d="M176,96a48,48,0,1,1-48-48A48,48,0,0,1,176,96Z"
                      opacity="0.2"
                    ></path>
                    <path d="M216,96A88,88,0,1,0,72,163.83V240a8,8,0,0,0,11.58,7.16L128,225l44.43,22.21A8.07,8.07,0,0,0,176,248a8,8,0,0,0,8-8V163.83A87.85,87.85,0,0,0,216,96ZM56,96a72,72,0,1,1,72,72A72.08,72.08,0,0,1,56,96ZM168,227.06l-36.43-18.21a8,8,0,0,0-7.16,0L88,227.06V174.37a87.89,87.89,0,0,0,80,0ZM128,152A56,56,0,1,0,72,96,56.06,56.06,0,0,0,128,56Z"></path>
                  </svg>
                </div>
                <Text f_size=" text-[25px] " f_weight=" font-[700] ">
                  <h1 className="about2_title">
                    <TextTranslation txt="Haqimizda_2" />
                  </h1>
                </Text>

                <Text f_size="text-[18px]" t_color="text-teal-900">
                  <p className="about2_txt">
                    <TextTranslation txt="Haqimizda_2_txt" />
                  </p>
                </Text>
              </div>
              <div className="about3 flex md:border-none border-[1px] border-gray-400  flex-col gap-[20px] md:p-[0] p-[10px] rounded-[18px] ">
                <div className="about3_icon text-[80px] text-[#01510b] ">
                  <svg
                    role="img"
                    aria-labelledby="icon3-title"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="about__list-icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    loading="lazy"
                  >
                    <title id="icon3-title">about__icon3</title>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12.22 19.85c-.18.18-.5.21-.71 0a.504.504 0 010-.71l3.39-3.39-1.41-1.41-3.39 3.39c-.19.2-.51.19-.71 0a.504.504 0 010-.71l3.39-3.39-1.41-1.41-3.39 3.39c-.18.18-.5.21-.71 0a.513.513 0 010-.71l3.39-3.39-1.42-1.41-3.39 3.39c-.18.18-.5.21-.71 0a.513.513 0 010-.71L9.52 8.4l1.87 1.86c.95.95 2.59.94 3.54 0 .98-.98.98-2.56 0-3.54l-1.86-1.86.28-.28c.78-.78 2.05-.78 2.83 0l4.24 4.24c.78.78.78 2.05 0 2.83l-8.2 8.2zm9.61-6.78a4.008 4.008 0 000-5.66l-4.24-4.24a4.008 4.008 0 00-5.66 0l-.28.28-.28-.28a4.008 4.008 0 00-5.66 0L2.17 6.71a3.992 3.992 0 00-.4 5.19l1.45-1.45a2 2 0 01.37-2.33l3.54-3.54c.78-.78 2.05-.78 2.83 0l3.56 3.56c.18.18.21.5 0 .71-.21.21-.53.18-.71 0L9.52 5.57l-5.8 5.79c-.98.97-.98 2.56 0 3.54.39.39.89.63 1.42.7a2.458 2.458 0 002.12 2.12 2.458 2.458 0 002.12 2.12c.07.54.31 1.03.7 1.42.47.47 1.1.73 1.77.73.67 0 1.3-.26 1.77-.73l8.21-8.19z"></path>
                  </svg>
                </div>
                <Text f_size=" text-[25px] " f_weight=" font-[700] ">
                  <h1 className="about3_title">
                    <TextTranslation txt="Haqimizda_3" />
                  </h1>
                </Text>

                <Text f_size="text-[18px]" t_color="text-teal-900">
                  <p className="about3_txt">
                    <TextTranslation txt="Haqimizda_3_txt" />
                  </p>
                </Text>
              </div>
            </div>
          </Animation>
        </div>

        <div className="hisob my-[120px]">
          <div className="container">
            <div className="hisob_card w-full rounded-[18px]">
              <div className="hisob_opacity w-full rounded-[18px] " >
                <div className="hisob_txt_group md:w-[450px] w-full m-[0] flex flex-col gap-[20px]">
                  <Animation>
                    <div className="flex flex-col gap-[20px]">
                      <Text
                        f_size="text-[25px]"
                        sm_size="text-[35px]"
                        t_color="text-white"
                        f_weight="font-[800]"
                      >
                        <TextTranslation txt="Hisoblang" />
                      </Text>
                      <Text f_size="text-[23px]"  t_color="text-white" f_weight="font-[600]">
                        <TextTranslation txt="Hisoblang_txt" />
                      </Text>
                    </div>
                  </Animation>
                  <ConnectionBtn id_name="xizmat_btn" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
