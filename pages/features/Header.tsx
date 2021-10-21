import React, { memo } from "react";

type Props = {
  handleTitleClicked(): void;
};

const Header = ({ handleTitleClicked }: Props) => {
  return (
    <div className="header">
      <h1 role="button" onClick={handleTitleClicked}>
        日向坂46
      </h1>
    </div>
  );
};

export default memo(Header);
