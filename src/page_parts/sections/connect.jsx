import React from "react";
import Text from "../../components/text";
import TextTranslation from "../../components/lang";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "./sections.css";

// image
import connect from "../../assets/connect.png";

export default function Connect() {
  const sendMessage = (event) => {
    event.preventDefault();
    
    const token = '7940057045:AAHRFPvgUCo_7pqpXD6uq4li7-_DYx2J96g'; // Use environment variable
    const chatId = 6134458285;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // Get form data
    const name = event.target.elements.name.value; // Get input by name attribute
    const phoneNumber = event.target.elements.number.value;
    const info_user = `Ism: ${name}, Phone number: ${phoneNumber}`;

    axios.post(url, {
      chat_id: chatId,
      text: info_user
    })
    .then(() => {
      alert("Muvaffaqiyatli yuborildi!!!");
      event.target.reset(); 
    })
    .catch((error) => {
      console.error("Yuborishda xatolik:", error);
    });
  };

  const { t } = useTranslation();
  
  return (
    <div className="connect sm:my-[80px] my-[30px] ">
      <div className="container">
        <div className="connect_group w-full rounded-[18px]">
          <div className="connect_for_image w-full flex md:justify-start justify-center">
            <div className="connect_left sm:w-[400px] w-[90vw] md:ml-[20vw] m-[20px] flex flex-col gap-[20px] bg-white rounded-[18px] px-[25px] py-[40px]">
              <Text id_name='connect-title' f_weight="font-[700]">
                <TextTranslation txt="malumot" />
              </Text>
              <Text id_name='connect-title-txt' f_weight="font-[400]">
                <TextTranslation txt="malumot" />
              </Text>
              <form className="flex flex-col gap-[10px]" onSubmit={sendMessage}>
                <input
                  type="text"
                  name="name" // Changed from id to name
                  placeholder={t("ism")}
                  className="bg-gray-300 rounded-[5px] px-[15px] py-[2px] text-[18px]"
                  required
                />
                <input
                  type="text"
                  name="number" // Changed from id to name
                  placeholder="+998-94-033-72-12"
                  className="bg-gray-300 rounded-[5px] px-[15px] py-[2px] text-[18px]"
                  required
                />
                <input
                  type="submit"
                  value={t("yuborish")}
                  className="w-[100%] bg-green-700 text-white text-[18px] rounded-[5px] py-[5px]"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
