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
    },
    {
      id: "QB1",
      type: "Queen",
      texure: undefined,
      square: "d8",
      top: undefined,
      left: undefined,
    },
    {
      id: "BB1",
      type: "Bishop",
      texure: undefined,
      square: "c8",
      top: undefined,
      left: undefined,
    },
    {
      id: "BB2",
      type: "Bishop",
      texure: undefined,
      square: "f8",
      top: undefined,
      left: undefined,
    },
    {
      id: "NB1",
      type: "Knight",
      texure: undefined,
      square: "b8",
      top: undefined,
      left: undefined,
    },
    {
      id: "NB2",
      type: "Knight",
      texure: undefined,
      square: "g8",
      top: undefined,
      left: undefined,
    },
    {
      id: "RB1",
      type: "Rook",
      texure: undefined,
      square: "a8",
      top: undefined,
      left: undefined,
    },
    {
      id: "RB2",
      type: "Rook",
      texure: undefined,
      square: "h8",
      top: undefined,
      left: undefined,
    },

    //Pawns
    {
      id: "PB1",
      type: "Pawn",
      texure: undefined,
      square: "a7",
      top: undefined,
      left: undefined,
    },
    {
      id: "PB2",
      type: "Pawn",
      texure: undefined,
      square: "b7",
      top: undefined,
      left: undefined,
    },
    {
      id: "PB3",
      type: "Pawn",
      texure: undefined,
      square: "c7",
      top: undefined,
      left: undefined,
    },
    {
      id: "PB4",
      type: "Pawn",
      texure: undefined,
      square: "d7",
      top: undefined,
      left: undefined,
    },
    {
      id: "PB5",
      type: "Pawn",
      texure: undefined,
      square: "e7",
      top: undefined,
      left: undefined,
    },
    {
      id: "PB6",
      type: "Pawn",
      texure: undefined,
      square: "f7",
      top: undefined,
      left: undefined,
    },
    {
      id: "PB7",
      type: "Pawn",
      texure: undefined,
      square: "g7",
      top: undefined,
      left: undefined,
    },
    {
      id: "PB8",
      type: "Pawn",
      texure: undefined,
      square: "h7",
      top: undefined,
      left: undefined,
    },
  ]);
  const [piecesWhite, setPiecesWhite] = useState([
    //Pieces
    {
      id: "KW1",
      type: "King",
      texure: undefined,
      square: "e8",
      top: undefined,
      left: undefined,
    },
    {
      id: "QW1",
      type: "Queen",
      texure: undefined,
      square: "d8",
      top: undefined,
      left: undefined,
    },
    {
      id: "BW1",
      type: "Bishop",
      texure: undefined,
      square: "c8",
      top: undefined,
      left: undefined,
    },
    {
      id: "BW2",
      type: "Bishop",
      texure: undefined,
      square: "f8",
      top: undefined,
      left: undefined,
    },
    {
      id: "NW1",
      type: "Knight",
      texure: undefined,
      square: "W8",
      top: undefined,
      left: undefined,
    },
    {
      id: "NW2",
      type: "Knight",
      texure: undefined,
      square: "g8",
      top: undefined,
      left: undefined,
    },
    {
      id: "RW1",
      type: "Rook",
      texure: undefined,
      square: "a8",
      top: undefined,
      left: undefined,
    },
    {
      id: "RW2",
      type: "Rook",
      texure: undefined,
      square: "h8",
      top: undefined,
      left: undefined,
    },

    //Pawns
    {
      id: "PW1",
      type: "Pawn",
      texure: undefined,
      square: "a7",
      top: undefined,
      left: undefined,
    },
    {
      id: "PW2",
      type: "Pawn",
      texure: undefined,
      square: "W7",
      top: undefined,
      left: undefined,
    },
    {
      id: "PW3",
      type: "Pawn",
      texure: undefined,
      square: "c7",
      top: undefined,
      left: undefined,
    },
    {
      id: "PW4",
      type: "Pawn",
      texure: undefined,
      square: "d7",
      top: undefined,
      left: undefined,
    },
    {
      id: "PW5",
      type: "Pawn",
      texure: undefined,
      square: "e7",
      top: undefined,
      left: undefined,
    },
    {
      id: "PW6",
      type: "Pawn",
      texure: undefined,
      square: "f7",
      top: undefined,
      left: undefined,
    },
    {
      id: "PW7",
      type: "Pawn",
      texure: undefined,
      square: "g7",
      top: undefined,
      left: undefined,
    },
    {
      id: "PW8",
      type: "Pawn",
      texure: undefined,
      square: "h7",
      top: undefined,
      left: undefined,
    },
  ]);

  // Tempotary states; changes a lot, used for position and snapping to squares!
  const [piecePosition, setPiecePositon] = useState(0);
  const [snapTo, setSnapTo] = useState("a1");

  // Functions used for temporary positioning and snapping to squares!
  function piecePos(pos, isMouseDown, idB) {
    let pieceBlack = piecesBlack;
    let getIndex;
    for (let piece of piecesBlack) {
      if (piece.id === idB) {
        getIndex = piecesBlack.indexOf(piece);
      }
    }

    pieceBlack[0].pos = {
      top: `${pos[1]}px`,
      left: `${pos[0]}px`,
    };

    console.log(idB);
    setPiecesBlack(pieceBlack);

    setPiecePositon(pos);
    if (isMouseDown) return getSnapSquare();
  }

  function getSnapSquare() {
    return setSnapTo(snapToSquare(piecePosition));
  }

  return (
    <div className="app">
      <Board
        piecePos={piecePos}
        snapPieceTo={snapTo}
        piecesBlack={piecesBlack}
        whitePieces={piecesWhite}
      />
    </div>
  );
}

export default App;
