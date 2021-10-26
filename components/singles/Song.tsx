import React, { FC, memo } from "react";
import Link from "next/link";
import SongInfo from "./SongInfo";

type Props = {
  song: SongInfo;
  titlePrefix: string;
};

const Song: FC<Props> = ({ song, titlePrefix }) => {
  return (
    <li className="list-group-item list-group-item-action" role="button">
      <Link
        href={`/[single]/[song]?id=${song.id}`}
        as={`/${titlePrefix}/${song.title}`}
      >
        {song.title}
      </Link>
    </li>
  );
};

export default memo(Song);
