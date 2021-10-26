import React, { memo } from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Link href="/">日向坂46</Link>
      </h1>
    </div>
  );
};

export default memo(Header);
