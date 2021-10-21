import type { NextPage } from "next";
import { useState, useCallback, useMemo } from "react";
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
  const defaultParameter: DisplayParameter = useMemo(
    () => ({
      titlePrefix: single.titlePrefix,
      title: song.title,
      id: song.id,
    }),
    [single, song]
  );
  const [displayParameter, setDisplayParameter] =
    useState<DisplayParameter>(defaultParameter);
  const handleTitleClicked = useCallback(
    (): void => setDisplayParameter(defaultParameter),
    [setDisplayParameter, defaultParameter]
  );

  return (
    <div className="app">
      <Header {...{ handleTitleClicked }} />
      <Navigation {...{ singles, setDisplayParameter }} />
      <Main {...displayParameter} />
    </div>
  );
};

export default Home;
