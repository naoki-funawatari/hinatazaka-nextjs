import React, { memo, Dispatch } from "react";
import SongInfo from "./SongInfo";
import { DisplayParameter } from "../../pages/index";

type Props = {
  song: SongInfo;
  titlePrefix: string;
  setDisplayParameter: Dispatch<DisplayParameter>;
};

const Song = ({ song, titlePrefix, setDisplayParameter }: Props) => {
  return (
    <li
      className="list-group-item list-group-item-action"
      role="button"
      onClick={() =>
        setDisplayParameter({
          titlePrefix: titlePrefix,
          title: song.title,
          id: song.id,
        })
      }
    >
      {song.title}
    </li>
  );
};

export default memo(Song);
