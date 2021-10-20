import React from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <div className="header">
      <h1 role="button" onClick={() => router.push("/")}>
        日向坂46
      </h1>
    </div>
  );
};

export default Header;
