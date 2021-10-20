import React from "react";

type Props = {
  titlePrefix: string;
  title: string;
  id: string;
};

const YouTube = ({ titlePrefix, title, id }: Props) => (
  <>
    <h2 className="song-title">
      {titlePrefix}『{title}』
    </h2>
    <div className="contentWrapper">
      <iframe
        className="content"
        title={`『${title}』`}
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

export default YouTube;