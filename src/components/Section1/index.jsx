import IntroVideo from "../IntroVideo";
import { ServerNameDiv, StyledSection1 } from "./style";
import logo from "../../assets/titulo1-completo.png";
import Header from "../Header";

const Section1 = () => {
  return (
    <StyledSection1 id="primeiraSecao">
      <div>
        <Header />
        <ServerNameDiv>
          <img src={logo} alt="Escola Magica RP" />
        </ServerNameDiv>
        <IntroVideo />
      </div>
    </StyledSection1>
  );
};

export default Section1;
