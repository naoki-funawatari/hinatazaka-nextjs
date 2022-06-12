import { useRouter } from "next/router";
import type { SongInfo } from "@/models";

type Props = {
  song: SongInfo;
  titlePrefix: string;
};

const Song = ({ song, titlePrefix }: Props) => {
  const router = useRouter();
  const href = `/[single]/[song]?id=${song.id}`;
  const as = `/${encodeURIComponent(titlePrefix)}/${encodeURIComponent(song.title)}`;
  const handleClicked = () => router.push(href, as);

  return (
    <li
      className="list-group-item list-group-item-action song-list-item"
      role="button"
      onClick={handleClicked}
    >
      {song.title}
    </li>
  );
};

export default Song;
