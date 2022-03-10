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

const useParams = () => {
  const { data: singles } = useSingles();
  const { pathname, query } = useRouter();

  if (!singles) {
    return { single: undefined, song: undefined, id: undefined };
  }

  const single = singles[0];
  const song = single.songs[0];
  if (pathname === "/") {
    return {
      single: single.titlePrefix,
      song: song.title,
      id: song.id,
    };
  }

  return query as QueryProps;
};

const useFetchData = (id: string | undefined) => {
  const fetcher = () => new Promise<boolean>(resolve => setTimeout(() => resolve(true), 500));
  const [count, setCount] = useState(new Date().getTime().toString());
  useEffect(() => {
    setCount(new Date().getTime().toString());
  }, [id]);

  return useSWR(`${count}`, fetcher);
};

const Component = () => {
  const { single, song, id } = useParams();
  const { data } = useFetchData(id);

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
