import React, { memo, Dispatch } from "react";
import Song from "./Song";
import SingleInfo from "./SingleInfo";
import { DisplayParameter } from "../../pages/index";

type Props = {
  single: SingleInfo;
  setDisplayParameter: Dispatch<DisplayParameter>;
};

const Single = ({ single, setDisplayParameter }: Props) => (
  <li className="list-group-item">
    <div>
      <h5>{single.titlePrefix}</h5>
      <div>
        <span className="badge badge-primary badge-pill">
          {single.songs.length}
        </span>
      </div>
    </div>
    <ul className="list-group list-group-flush">
      {[...single.songs]
        .sort((a, b) => a.songOrder - b.songOrder)
        .map((song, songIndex) => (
          <Song
            key={`song${songIndex}`}
            {...{ song, titlePrefix: single.titlePrefix, setDisplayParameter }}
          />
        ))}
    </ul>
  </li>
);

export default memo(Single);
