import React, { useState } from "react";
import "../css/board.css";
import dragPiece from "../functions/dnd";
import ChessPieces from "./chessPieces";

const Board = (props) => {
  const [isDown, setIsDown] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    top: 0,
    left: 0,
  });
  const [draggingPiece, setDragginPiece] = useState();

  function isMouseDown(isDown, pieceId, event) {
    setDragginPiece(pieceId);
    if (isDown !== false) {
      const tempPos = {
        left: event.nativeEvent.clientX - 86,
        top: event.nativeEvent.clientY - 84,
      };
      setMousePosition({
        left: `${tempPos.left}px`,
        top: `${tempPos.top}px`,
      });
      return setIsDown(pieceId);
    }
    return setIsDown(false);
  }

  function mousePos(event) {
    if (dragPiece(event, isDown) !== undefined) {
      const position = dragPiece(event, isDown);
      setMousePosition({
        left: `${position.left}px`,
        top: `${position.top}px`,
      });
      props.piecePos([position.left, position.top], isDown, draggingPiece);
    }
  }
  return (
    <div className="chess--board-background">
      <div
        className="chess--board"
        onMouseMove={(event) => mousePos(event)}
        onMouseUp={() => isMouseDown(false)}
      >
        <ChessPieces
          mousePos={mousePosition}
          isMouseDown={isMouseDown}
          isDragging={isDown}
          snapTo={props.snapPieceTo}
          piecesBlack={props.piecesBlack}
          piecesWhite={props.piecesWhite}
        />
      </div>
    </div>
  );
};

export default Board;
