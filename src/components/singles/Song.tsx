import React, { FC, memo } from "react";
import Link from "next/link";
import SongInfo from "@/components/singles/SongInfo";

type Props = {
  song: SongInfo;
  titlePrefix: string;
};

const Song: FC<Props> = ({ song, titlePrefix }) => {
  return (
    <li className="list-group-item list-group-item-action" role="button">
      <Link
        href={`/[single]/[song]?id=${song.id}`}
        as={`/${encodeURIComponent(titlePrefix)}/${encodeURIComponent(
          song.title
        )}`}
      >
        {song.title}
      </Link>
    </li>
  );
};

export default memo(Song);
