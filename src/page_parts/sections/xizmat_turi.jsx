import React from "react";
import Text from "../../components/text";
import TextTranslation from "../../components/lang";
import Animation from "../../components/animation";
import ConnectionBtn from "../../components/btn";

// images
import klapa from '../../assets/type1.jpg'
import tarakan from '../../assets/type2.jpg'
import chayon from '../../assets/type3.jpg'
import kemiruvchi from '../../assets/type4.jpg'
import burga from '../../assets/type5.jpg'

export default function Xizmat_turlari() {
  return (
    <div className="xizmat_turlari my-[150px] ">
      <div className="container">
        <div className="flex flex-col gap-[50px]">
          <Text id_name='titles' f_weight="font-[700]" >
            <TextTranslation txt="Xizmat_turi" />
          </Text>
          <Animation>
            <div id="xizmat-turi-div" className="xizmat_turi_group w-full">

              <div  className="xizmat_turi_card flex flex-col justify-between gap-[20px] p-[20px] pt-[30px] rounded-[18px] bg-green-200  ">
                <Text id_name='xizmat-turi-title' t_color="text-green-950" f_weight="font-[700]" >
                    <TextTranslation txt="klapa" />
                </Text>
                <Text id_name='xizmat-turi-txt' f_weight="font-[400]" t_color="text-gray-600"  >
                    <TextTranslation txt="klapa_txt" />
                </Text>
                <div className="flex w-full justify-between items-end " >
                    <ConnectionBtn id_name="xizmat_turi" />
                    <img src={klapa} loading="lazy" className="rounded-[100%] sm:w-auto w-[100px] " alt="tarakan image" />
                </div>
              </div>

              <div  className="xizmat_turi_card flex flex-col justify-between gap-[20px] p-[20px] pt-[50px] rounded-[18px] bg-green-200  ">
                <Text id_name='xizmat-turi-title' t_color="text-green-950" f_weight="font-[700]" >
                    <TextTranslation txt="tarakan" />
                </Text>
                <Text id_name='xizmat-turi-txt' f_weight="font-[400]" t_color="text-gray-600"  >
                    <TextTranslation txt="tarakan_txt" />
                </Text>
                <div className="flex w-full justify-between items-end " >
                    <ConnectionBtn id_name="xizmat_turi" />
                    <img src={tarakan} loading="lazy" className="rounded-[100%] sm:w-auto w-[100px] " alt="tarakan image" />
                </div>
              </div>

              <div  className="xizmat_turi_card flex flex-col gap-[20px] justify-between p-[20px] pt-[50px] rounded-[18px] bg-green-200  ">
                <Text id_name='xizmat-turi-title' t_color="text-green-950" f_weight="font-[700]" >
                    <TextTranslation txt="chayon" />
                </Text>
                <Text id_name='xizmat-turi-txt' f_weight="font-[400]" t_color="text-gray-600"  >
                    <TextTranslation txt="chayon_txt" />
                </Text>
                <div className="flex w-full justify-between items-end " >
                    <ConnectionBtn id_name="xizmat_turi" />
                    <img src={chayon} loading="lazy" className="rounded-[100%] sm:w-auto w-[100px] " alt="tarakan image" />
                </div>
              </div>

              <div  className="xizmat_turi_card flex flex-col gap-[20px] justify-between p-[20px] pt-[50px] rounded-[18px] bg-green-200  ">
                <Text id_name='xizmat-turi-title' t_color="text-green-950" f_weight="font-[700]" >
                    <TextTranslation txt="kemiruvchi" />
                </Text>
                <Text id_name='xizmat-turi-txt' f_weight="font-[400]" t_color="text-gray-600"  >
                    <TextTranslation txt="kemiruvchi_txt" />
                </Text>
                <div className="flex w-full justify-between items-end " >
                    <ConnectionBtn id_name="xizmat_turi" />
                    <img src={kemiruvchi} loading="lazy" className="rounded-[100%] sm:w-auto w-[100px] " alt="tarakan image" />
                </div>
              </div>

              <div  className="xizmat_turi_card flex flex-col gap-[20px] justify-content p-[20px] pt-[50px] rounded-[18px] bg-green-200  ">
                <Text id_name='xizmat-turi-title' t_color="text-green-950" f_weight="font-[700]" >
                    <TextTranslation txt="burga" />
                </Text>
                <Text id_name='xizmat-turi-txt' f_weight="font-[400]" t_color="text-gray-600"  >
                    <TextTranslation txt="burga_txt" />
                </Text>
                <div className="flex w-full justify-between items-end " >
                    <ConnectionBtn id_name="xizmat_turi" />
                    <img src={burga} loading="lazy" className="rounded-[100%] sm:w-auto w-[100px] " alt="tarakan image" />
                </div>
              </div>

            </div>
          </Animation>
        </div>
      </div>
    </div>
  );
}
