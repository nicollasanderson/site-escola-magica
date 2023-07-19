import { useEffect, useState } from "react";
import { MainButtonDiv } from "./style";
import { HiArrowNarrowUp } from "react-icons/hi";
import { Link } from "react-scroll";

const ToTopButton = () => {
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
    <>
      {mostrarBotao && (
        <Link
          activeClass="active"
          to="primeiraSecao"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          href="#"
        >
          <MainButtonDiv>
            <button>
              <HiArrowNarrowUp />
            </button>
          </MainButtonDiv>
        </Link>
      )}
    </>
  );
};

export default ToTopButton;
