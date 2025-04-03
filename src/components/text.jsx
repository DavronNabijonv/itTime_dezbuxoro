import React from "react";
import '../App.css';

export default function Text({
  children,
  t_color = "text-black",
  f_size = "text-base",
  sm_size = "text-[20px]",
  txt_hover = false,
  txt_hover_color = "text-green-500",
  f_weight="font-normal",
  id_name
}) {
  return (
    <div id={id_name}
      className={`w-auto ${t_color} sm:${sm_size} ${f_size}  ${f_weight} font-sans ${
        txt_hover ? `hover:${txt_hover_color}` : ""
      }`}
    >
      {children}
    </div>
  );
}
