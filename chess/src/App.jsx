import React, { useState } from "react";
import "./css/App.css";
import Board from "./components/board";
import snapToSquare from "./functions/snapToSquare";

function App() {
  // Pieces states; Used for rendering the pieces!
  const [piecesBlack, setPiecesBlack] = useState([
    //Pieces
    {
      id: "KB1",
      type: "King",
      texure: undefined,
      square: "e8",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "QB1",
      type: "Queen",
      texure: undefined,
      square: "d8",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "BB1",
      type: "Bishop",
      texure: undefined,
      square: "c8",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "BB2",
      type: "Bishop",
      texure: undefined,
      square: "f8",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "NB1",
      type: "Knight",
      texure: undefined,
      square: "b8",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "NB2",
      type: "Knight",
      texure: undefined,
      square: "g8",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "RB1",
      type: "Rook",
      texure: undefined,
      square: "a8",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "RB2",
      type: "Rook",
      texure: undefined,
      square: "h8",
      pos: undefined,
      isDragging: false,
    },

    //Pawns
    {
      id: "PB1",
      type: "Pawn",
      texure: undefined,
      square: "a7",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PB2",
      type: "Pawn",
      texure: undefined,
      square: "b7",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PB3",
      type: "Pawn",
      texure: undefined,
      square: "c7",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PB4",
      type: "Pawn",
      texure: undefined,
      square: "d7",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PB5",
      type: "Pawn",
      texure: undefined,
      square: "e7",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PB6",
      type: "Pawn",
      texure: undefined,
      square: "f7",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PB7",
      type: "Pawn",
      texure: undefined,
      square: "g7",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PB8",
      type: "Pawn",
      texure: undefined,
      square: "h7",
      pos: undefined,
      isDragging: false,
    },
  ]);
  const [piecesWhite, setPiecesWhite] = useState([
    //Pieces
    {
      id: "KW1",
      type: "King",
      texure: undefined,
      square: "e8",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "QW1",
      type: "Queen",
      texure: undefined,
      square: "d8",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "BW1",
      type: "Bishop",
      texure: undefined,
      square: "c8",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "BW2",
      type: "Bishop",
      texure: undefined,
      square: "f8",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "NW1",
      type: "Knight",
      texure: undefined,
      square: "W8",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "NW2",
      type: "Knight",
      texure: undefined,
      square: "g8",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "RW1",
      type: "Rook",
      texure: undefined,
      square: "a8",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "RW2",
      type: "Rook",
      texure: undefined,
      square: "h8",
      pos: undefined,
      isDragging: false,
    },

    //Pawns
    {
      id: "PW1",
      type: "Pawn",
      texure: undefined,
      square: "a7",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PW2",
      type: "Pawn",
      texure: undefined,
      square: "W7",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PW3",
      type: "Pawn",
      texure: undefined,
      square: "c7",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PW4",
      type: "Pawn",
      texure: undefined,
      square: "d7",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PW5",
      type: "Pawn",
      texure: undefined,
      square: "e7",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PW6",
      type: "Pawn",
      texure: undefined,
      square: "f7",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PW7",
      type: "Pawn",
      texure: undefined,
      square: "g7",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PW8",
      type: "Pawn",
      texure: undefined,
      square: "h7",
      pos: undefined,
      isDragging: false,
    },
  ]);

  // Tempotary states; changes a lot, used for position and snapping to squares!
  const [piecePosition, setPiecePositon] = useState(0);
  const [movingPiece, setMovingPiece] = useState();

  function getMovingPiece(idB) {
    for (let piece of piecesBlack) {
      if (piece.id === idB) {
        setMovingPiece(piecesBlack.indexOf(piece));
        console.log(idB);
      }
    }
  }

  function isDragging(isDown) {
    if (movingPiece !== undefined) {
      if (isDown) {
        return (piecesBlack[movingPiece].isDragging = true);
      } else {
        return (piecesBlack[movingPiece].isDragging = false);
      }
    }
  }

  // Functions used for temporary positioning and snapping to squares!
  function piecePos(pos, isMouseDown) {
    let pieceBlack = piecesBlack;

    //Setting piece movement
    pieceBlack[movingPiece].pos = {
      top: `${pos[1]}px`,
      left: `${pos[0]}px`,
    };

    //Setting piece snapping square
    pieceBlack[movingPiece].square = snapToSquare(piecePosition);

    setPiecesBlack(pieceBlack);

    setPiecePositon(pos);

    if (isMouseDown) return getSnapSquare();
  }

  function getSnapSquare() {
    return (piecesBlack[movingPiece].square = snapToSquare(piecePosition));
  }

  return (
    <div className="app">
      <Board
        getMovingPiece={getMovingPiece}
        isDragging={isDragging}
        piecePos={piecePos}
        piecesBlack={piecesBlack}
        piecesWhite={piecesWhite}
      />
    </div>
  );
}

export default App;
