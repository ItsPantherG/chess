import React from "react";
import CapturedPiece from "./capturedPiece";

const CapturedPieces = (props) => {
  return props.capturedPieces.map((piece) => {
    return (
      <CapturedPiece
        key={piece.id}
        id={piece.id}
        type={piece.type}
        texture={piece.texture}
      ></CapturedPiece>
    );
  });
};

export default CapturedPieces;
