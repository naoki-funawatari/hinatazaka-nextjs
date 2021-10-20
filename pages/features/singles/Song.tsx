import React from "react";
import { useRouter } from "next/router";
import SongInfo from "./SongInfo";

type Props = {
  song: SongInfo;
  titlePrefix: string;
};

const Song = ({ song, titlePrefix }: Props) => {
  const router = useRouter();
  const params = {
    query: {
      titlePrefix: titlePrefix,
      title: song.title,
      id: song.id,
    },
  };

  return (
    <li
      className="list-group-item list-group-item-action"
      role="button"
      onClick={() => router.push(params)}
    >
      {song.title}
    </li>
  );
};

export default Song;
