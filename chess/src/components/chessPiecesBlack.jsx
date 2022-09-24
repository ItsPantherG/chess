import React from "react";
import ChessPiece from "./chessPiece";

const ChessPiecesBlack = (props) => {
  return props.piecesBlack.map((pieceBlack) => {
    return (
      <ChessPiece
        key={pieceBlack.id}
        id={pieceBlack.id}
        type={pieceBlack.type}
        mousePos={pieceBlack.pos}
        isMouseDown={props.isMouseDown}
        isDragging={pieceBlack.isDragging}
        snapTo={pieceBlack.square}
      ></ChessPiece>
    );
  });
};

export default ChessPiecesBlack;
