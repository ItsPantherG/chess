import React from "react";
import ChessPiece from "./chessPiece";

const ChessPieces = (props) => {
  console.log(props.piecesBlack[0].type);
  return props.piecesBlack.map((pieceBlack) => {
    return (
      <ChessPiece
        key={pieceBlack.id}
        id={pieceBlack.id}
        type={pieceBlack.type}
        mousePos={pieceBlack.pos}
        isMouseDown={props.isMouseDown}
        isDragging={props.isDragging}
        snapTo={pieceBlack.square}
      ></ChessPiece>
    );
  });
};

export default ChessPieces;
