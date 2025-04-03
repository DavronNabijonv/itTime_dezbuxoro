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
    <div className="xizmat_turlari my-[150px] 2xl:px-[0] xl:px-[20px] sm:px-[10px] px-[5px] ">
      <div className="container">
        <div className="flex flex-col gap-[50px]">
          <Text f_size="text-[50px]" f_weight="font-[700]" sm_size="text-[30px]" >
            <TextTranslation txt="Xizmat_turi" />
          </Text>
          <Animation>
            <div className="xizmat_turi_group w-full flex flex-wrap lg:justify-start justify-center gap-[30px] ">
              <div className="xizmat_turi_card flex flex-col gap-[20px] md:w-[440px] p-[30px] pt-[50px] rounded-[18px] bg-green-200  ">
                <Text f_size="text-[35px]" sm_size="text-[25px]" t_color="text-green-950" f_weight="font-[700]" >
                    <TextTranslation txt="klapa" />
                </Text>
                <Text f_size="text-[18px]" f_weight="font-[400]" t_color="text-gray-600"  >
                    <TextTranslation txt="klapa_txt" />
                </Text>
                <div className="flex w-full justify-between items-end " >
                    <ConnectionBtn id_name="xizmat_turi" />
                    <img src={klapa} loading="lazy" className="rounded-[100%] sm:w-auto w-[100px] " alt="tarakan image" />
                </div>
              </div>

              <div className="xizmat_turi_card flex flex-col gap-[20px] md:w-[440px] p-[30px] pt-[50px] rounded-[18px] bg-green-200  ">
                <Text f_size="text-[35px]" sm_size="text-[25px]" t_color="text-green-950" f_weight="font-[700]" >
                    <TextTranslation txt="tarakan" />
                </Text>
                <Text f_size="text-[18px]" f_weight="font-[400]" t_color="text-gray-600"  >
                    <TextTranslation txt="tarakan_txt" />
                </Text>
                <div className="flex w-full justify-between items-end " >
                    <ConnectionBtn id_name="xizmat_turi" />
                    <img src={tarakan} loading="lazy" className="rounded-[100%] sm:w-auto w-[100px] " alt="tarakan image" />
                </div>
              </div>

              <div className="xizmat_turi_card flex flex-col gap-[20px] md:w-[440px] p-[30px] pt-[50px] rounded-[18px] bg-green-200  ">
                <Text f_size="text-[35px]" sm_size="text-[25px]" t_color="text-green-950" f_weight="font-[700]" >
                    <TextTranslation txt="chayon" />
                </Text>
                <Text f_size="text-[18px]" f_weight="font-[400]" t_color="text-gray-600"  >
                    <TextTranslation txt="chayon_txt" />
                </Text>
                <div className="flex w-full justify-between items-end " >
                    <ConnectionBtn id_name="xizmat_turi" />
                    <img src={chayon} loading="lazy" className="rounded-[100%] sm:w-auto w-[100px] " alt="tarakan image" />
                </div>
              </div>

              <div className="xizmat_turi_card flex flex-col gap-[20px] md:w-[440px] p-[30px] pt-[50px] rounded-[18px] bg-green-200  ">
                <Text f_size="text-[35px]" sm_size="text-[25px]" t_color="text-green-950" f_weight="font-[700]" >
                    <TextTranslation txt="kemiruvchi" />
                </Text>
                <Text f_size="text-[18px]" f_weight="font-[400]" t_color="text-gray-600"  >
                    <TextTranslation txt="kemiruvchi_txt" />
                </Text>
                <div className="flex w-full justify-between items-end " >
                    <ConnectionBtn id_name="xizmat_turi" />
                    <img src={kemiruvchi} loading="lazy" className="rounded-[100%] sm:w-auto w-[100px] " alt="tarakan image" />
                </div>
              </div>

              <div className="xizmat_turi_card flex flex-col gap-[20px] md:w-[440px] p-[30px] pt-[50px] rounded-[18px] bg-green-200  ">
                <Text f_size="text-[35px]" sm_size="text-[25px]" t_color="text-green-950" f_weight="font-[700]" >
                    <TextTranslation txt="burga" />
                </Text>
                <Text f_size="text-[18px]" f_weight="font-[400]" t_color="text-gray-600"  >
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
