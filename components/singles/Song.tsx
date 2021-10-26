import React, { memo } from "react";
import Link from "next/link";
import SongInfo from "./SongInfo";
type Props = {
  song: SongInfo;
  titlePrefix: string;
};

const Song = ({ song, titlePrefix }: Props) => {
  return (
    <li className="list-group-item list-group-item-action" role="button">
      <Link href={`/${titlePrefix}/${song.title}`}>{song.title}</Link>
    </li>
  );
};

export default memo(Song);
