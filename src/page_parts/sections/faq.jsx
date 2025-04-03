import React, { useState } from "react";
import Text from "../../components/text";
import TextTranslation from "../../components/lang";
import Animation from "../../components/animation";

// icons
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

export default function Faq() {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);

  const handleFaq = (index) => {
    if (index === 1) {
      setQuestion1(!question1);
      setQuestion2(false);
      setQuestion3(false);
    } else if (index === 2) {
      setQuestion2(!question2);
      setQuestion1(false);
      setQuestion3(false);
    } else if (index === 3) {
      setQuestion3(!question3);
      setQuestion2(false);
      setQuestion1(false);
    } else {
      setQuestion1(false);
      setQuestion2(false);
      setQuestion3(false);
    }
  };

  return (
    <div className="faq my-[150px] ">
      <div className="container  ">
        <Animation>
          <Text
            id_name='titles'
            f_weight="font-[800]"
            t_color="text-green-950"
          >
            <TextTranslation txt="FAQ" />
          </Text>
        </Animation>
        <div onClick={()=>handleFaq(1)} className="faq_question flex flex-col gap-[20px] border-b-[1px] mt-[30px] py-[30px] pb-[30px] border-gray-500">
          <div className="question flex w-full justify-between items-center ">
            <Text
              id_name='faq-savol'
              f_weight="font-[700]"
              t_color="text-gray-500"
            >
              <TextTranslation txt="savol1" />
            </Text>
            <button
              className="text=gray-700 text-[50px] text-gray-500 "
            >
              {question1 ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </button>
          </div>
          {question1 && (
            <Animation>
              <Text id_name='faq-javob' t_color="text-gray-600">
                <TextTranslation txt="savol1_txt" />
              </Text>
            </Animation>
          )}
        </div>

        <div onClick={() => handleFaq(2)} className="faq_question flex flex-col gap-[20px] border-b-[1px] mt-[30px] py-[30px] pb-[40px] border-gray-500">
          <div className="question flex w-full justify-between items-center ">
            <Text
              id_name='faq-savol'
              f_weight="font-[700]"
              t_color="text-gray-500"
            >
              <TextTranslation txt="savol2" />
            </Text>
            <button
              className="text=gray-700 text-[50px] text-gray-500 "
            >
              {question2 ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </button>
          </div>
          {question2 && (
            <Animation>
              <Text id_name='faq-javob' t_color="text-gray-600">
                <TextTranslation txt="savol2_txt" />
              </Text>
            </Animation>
          )}
        </div>

        <div onClick={() => handleFaq(3)} className="faq_question flex flex-col gap-[20px] border-b-[1px] mt-[30px] py-[30px] pb-[40px] border-gray-500">
          <div className="question flex w-full justify-between items-center ">
            <Text
              id_name='faq-savol'
              f_weight="font-[700]"
              t_color="text-gray-500"
            >
              <TextTranslation txt="savol3" />
            </Text>
            <button
              className="text=gray-700 text-[50px] text-gray-500 "
            >
              {question3 ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </button>
          </div>
          {question3 && (
            <Animation>
              <Text id_name='faq-javob' t_color="text-gray-600">
                <TextTranslation txt="savol3_txt" />
              </Text>
            </Animation>
          )}
        </div>
      </div>
    </div>
  );
}
