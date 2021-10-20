import type { NextPage } from "next";
import { useRouter } from "next/router";
import singles from "./data/singles.json";
import Header from "./features/Header";
import Navigation from "./features/Navigation";
import Main from "./features/Main";
import SongInfo from "./features/singles/SongInfo";

type Props = {
  titlePrefix: string;
  title: string;
  id: string;
};

const Home: NextPage = () => {
  const router = useRouter();
  let query: Props = {
    titlePrefix: singles[0].titlePrefix,
    title: singles[0].songs[0].title,
    id: singles[0].songs[0].id,
  };

  if (typeof router.query.titlePrefix !== "undefined") {
    query = { ...(router.query as Props) };
  }

  return (
    <div className="app">
      <Header />
      <Navigation singles={singles} />
      <Main titlePrefix={query.titlePrefix} title={query.title} id={query.id} />
    </div>
  );
};

export default Home;
