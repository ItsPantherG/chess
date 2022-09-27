import formatSquareFile from "../functions/formatSquareFile";
import formatSquareNum from "../functions/fomatSquareNum";

function pieceLogic(pieces, movingPiece) {
  if (movingPiece !== undefined) {
    // PieceData
    let pieceData = pieces[movingPiece];

    //Pieces changing data
    let piecesLocationW = [];
    let piecesLocationB = [];
    let availableSquares = "";

    // Get location of all pieces except for the moving piece
    for (let piece of pieces) {
      if (pieceData.square !== piece.square && piece.id.includes("W")) {
        piecesLocationW.push(piece.square);
      }
      if (pieceData.square !== piece.square && piece.id.includes("B")) {
        piecesLocationB.push(piece.square);
      }
    }

    //Pawn Logic
    if (
      pieceData.type === "Pawn" &&
      pieceData.id.includes("W") &&
      pieceData.square
    ) {
      let currentFile = pieceData.square.split("").splice(0, 1).toString();
      let currentRow = parseInt(
        pieceData.square.split("").splice(1, 1).toString()
      );

      if (currentRow === 2) {
        availableSquares =
          pieceData.square.split("").splice(0, 1).toString() +
          "4" +
          pieceData.square.split("").splice(0, 1).toString() +
          "3";
      } else {
        let toRow = currentRow + 1;

        if (!piecesLocationB.includes(`${currentFile}${toRow.toString()}`)) {
          availableSquares =
            pieceData.square.split("").splice(0, 1).toString() + toRow;
        }
      }
    }

    if (
      pieceData.type === "Pawn" &&
      pieceData.id.includes("B") &&
      pieceData.square
    ) {
      let currentFile = pieceData.square.split("").splice(0, 1).toString();

      let currentRow = parseInt(
        pieceData.square.split("").splice(1, 1).toString()
      );

      if (currentRow === 7) {
        availableSquares =
          pieceData.square.split("").splice(0, 1).toString() +
          "6" +
          pieceData.square.split("").splice(0, 1).toString() +
          "5";
      } else {
        let toRow = currentRow - 1;

        if (!piecesLocationW.includes(`${currentFile}${toRow.toString()}`)) {
          availableSquares =
            pieceData.square.split("").splice(0, 1).toString() + toRow;
        }
      }
    }

    //Knight Logic
    if (
      pieceData.type === "Knight" &&
      pieceData.id.includes("W") &&
      pieceData.square
    ) {
      let currentFileNum = formatSquareNum(
        pieceData.square.split("").splice(0, 1).toString()
      );
      let currentRow = parseInt(
        pieceData.square.split("").splice(1, 1).toString()
      );

      let toSquare = [
        { file: currentFileNum + 2, row: currentRow - 1 },
        { file: currentFileNum + 2, row: currentRow + 1 },
        { file: currentFileNum + 1, row: currentRow + 2 },
        { file: currentFileNum - 1, row: currentRow + 2 },

        { file: currentFileNum - 2, row: currentRow - 1 },
        { file: currentFileNum - 2, row: currentRow + 1 },
        { file: currentFileNum - 1, row: currentRow - 2 },
        { file: currentFileNum - 1, row: currentRow - 2 },
      ];

      for (let square of toSquare) {
        if (square.file > 0 && square.row > 0) {
          availableSquares +=
            formatSquareFile(square.file) + square.row.toString();
        }
      }
    }

    if (pieceData.id.includes("W")) {
      for (let square of piecesLocationW) {
        if (availableSquares.includes(square))
          availableSquares = availableSquares.replace(square, "");
      }
    }
    if (pieceData.id.includes("B")) {
      for (let square of piecesLocationB) {
        if (availableSquares.includes(square))
          availableSquares = availableSquares.replace(square, "");
      }
    }

    return availableSquares;
  }
}

export default pieceLogic;
