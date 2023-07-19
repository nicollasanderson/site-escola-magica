import { MainContainerHambur } from "./style";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const HamburgMenu = ({ setShowHambur, page }) => {
  const handleClose = () => {
    setShowHambur(false);
  };

  return (
    <MainContainerHambur>
      <nav>
        <ul>
          <li>
            {page === "main" ? (
              <LinkScroll
                activeClass="active"
                to="comoJogar"
                spy={true}
                onClick={handleClose}
                smooth={true}
                offset={0}
                duration={1000}
                href="#"
              >
                Como jogar
              </LinkScroll>
            ) : (
              <Link to="/">Início</Link>
            )}
          </li>
          <li>
            <Link to="/creditos">Doações</Link>
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
