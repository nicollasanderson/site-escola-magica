import { MainContent } from "./style";
import Section1 from "../../components/Section1";
import Section2 from "../../components/Section2";
import HowToPlay from "../../components/HowToPlay";
import ToTopButton from "../../components/ToTopButton";

const MainPage = () => {
  return (
    <MainContent>
      <Section1 />
      <Section2 />
      <HowToPlay />
      <ToTopButton />
    </MainContent>
  );
};

export default MainPage;
