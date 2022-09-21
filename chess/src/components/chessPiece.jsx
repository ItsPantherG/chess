import React, { useState } from "react";

const ChessPiece = (props) => {
  return (
    <div
      className="chess--piece"
      onMouseDown={() => props.isMouseDown(true)}
      onMouseUp={() => props.isMouseDown(false)}
      onMouseEnter={() => props.isHovering(true)}
      onMouseLeave={() => props.isHovering(false)}
      style={props.mousePos}
    ></div>
  );
};

export default ChessPiece;
