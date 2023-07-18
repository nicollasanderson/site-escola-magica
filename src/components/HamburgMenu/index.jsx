import { MainContainerHambur } from "./style";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const HamburgMenu = ({ setShowHambur }) => {
  const handleClose = () => {
    setShowHambur(false);
  };

  return (
    <MainContainerHambur>
      <nav>
        <ul>
          <li>
            <Link to="/creditos">Doações</Link>
          </li>
          <li>
            <LinkScroll
              activeClass="active"
              to="comoJogar"
              onClick={handleClose}
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              href="#"
            >
              Como jogar
            </LinkScroll>
          </li>
          <li>
            <a target="_blank" href="https://discord.gg/qA7fjHTa92">
              Discord
            </a>
          </li>
        </ul>
      </nav>
    </MainContainerHambur>
  );
};

export default HamburgMenu;
