import React from "react";

const ChessPiece = (props) => {
  return (
    <div
      className="chess--piece"
      onMouseDown={(event) => props.isMouseDown(true, props.id, event)}
      onMouseUp={(event) => props.isMouseDown(false, props.id, event)}
      style={
        props.isDragging
          ? {
              position: "absolute",
              top: props.mousePos.top,
              left: props.mousePos.left,
              backgroundImage: `url(${props.texture})`,
            }
          : {
              gridArea: props.snapTo,
              backgroundImage: `url(${props.texture})`,
            }
      }
    ></div>
  );
};

export default ChessPiece;
