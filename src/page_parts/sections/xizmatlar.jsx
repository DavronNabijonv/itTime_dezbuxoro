import React from "react";
import Animation from "../../components/animation";
import Text from "../../components/text";
import TextTranslation from "../../components/lang";


// images
import korono from '../../assets/error.png';
import burga from '../../assets/error2.png';
import kalamush from '../../assets/error3.png';



export default function Xizmatlar() {
  return (
    <div className="xizmatlar my-[200px] 2xl:px-[0] xl:px-[20px] sm:px-[10px] px-[5px] ">
      <div className="container">
        <div className="xizmat w-full flex flex-col gap-[30px]">
          <Animation>
            <div className="xizmat_title flex flex-col gap-[35px]">
              <Text f_size="text-[30px]" sm_size="text-[50px]" f_weight="font-[750]">
                <TextTranslation txt="Xizmatlar" />
              </Text>
              <Text f_size="text-[25px]"  t_color="text-gray-600">
                <TextTranslation txt="Xizmatlar_title" />
              </Text>
            </div>
          </Animation>
          <Animation>
            <div className="xizmat1 p-[20px] md:px-[70px] flex md:flex-row flex-col justify-between items-center gap-[20px] w-full rounded-[18px] border-[1px] border-gray-700 ">
                <img src={korono} className="w-[300px]" loading="lazy" alt="dezbuxoro dezinfeksiya markazi" />
                <div className="xizmat1_txt md:w-[65%] flex flex-col gap-[20px] text-center">
                    <Text f_size="text-[35px]" f_weight="font-[700]" t_color="text-green-950" >
                        <TextTranslation txt="x_tur1" />
                    </Text>
                    <Text f_size="text-[20px]  " t_color="text-gray-600" >
                        <TextTranslation txt="x_tur1_txt" />
                    </Text>
                </div>
            </div>
          </Animation>
          <Animation>
            <div className="xizmat2 p-[20px] md:px-[70px] flex md:flex-row flex-col justify-between items-center gap-[20px] w-full rounded-[18px] border-[1px] border-gray-700 ">
                <img src={burga} className="w-[300px]" loading="lazy" alt="dezbuxoro dezinfeksiya markazi" />
                <div className="xizmat2_txt md:w-[65%] flex flex-col gap-[20px] text-center ">
                    <Text f_size="text-[35px]" f_weight="font-[700]" t_color="text-green-950" >
                        <TextTranslation txt="x_tur2" />
                    </Text>
                    <Text f_size="text-[20px]  " t_color="text-gray-600" >
                        <TextTranslation txt="x_tur2_txt" />
                    </Text>
                </div>
            </div>
          </Animation>
          <Animation>
            <div className="xizmat3 p-[20px] md:px-[70px] flex md:flex-row flex-col items-center gap-[20px] w-full rounded-[18px] border-[1px] border-gray-700 p-[15px] ">
                <img src={kalamush} className="w-[300px]" loading="lazy" alt="dezbuxoro dezinfeksiya markazi" />
                <div className="xizmat3_txt md:w-[65%] flex flex-col gap-[20px] text-center ">
                    <Text f_size="text-[35px]" f_weight="font-[700]" t_color="text-green-950" >
                        <TextTranslation txt="x_tur3" />
                    </Text>
                    <Text f_size="text-[20px]  " t_color="text-gray-600" >
                        <TextTranslation txt="x_tur3_txt" />
                    </Text>
                </div>
            </div>
          </Animation>
        </div>
      </div>
    </div>
  );
}
