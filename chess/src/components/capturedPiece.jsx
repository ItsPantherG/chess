import React from "react";

const CapturedPiece = (props) => {
  return (
    <div
      className={
        props.id.includes("B")
          ? "captured--piece-black captured--piece"
          : "captured--piece-white captured--piece"
      }
      style={{ backgroundImage: `url(${props.texture})` }}
    ></div>
  );
};

export default CapturedPiece;
