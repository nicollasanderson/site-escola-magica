import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Credits100x from "../../components/StoreItems/Credits100x";
import Credits10x from "../../components/StoreItems/Credits10x";
import Credits25x from "../../components/StoreItems/Credits25x";
import Credits50x from "../../components/StoreItems/Credits50x";
import Item1 from "../../components/StoreItems/Item1";
import Item2 from "../../components/StoreItems/Item2";
import ToTopButton from "../../components/ToTopButton";
import { MainStoreContent } from "./style";

const Store = () => {
  return (
    <MainStoreContent>
      <div>
        <Header page="store" />
        <Item1 />
        <Item2 />
        <div className="Container-Credits">
          <Credits10x />
          <Credits25x />
          <Credits50x />
          <Credits100x />
        </div>
        <Footer />
      </div>
      <ToTopButton />
    </MainStoreContent>
  );
};

export default Store;
