/* eslint-disable react/display-name */
import React from "react";

function Separator() {
  return (
    <svg
      width="223"
      height="5"
      viewBox="0 0 223 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect opacity="0.2" width="223" height="1" rx="2.5" fill="black" />
    </svg>
  );
}

export default React.memo(Separator);
