import React, { useState } from "react";
import "../css/board.css";
import dragPiece from "../functions/dnd";
import ChessPieces from "./chessPieces";

const Board = (props) => {
  const [isDown, setIsDown] = useState(false);

  function isMouseDown(isDown, pieceId, event) {
    if (isDown === true) {
      props.getMovingPiece(pieceId);
      return setIsDown(isDown);
    }
    props.switchTurn();
    props.isDragging(false);
    props.getMovingPiece(undefined);
    return setIsDown(isDown);
  }

  function mousePos(event) {
    props.isDragging(isDown);
    if (dragPiece(event, isDown) !== undefined) {
      const position = dragPiece(event, isDown);
      props.piecePos([position.left, position.top], isDown);
    }
  }
  return (
    <div className="chess--board-background">
      <div
        className="chess--board"
        onMouseMove={(event) => mousePos(event)}
        onMouseUp={() => isMouseDown(false)}
      >
        <ChessPieces isMouseDown={isMouseDown} pieces={props.pieces} />
      </div>
    </div>
  );
};

export default Board;
