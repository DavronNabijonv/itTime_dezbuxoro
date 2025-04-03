import React from "react";
import { PiTelegramLogo } from "react-icons/pi";
import "./telegram.css";

export default function Telegram() {
  return (
    <div id="animation">
      <div className="fixed z-[22222] bottom-[10px] right-[10px] rounded-full bg-green-900 text-[35px] text-white p-[10px]">
        <a
          href="https://t.me/ndx_09"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          <PiTelegramLogo />
        </a>
      </div>
    </div>
  );
}
