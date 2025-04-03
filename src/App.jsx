import "./App.css";
import Footer from "./page_parts/nav_foot/footer";
import Navbar from "./page_parts/nav_foot/navbar";
import Connect from "./page_parts/sections/connect";
import Faq from "./page_parts/sections/faq";
import Litseziya from "./page_parts/sections/litseziya";
import Section_about from "./page_parts/sections/section_about";
import Section_home from "./page_parts/sections/section_home";
import Xizmat_turlari from "./page_parts/sections/xizmat_turi";
import Xizmatlar from "./page_parts/sections/xizmatlar";
import Telegram from "./to_t.me/telegram";
import { Element } from "react-scroll";

function App() {
  return (
    <>
      <Navbar />

      <Element name="/">
        <Section_home />
      </Element>

      <Element name="about">
        <Section_about />
      </Element>

      <Element name="service">
        <Xizmatlar />
      </Element>

      <Xizmat_turlari />
      <Litseziya />

      <Element name="faq">
        <Faq />
      </Element>

      <Element name="connect">
        <Connect />
      </Element>

      <Telegram />
      <Footer />
    </>
  );
}

export default App;
