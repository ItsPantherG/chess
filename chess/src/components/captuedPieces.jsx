import React from "react";
import CapturedPiece from "./capturedPiece";

const CapturedPieces = (props) => {
  let blackCaptured = [];
  let whiteCaptured = [];

  for (let p of props.capturedPieces) {
    if (p.id.includes("B")) {
      blackCaptured = [...blackCaptured, p];
    } else {
      whiteCaptured = [...whiteCaptured, p];
    }
  }

  return (
    <>
      <div className="captured--pieces-wrapper">
        {blackCaptured.map((piece) => {
          return (
            <CapturedPiece
              key={piece.id}
              id={piece.id}
              type={piece.type}
              texture={piece.texture}
            />
          );
        })}
      </div>
      <div className="captured--pieces-wrapper">
        {whiteCaptured.map((piece) => {
          return (
            <CapturedPiece
              key={piece.id}
              id={piece.id}
              type={piece.type}
              texture={piece.texture}
            />
          );
        })}
      </div>
    </>
  );
};

export default CapturedPieces;
