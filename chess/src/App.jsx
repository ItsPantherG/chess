import React, { useState } from "react";
import "./css/App.css";
import Board from "./components/board";
import snapToSquare from "./functions/snapToSquare";
import imageURLs from "./images/chessPieces";
import pieceLogic from "./pieceLogic/pieceLogic";

function App() {
  // Pieces states; Used for rendering the pieces and the position of the pieces!
  const [pieces, setPieces] = useState([
    //Pieces
    { id: "T4" },
    {
      id: "KB1",
      type: "King",
      texture: imageURLs().kingBlack,
      square: "e8",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "QB1",
      type: "Queen",
      texture: imageURLs().queenBlack,
      square: "d8",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "BB1",
      type: "Bishop",
      texture: imageURLs().bishopBlack,
      square: "c8",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "BB2",
      type: "Bishop",
      texture: imageURLs().bishopBlack,
      square: "f8",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "NB1",
      type: "Knight",
      texture: imageURLs().knightBlack,
      square: "b8",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "NB2",
      type: "Knight",
      texture: imageURLs().knightBlack,
      square: "g8",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "RB1",
      type: "Rook",
      texture: imageURLs().rookBlack,
      square: "a8",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "RB2",
      type: "Rook",
      texture: imageURLs().rookBlack,
      square: "h8",
      pos: undefined,
      isDragging: false,
    },

    //Pawns
    {
      id: "PB1",
      type: "Pawn",
      texture: imageURLs().pawnBlack,
      square: "a7",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PB2",
      type: "Pawn",
      texture: imageURLs().pawnBlack,
      square: "b7",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PB3",
      type: "Pawn",
      texture: imageURLs().pawnBlack,
      square: "c7",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PB4",
      type: "Pawn",
      texture: imageURLs().pawnBlack,
      square: "d7",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PB5",
      type: "Pawn",
      texture: imageURLs().pawnBlack,
      square: "e7",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PB6",
      type: "Pawn",
      texture: imageURLs().pawnBlack,
      square: "f7",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PB7",
      type: "Pawn",
      texture: imageURLs().pawnBlack,
      square: "g7",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PB8",
      type: "Pawn",
      texture: imageURLs().pawnBlack,
      square: "h7",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "KW1",
      type: "King",
      texture: imageURLs().kingWhite,
      square: "e1",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "QW1",
      type: "Queen",
      texture: imageURLs().queenWhite,
      square: "d1",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "bW1",
      type: "Bishop",
      texture: imageURLs().bishopWhite,
      square: "c1",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "bW2",
      type: "Bishop",
      texture: imageURLs().bishopWhite,
      square: "f1",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "NW1",
      type: "Knight",
      texture: imageURLs().knightWhite,
      square: "b1",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "NW2",
      type: "Knight",
      texture: imageURLs().knightWhite,
      square: "g1",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "RW1",
      type: "Rook",
      texture: imageURLs().rookWhite,
      square: "a1",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "RW2",
      type: "Rook",
      texture: imageURLs().rookWhite,
      square: "h1",
      pos: undefined,
      isDragging: false,
    },

    //Pawns
    {
      id: "PW1",
      type: "Pawn",
      texture: imageURLs().pawnWhite,
      square: "a2",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PW2",
      type: "Pawn",
      texture: imageURLs().pawnWhite,
      square: "b2",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PW3",
      type: "Pawn",
      texture: imageURLs().pawnWhite,
      square: "c2",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PW4",
      type: "Pawn",
      texture: imageURLs().pawnWhite,
      square: "d2",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PW5",
      type: "Pawn",
      texture: imageURLs().pawnWhite,
      square: "e2",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PW6",
      type: "Pawn",
      texture: imageURLs().pawnWhite,
      square: "f2",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PW7",
      type: "Pawn",
      texture: imageURLs().pawnWhite,
      square: "g2",
      pos: undefined,
      isDragging: false,
    },
    {
      id: "PW8",
      type: "Pawn",
      texture: imageURLs().pawnWhite,
      square: "h2",
      pos: undefined,
      isDragging: false,
    },
  ]);
  const [capturedPieces, setCapturedPieces] = useState([]);

  // Tempotary states; changes a lot, used for position and snapping to squares!
  const [piecePosition, setPiecePositon] = useState(0);
  const [movingPiece, setMovingPiece] = useState();
  const [validSquare, setValidSquare] = useState(false);
  const [isInCheck, setIsInCheck] = useState(false);

  // State to detemine who's turn it is
  const [turnWhite, setTurnWhite] = useState(true);

  //Win Screen
  const [winner, setWinner] = useState();

  function getMovingPiece(id) {
    for (let piece of pieces) {
      if (piece.id === id) {
        if (turnWhite && piece.id.includes("W")) {
          setMovingPiece(pieces.indexOf(piece));
        }
        if (!turnWhite && piece.id.includes("B")) {
          setMovingPiece(pieces.indexOf(piece));
        }
      }
    }
  }

  //returns if the piece is being dragged or not
  function isDragging(isDown) {
    if (movingPiece !== undefined) {
      if (isDown) {
        return (pieces[movingPiece].isDragging = true);
      } else {
        setMovingPiece(undefined);
        return (pieces[movingPiece].isDragging = false);
      }
    }
  }

  // Functions used for temporary positioning and snapping to squares!
  function piecePos(pos, isMouseDown) {
    let piece = pieces;

    if (movingPiece !== undefined) {
      //Setting piece movement
      piece[movingPiece].pos = {
        top: `${pos[1]}px`,
        left: `${pos[0]}px`,
      };

      //Setting piece snapping square
      if (validSquare) {
        piece[movingPiece].square = snapToSquare(piecePosition);
      }
    }

    setPieces(piece);

    setPiecePositon(pos);
  }

  function switchTurn() {
    if (!movingPiece) return;

    //after a valid move

    let setNewPieces = pieces;
    const availableSquares = pieceLogic(
      pieces,
      movingPiece,
      isInCheck
    ).availableSquares;

    setIsInCheck(
      pieceLogic(pieces, movingPiece, snapToSquare(piecePosition)).isInCheck
    );

    console.log(isInCheck);

    if (availableSquares === undefined) return;
    if (availableSquares.includes(snapToSquare(piecePosition))) {
      setNewPieces[movingPiece].square = snapToSquare(piecePosition);
      setTurnWhite(!turnWhite);
    }

    setPieces(setNewPieces);
  }

  function removeCapturedPieces() {
    if (!movingPiece) return;

    let piece = pieces;
    let piecesLocationB = [];
    let piecesLocationW = [];

    for (let p of piece) {
      if (p.id.includes("W")) {
        piecesLocationW.push(p.square);
      }
      if (p.id.includes("B")) {
        piecesLocationB.push(p.square);
      }
    }

    //White capture logic
    if (
      turnWhite &&
      piecesLocationB.includes(snapToSquare(piecePosition)) &&
      pieces[movingPiece].square === snapToSquare(piecePosition)
    ) {
      let pieceToRemove = pieces.filter(
        (p) => p.square === snapToSquare(piecePosition)
      );
      pieceToRemove = pieceToRemove.filter((p) => p.id.includes("B"));

      piece = pieces.filter((p) => p.id !== pieceToRemove[0].id);

      if (pieceToRemove[0].id.includes("KB")) {
        setWinner("White Wins");
      }

      setCapturedPieces([...capturedPieces, pieceToRemove[0]]);
      setPieces(piece);
    }

    //Black capture logic
    if (
      !turnWhite &&
      piecesLocationW.includes(snapToSquare(piecePosition)) &&
      pieces[movingPiece].square === snapToSquare(piecePosition)
    ) {
      let pieceToRemove = pieces.filter(
        (p) => p.square === snapToSquare(piecePosition)
      );
      pieceToRemove = pieceToRemove.filter((p) => p.id.includes("W"));

      piece = pieces.filter((p) => p.id !== pieceToRemove[0].id);

      if (pieceToRemove[0].id.includes("KW")) {
        setWinner("Black Wins");
      }

      setCapturedPieces([...capturedPieces, pieceToRemove[0]]);
      setPieces(piece);
    }
  }

  return (
    <>
      <div className="app">
        <Board
          getMovingPiece={getMovingPiece}
          isDragging={isDragging}
          piecePos={piecePos}
          pieces={pieces}
          switchTurn={switchTurn}
          handlePieceCapture={removeCapturedPieces}
          capturedPieces={capturedPieces}
        />
        <div className="turn">
          {turnWhite ? "It's white's turn" : "It's black's turn"}
        </div>
        {winner === undefined ? "" : <div className="win-screen">{winner}</div>}
      </div>
    </>
  );
}

export default App;
