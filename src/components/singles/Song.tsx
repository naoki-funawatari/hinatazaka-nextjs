import Link from "next/link";
import SongInfo from "@/components/singles/SongInfo";

type Props = {
  song: SongInfo;
  titlePrefix: string;
};

const Component = ({ song, titlePrefix }: Props) => {
  const href = `/[single]/[song]?id=${song.id}`;
  const as = `/${encodeURIComponent(titlePrefix)}/${encodeURIComponent(song.title)}`;

  return (
    <li className="list-group-item list-group-item-action" role="button">
      <Link {...{ href, as }}>{song.title}</Link>
    </li>
  );
};

export default Component;
