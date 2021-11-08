import React, { FC, memo } from "react";
import { useRouter } from "next/router";
import singles from "../../../data/singles.json";

const YouTube: FC = () => {
  const router = useRouter();
  const { single, song, id } = (() => {
    const single = singles[0];
    const song = single.songs[0];
    return router.pathname === "/"
      ? {
          single: single.titlePrefix,
          song: song.title,
          id: song.id,
        }
      : router.query;
  })();

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

export default memo(YouTube);
