import React from "react";

function DividerLine() {
  return <div style={dividerStyle}></div>;
}

const dividerStyle = {
  width: "100%",
  height: "1px",
  background: "linear-gradient(to right, #141414, #515151, #141414)",
  margin: "50px 0",
};

export default DividerLine;
