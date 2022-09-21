import React, { useState, useEffect } from "react";
import "../css/board.css";
import dragPiece from "../functions/dnd";
import ChessPiece from "./chessPiece";

const Board = () => {
  const [isDown, setIsDown] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
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

  function getOffset(isHovering) {
    return setHovering(isHovering);
  }

  function mousePos(event) {
    if (!hovering && isDown) {
      setOffset({
        x: 31 + (event.nativeEvent.clientX - event.nativeEvent.offsetX),
        y: 28 + (event.nativeEvent.clientY - event.nativeEvent.offsetY),
      });
    }
    if (dragPiece(event, isDown) !== undefined) {
      const position = dragPiece(event, isDown, offset.x, offset.y);
      setMousePosition({
        left: `${position.top}px`,
        top: `${position.left}px`,
      });
    }
  }

  return (
    <div className="chess--board-background">
      <div className="chess--board" onMouseMove={(event) => mousePos(event)}>
        <ChessPiece
          mousePos={mousePosition}
          isMouseDown={isMouseDown}
          isHovering={getOffset}
        />
      </div>
    </div>
  );
};

export default Board;
