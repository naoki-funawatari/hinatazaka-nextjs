import React from "react";
import Song from "./Song";
import SingleInfo from "./SingleInfo";

type Props = {
  single: SingleInfo;
};

const Single = ({ single }: Props) => (
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
            song={song}
            titlePrefix={single.titlePrefix}
          />
        ))}
    </ul>
  </li>
);

export default Single;
