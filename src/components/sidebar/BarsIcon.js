import React from "react";

function IconBars(props) {
  return (
    <svg width="40" height="40" viewBox="0 0 100 80" {...props}>
      <path d="M0 0H100V20H0z"></path>
      <path d="M0 30H100V50H0z"></path>
      <path d="M0 60H100V80H0z"></path>
    </svg>
  );
}

export default IconBars;
