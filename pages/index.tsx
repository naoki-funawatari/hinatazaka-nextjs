import type { NextPage } from "next";
import singles from "./data/singles.json";
import Header from "./features/Header";
import Navigation from "./features/Navigation";
import Main from "./features/Main";

const Home: NextPage = () => {
  const titlePrefix = singles[0].titlePrefix;
  const title = singles[0].songs[0].title;
  const id = singles[0].songs[0].id;

  return (
    <div className="app">
      <Header />
      <Navigation singles={singles} />
      <Main titlePrefix={titlePrefix} title={title} id={id} />
    </div>
  );
};

export default Home;
