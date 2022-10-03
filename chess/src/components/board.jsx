import React, { useState } from "react";
import "../css/board.css";
import dragPiece from "../functions/dnd";
import ChessPieces from "./chessPieces";
import CapturedPieces from "./captuedPieces";

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
    props.handlePieceCapture();
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
        <ChessPieces key="P" isMouseDown={isMouseDown} pieces={props.pieces} />
      </div>
      <div>
        <CapturedPieces key="C" capturedPieces={props.capturedPieces} />
      </div>
    </div>
  );
};

export default Board;
