import React, { useState } from "react";

const ChessPiece = (props) => {
  return (
    <div
      className="chess--piece"
      onMouseDown={() => props.isMouseDown(true)}
      onMouseUp={() => props.isMouseDown(false)}
      style={props.isDragging ? props.mousePos : { gridArea: props.snapTo }}
    ></div>
  );
};

export default ChessPiece;
