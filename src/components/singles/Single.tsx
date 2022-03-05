import Song from "@/components/singles/Song";
import type SingleInfo from "@/components/singles/SingleInfo";

type Props = {
  single: SingleInfo;
};

const Component = ({ single }: Props) => {
  return (
    <li className="list-group-item">
      <div>
        <h5>{single.titlePrefix}</h5>
        <div>
          <span className="badge badge-primary badge-pill">{single.songs.length}</span>
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

export default Component;
