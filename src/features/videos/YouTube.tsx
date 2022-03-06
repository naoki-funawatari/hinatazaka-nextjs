import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Audio } from "react-loader-spinner";
import { useSingles } from "@/apis";

type QueryProps = {
  single: string;
  song: string;
  id: string;
};

const fetcher = () => new Promise<boolean>(resolve => setTimeout(() => resolve(true), 500));
const useParams = () => {
  const { data } = useSingles();
  const singles = data ?? [];
  const { pathname, query } = useRouter();
  const { single, song, id } = (() => {
    const single = singles[0];
    const song = single.songs[0];
    return pathname === "/"
      ? {
          single: single.titlePrefix,
          song: song.title,
          id: song.id,
        }
      : (query as QueryProps);
  })();

  return { single, song, id };
};
const useFetchData = (id: string) => {
  const [count, setCount] = useState(new Date().getTime().toString());
  useEffect(() => {
    setCount(new Date().getTime().toString());
  }, [id]);
  const { data } = useSWR(`${count}`, fetcher);
  console.log(count);
  return data;
};

const Component = () => {
  const { single, song, id } = useParams();
  const data = useFetchData(id);
  if (!data) {
    /* https://codesandbox.io/s/react-loader-spinner-u2f2b */
    return (
      <div className="loading-spinner">
        <Audio color="#01BFFF" height={200} width={200} />
      </div>
    );
  }

  return (
    <>
      <h2 className="song-title">
        {single}『{song}』
      </h2>
      <div className="contentWrapper">
        <iframe
          className="content"
          title={`『${song}』`}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Component;
