import React, { useState } from "react";
import "../css/board.css";
import dragPiece from "../functions/dnd";
import ChessPiece from "./chessPiece";

const Board = (props) => {
  const [isDown, setIsDown] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    top: 0,
    left: 0,
  });

  function isMouseDown(isDown) {
    if (isDown === true) {
      return setIsDown(true);
    }
    return setIsDown(false);
  }

  function mousePos(event) {
    if (dragPiece(event, isDown) !== undefined) {
      const position = dragPiece(event, isDown);
      setMousePosition({
        left: `${position.top}px`,
        top: `${position.left}px`,
      });
      props.piecePos([position.top, position.left], isDown);
    }
  }
  return (
    <div className="chess--board-background">
      <div
        className="chess--board"
        onMouseMove={(event) => mousePos(event)}
        onMouseUp={() => isMouseDown(false)}
      >
        <ChessPiece
          mousePos={mousePosition}
          isMouseDown={isMouseDown}
          isDragging={isDown}
          snapTo={props.snapPieceTo}
        />
      </div>
    </div>
  );
};

export default Board;
