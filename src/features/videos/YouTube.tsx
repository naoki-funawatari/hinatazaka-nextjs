import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import singles from "@/data/singles.json";

type QueryProps = {
  single: string;
  song: string;
  id: string;
};

const fetcher = () => new Promise<boolean>(resolve => setTimeout(() => resolve(true), 500));
const useParams = () => {
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
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(state => state + 1);
  }, [id]);
  const { data } = useSWR(`${count}`, fetcher);
  return data;
};

const Component = () => {
  const { single, song, id } = useParams();
  const data = useFetchData(id);
  if (!data) {
    return <div>Loading...</div>;
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
