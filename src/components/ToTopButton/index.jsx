import { MainButtonDiv } from "./style";
import { HiArrowNarrowUp } from "react-icons/hi";
import { Link } from "react-scroll";

const ToTopButton = () => {
  return (
    <Link
      activeClass="active"
      to="primeiraSecao"
      spy={true}
      smooth={true}
      offset={0}
      duration={1000}
      href="#"
    >
      <MainButtonDiv>
        <button>
          <HiArrowNarrowUp />
        </button>
      </MainButtonDiv>
    </Link>
  );
};

export default ToTopButton;
