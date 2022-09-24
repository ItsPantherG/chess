import React from "react";
import ChessPiece from "./chessPiece";

const ChessPiecesWhite = (props) => {
  return props.piecesWhite.map((pieceWhite) => {
    return (
      <ChessPiece
        key={pieceWhite.id}
        id={pieceWhite.id}
        type={pieceWhite.type}
        mousePos={pieceWhite.pos}
        isMouseDown={props.isMouseDown}
        isDragging={pieceWhite.isDragging}
        snapTo={pieceWhite.square}
      ></ChessPiece>
    );
  });
};

export default ChessPiecesWhite;
