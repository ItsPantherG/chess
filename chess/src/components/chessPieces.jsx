import React from "react";
import ChessPiece from "./chessPiece";

const ChessPieces = (props) => {
  return props.pieces.map((piece) => {
    return (
      <ChessPiece
        key={piece.id}
        id={piece.id}
        type={piece.type}
        mousePos={piece.pos}
        isMouseDown={props.isMouseDown}
        isDragging={piece.isDragging}
        snapTo={piece.square}
        texture={piece.texture}
      ></ChessPiece>
    );
  });
};

export default ChessPieces;
