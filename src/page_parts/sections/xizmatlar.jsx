import React from "react";
import Animation from "../../components/animation";
import Text from "../../components/text";
import TextTranslation from "../../components/lang";
import '../../App.css';


// images
import korono from '../../assets/error.png';
import burga from '../../assets/error2.png';
import kalamush from '../../assets/error3.png';



export default function Xizmatlar() {
  return (
    <div className="xizmatlar sm:my-[200px] my-[50px] ">
      <div className="container">
        <div className="xizmat w-full flex flex-col gap-[30px]">
          <Animation>
            <div className="xizmat_title flex flex-col gap-[35px]">
              <Text id_name='titles' f_weight="font-[750]">
                <TextTranslation txt="Xizmatlar" />
              </Text>
              <Text id_name='titles-txt'  t_color="text-gray-600">
                <TextTranslation txt="Xizmatlar_title" />
              </Text>
            </div>
          </Animation>
          <Animation>
            <div className="xizmat1 p-[20px] flex md:flex-row flex-col justify-around items-center gap-[20px] w-full rounded-[18px] border-[1px] border-gray-700 ">
                <img id="xizmat-img" src={korono} loading="lazy" alt="dezbuxoro dezinfeksiya markazi" />
                <div className="xizmat1_txt md:w-[65%] flex flex-col gap-[20px]">
                    <Text id_name='xizmat-title' f_weight="font-[700]" t_color="text-green-950" >
                        <TextTranslation txt="x_tur1" />
                    </Text>
                    <Text id_name='xizmat-txt' t_color="text-gray-600" >
                        <TextTranslation txt="x_tur1_txt" />
                    </Text>
                </div>
            </div>
          </Animation>
          <Animation>
            <div className="xizmat2 p-[20px] flex md:flex-row flex-col justify-around items-center gap-[20px] w-full rounded-[18px] border-[1px] border-gray-700 ">
                <img src={burga} id="xizmat-img" loading="lazy" alt="dezbuxoro dezinfeksiya markazi" />
                <div className="xizmat2_txt md:w-[65%] flex flex-col gap-[20px] ">
                    <Text id_name='xizmat-title' f_weight="font-[700]" t_color="text-green-950" >
                        <TextTranslation txt="x_tur2" />
                    </Text>
                    <Text id_name='xizmat-txt' t_color="text-gray-600" >
                        <TextTranslation txt="x_tur2_txt" />
                    </Text>
                </div>
            </div>
          </Animation>
          <Animation>
            <div className="xizmat3 p-[20px] flex md:flex-row flex-col items-center justify-around gap-[20px] w-full rounded-[18px] border-[1px] border-gray-700 p-[15px] ">
                <img src={kalamush} id="xizmat-img" loading="lazy" alt="dezbuxoro dezinfeksiya markazi" />
                <div className="xizmat3_txt md:w-[65%] flex flex-col gap-[20px] ">
                    <Text id_name='xizmat-title' f_weight="font-[700]" t_color="text-green-950" >
                        <TextTranslation txt="x_tur3" />
                    </Text>
                    <Text id_name='xizmat-txt' t_color="text-gray-600" >
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
