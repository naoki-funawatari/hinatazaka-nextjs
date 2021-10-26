import type { NextPage } from "next";
import Link from "next/link";
// import { useState, useCallback, useMemo } from "react";
import singles from "../data/singles.json";
// import Header from "../components/Header";
// import Navigation from "../components/Navigation";
// import Main from "../components/Main";

export type DisplayParameter = {
  titlePrefix: string;
  title: string;
  id: string;
};

const Home: NextPage = () => {
  return (
    <ul>
      {singles.map((single) => (
        <li key={single.singleOrder}>
          <Link href={`${single.titlePrefix}`}>{single.titlePrefix}</Link>
          <ul>
            {single.songs.map((song) => (
              <li key={`${single.singleOrder}_${song.songOrder}`}>
                <Link href={`${single.titlePrefix}/${song.title}`}>
                  {song.title}
                </Link>
                <ul></ul>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );

  // const single = singles[0];
  // const song = single.songs[0];
  // const defaultParameter: DisplayParameter = useMemo(
  //   () => ({
  //     titlePrefix: single.titlePrefix,
  //     title: song.title,
  //     id: song.id,
  //   }),
  //   [single, song]
  // );
  // const [displayParameter, setDisplayParameter] =
  //   useState<DisplayParameter>(defaultParameter);
  // const handleTitleClicked = useCallback(
  //   (): void => setDisplayParameter(defaultParameter),
  //   [setDisplayParameter, defaultParameter]
  // );

  // return (
  //   <div className="app">
  //     <Header {...{ handleTitleClicked }} />
  //     <Navigation {...{ singles, setDisplayParameter }} />
  //     <Main {...displayParameter} />
  //   </div>
  // );
};

export default Home;
