import type { NextPage } from "next";
import { useState } from "react";
import singles from "./data/singles.json";
import Header from "./features/Header";
import Navigation from "./features/Navigation";
import Main from "./features/Main";

export type DisplayParameter = {
  titlePrefix: string;
  title: string;
  id: string;
};

const Home: NextPage = () => {
  const single = singles[0];
  const song = single.songs[0];
  const defaultParameter: DisplayParameter = {
    titlePrefix: single.titlePrefix,
    title: song.title,
    id: song.id,
  };
  const [displayParameter, setDisplayParameter] =
    useState<DisplayParameter>(defaultParameter);

  return (
    <div className="app">
      <Header {...{ defaultParameter, setDisplayParameter }} />
      <Navigation {...{ singles, setDisplayParameter }} />
      <Main {...displayParameter} />
    </div>
  );
};

export default Home;
