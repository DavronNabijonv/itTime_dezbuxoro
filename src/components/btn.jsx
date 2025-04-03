import React from "react";
import { NavLink } from "react-router-dom";
import TextTranslation from "./lang";
import "../App.css";
import { Link } from "react-scroll";

export default function ConnectionBtn({ id_name, close_togle }) {
  return (
    <Link
      to="connect"
      smooth={true}
      duration={500}
      offset={-200}
      id={id_name}
      onClick={close_togle}
      className=" bg-lime-700 hover:bg-lime-600 text-white hover:cursor-pointer font-bold w-auto rounded-[25px] py-[5px] pl-[35px] pr-[35px] "
    >
      <TextTranslation txt="Bog`lanish" />
    </Link>
  );
}
