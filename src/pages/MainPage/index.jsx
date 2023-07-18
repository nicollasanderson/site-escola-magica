import { MainContent } from "./style";
import Section1 from "../../components/Section1";
import Section2 from "../../components/Section2";
import HowToPlay from "../../components/HowToPlay";
import ToTopButton from "../../components/ToTopButton";
import { useEffect, useState } from "react";

const MainPage = () => {
  const [mostrarBotao, setMostrarBotao] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setMostrarBotao(true);
      } else {
        setMostrarBotao(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MainContent>
      <Section1 />
      <Section2 />
      <HowToPlay />
      {mostrarBotao && <ToTopButton />}
    </MainContent>
  );
};

export default MainPage;
