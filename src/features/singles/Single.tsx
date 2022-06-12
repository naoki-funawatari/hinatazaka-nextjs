import type { SingleInfo } from "@/models";
import Song from "@/features/singles/Song";

type Props = {
  single: SingleInfo;
};

const Single = ({ single }: Props) => {
  return (
    <li className="list-group-item">
      <div>
        <h5>{single.titlePrefix}</h5>
        <div className="badge-wrap">
          <span className="badge rounded-pill bg-primary">{single.songs.length}</span>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        {[...single.songs]
          .sort((a, b) => a.songOrder - b.songOrder)
          .map((song, songIndex) => (
            <Song key={`song${songIndex}`} {...{ song, titlePrefix: single.titlePrefix }} />
          ))}
      </ul>
    </li>
  );
};

export default Single;
