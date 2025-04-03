import React from "react";
import { NavLink } from "react-router-dom";
import TextTranslation from "./lang";
import "../App.css";
import { Link } from 'react-scroll';

export default function ConnectionBtn({ id_name }) {
  return (
    <Link
    to='connect'
    smooth={true} duration={500} offset={-200}
      id={id_name}
      className=" bg-lime-700 hover:bg-lime-600 text-white hover:cursor-pointer font-bold w-auto rounded-[25px] pb-[5px] pl-[35px] pr-[35px] "
    >
      <TextTranslation txt="Bog`lanish" />
    </Link>
  );
}
