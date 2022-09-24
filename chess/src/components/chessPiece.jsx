import React from "react";

const ChessPiece = (props) => {
  return (
    <div
      className="chess--piece"
      onMouseDown={(event) => props.isMouseDown(true, props.id, event)}
      onMouseUp={() => props.isMouseDown(false)}
      style={props.isDragging ? props.mousePos : { gridArea: props.snapTo }}
    >
      {props.type}
    </div>
  );
};

export default ChessPiece;

//props.isDragging ? props.mousePos : { gridArea: props.snapTo }
