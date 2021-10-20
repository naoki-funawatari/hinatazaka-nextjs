import React, { Dispatch } from "react";
import { DisplayParameter } from "../index";

type Props = {
  defaultParameter: DisplayParameter;
  setDisplayParameter: Dispatch<DisplayParameter>;
};

const Header = ({ defaultParameter, setDisplayParameter }: Props) => {
  return (
    <div className="header">
      <h1 role="button" onClick={() => setDisplayParameter(defaultParameter)}>
        日向坂46
      </h1>
    </div>
  );
};

export default Header;
