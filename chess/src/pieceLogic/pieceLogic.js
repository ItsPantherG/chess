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

    //Pawn White
    if (
      pieceData.type === "Pawn" &&
      pieceData.id.includes("W") &&
      pieceData.square
    ) {
      let currentFile = pieceData.square.split("").splice(0, 1).toString();
      let currentRow = parseInt(
        pieceData.square.split("").splice(1, 1).toString()
      );

      //First move 2 squares
      if (currentRow === 2) {
        availableSquares =
          pieceData.square.split("").splice(0, 1).toString() +
          "4" +
          pieceData.square.split("").splice(0, 1).toString() +
          "3";
      } else {
        let toRow = currentRow + 1;

        //Every other one square move
        if (!piecesLocationB.includes(`${currentFile}${toRow.toString()}`)) {
          availableSquares =
            pieceData.square.split("").splice(0, 1).toString() + toRow;
        }
      }

      //Pawn diagonal capture
      const pawnDiagonalMove1 = `${formatSquareFile(
        formatSquareNum(currentFile) + 1
      )}${currentRow + 1}`;
      const pawnDiagonalMove2 = `${formatSquareFile(
        formatSquareNum(currentFile) - 1
      )}${currentRow + 1}`;

      if (piecesLocationB.includes(pawnDiagonalMove1)) {
        availableSquares += pawnDiagonalMove1;
      }
      if (piecesLocationB.includes(pawnDiagonalMove2)) {
        availableSquares += pawnDiagonalMove2;
      }
    }

    //Pawn black
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

      //Pawn diagonal capture
      const pawnDiagonalMove1 = `${formatSquareFile(
        formatSquareNum(currentFile) + 1
      )}${currentRow - 1}`;
      const pawnDiagonalMove2 = `${formatSquareFile(
        formatSquareNum(currentFile) - 1
      )}${currentRow - 1}`;

      if (piecesLocationW.includes(pawnDiagonalMove1)) {
        availableSquares += pawnDiagonalMove1;
      }
      if (piecesLocationW.includes(pawnDiagonalMove2)) {
        availableSquares += pawnDiagonalMove2;
      }
    }

    //Knight Logic

    //Knight logic White
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
        { file: currentFileNum + 1, row: currentRow - 2 },
      ];

      for (let square of toSquare) {
        if (
          square.file > 0 &&
          square.file < 9 &&
          square.row > 0 &&
          square.row < 9
        ) {
          availableSquares +=
            formatSquareFile(square.file) + square.row.toString();
        }
      }
    }

    //Knight logic Black
    if (
      pieceData.type === "Knight" &&
      pieceData.id.includes("B") &&
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
        { file: currentFileNum + 1, row: currentRow - 2 },
      ];

      for (let square of toSquare) {
        if (
          square.file > 0 &&
          square.file < 9 &&
          square.row > 0 &&
          square.row < 9
        ) {
          availableSquares +=
            formatSquareFile(square.file) + square.row.toString();
        }
      }
    }

    // Rook Logic

    //White Rook
    if (
      pieceData.type === "Rook" &&
      pieceData.id.includes("W") &&
      pieceData.square
    ) {
      let currentFileNum = formatSquareNum(
        pieceData.square.split("").splice(0, 1).toString()
      );
      let currentRow = parseInt(
        pieceData.square.split("").splice(1, 1).toString()
      );

      let toFile = currentFileNum;
      let toRow = currentRow;
      let includesBlack = false;

      while (
        piecesLocationW.includes(
          formatSquareFile(toFile + 1) + toRow.toString()
        ) === false &&
        includesBlack === false &&
        toFile + 1 < 9
      ) {
        toFile += 1;
        availableSquares += formatSquareFile(toFile) + toRow.toString();

        if (
          piecesLocationB.includes(formatSquareFile(toFile) + toRow.toString())
        ) {
          includesBlack = true;
        }
      }

      toFile = currentFileNum;
      toRow = currentRow;
      includesBlack = false;
      while (
        piecesLocationW.includes(
          formatSquareFile(toFile - 1) + toRow.toString()
        ) === false &&
        includesBlack === false &&
        toFile - 1 > 0
      ) {
        toFile -= 1;
        availableSquares += formatSquareFile(toFile) + toRow.toString();

        if (
          piecesLocationB.includes(formatSquareFile(toFile) + toRow.toString())
        ) {
          includesBlack = true;
        }
      }

      toFile = currentFileNum;
      toRow = currentRow;
      includesBlack = false;
      while (
        piecesLocationW.includes(
          formatSquareFile(toFile) + (toRow + 1).toString()
        ) === false &&
        includesBlack === false &&
        toRow + 1 < 9
      ) {
        toRow += 1;
        availableSquares += formatSquareFile(toFile) + toRow.toString();

        if (
          piecesLocationB.includes(formatSquareFile(toFile) + toRow.toString())
        ) {
          includesBlack = true;
        }
      }

      toFile = currentFileNum;
      toRow = currentRow;
      includesBlack = false;
      while (
        piecesLocationW.includes(
          formatSquareFile(toFile) + (toRow - 1).toString()
        ) === false &&
        includesBlack === false &&
        toRow - 1 > 0
      ) {
        toRow -= 1;
        availableSquares += formatSquareFile(toFile) + toRow.toString();

        if (
          piecesLocationB.includes(formatSquareFile(toFile) + toRow.toString())
        ) {
          includesBlack = true;
        }
      }

      if (availableSquares.includes(pieceData.square)) {
        availableSquares = availableSquares.replace(pieceData.square, "");
      }
    }

    //Black Rook
    if (
      pieceData.type === "Rook" &&
      pieceData.id.includes("B") &&
      pieceData.square
    ) {
      let currentFileNum = formatSquareNum(
        pieceData.square.split("").splice(0, 1).toString()
      );
      let currentRow = parseInt(
        pieceData.square.split("").splice(1, 1).toString()
      );

      let toFile = currentFileNum;
      let toRow = currentRow;
      let includesWhite = false;

      while (
        piecesLocationB.includes(
          formatSquareFile(toFile + 1) + toRow.toString()
        ) === false &&
        includesWhite === false &&
        toFile + 1 < 9
      ) {
        toFile += 1;
        availableSquares += formatSquareFile(toFile) + toRow.toString();

        if (
          piecesLocationW.includes(formatSquareFile(toFile) + toRow.toString())
        ) {
          includesWhite = true;
        }
      }

      toFile = currentFileNum;
      toRow = currentRow;
      includesWhite = false;
      while (
        piecesLocationB.includes(
          formatSquareFile(toFile - 1) + toRow.toString()
        ) === false &&
        includesWhite === false &&
        toFile - 1 > 0
      ) {
        toFile -= 1;
        availableSquares += formatSquareFile(toFile) + toRow.toString();

        if (
          piecesLocationW.includes(formatSquareFile(toFile) + toRow.toString())
        ) {
          includesWhite = true;
        }
      }

      toFile = currentFileNum;
      toRow = currentRow;
      includesWhite = false;
      while (
        piecesLocationB.includes(
          formatSquareFile(toFile) + (toRow + 1).toString()
        ) === false &&
        includesWhite === false &&
        toRow + 1 < 9
      ) {
        toRow += 1;
        availableSquares += formatSquareFile(toFile) + toRow.toString();

        if (
          piecesLocationW.includes(formatSquareFile(toFile) + toRow.toString())
        ) {
          includesWhite = true;
        }
      }

      toFile = currentFileNum;
      toRow = currentRow;
      includesWhite = false;
      while (
        piecesLocationB.includes(
          formatSquareFile(toFile) + (toRow - 1).toString()
        ) === false &&
        includesWhite === false &&
        toRow - 1 > 0
      ) {
        toRow -= 1;
        availableSquares += formatSquareFile(toFile) + toRow.toString();

        if (
          piecesLocationW.includes(formatSquareFile(toFile) + toRow.toString())
        ) {
          includesWhite = true;
        }
      }

      if (availableSquares.includes(pieceData.square)) {
        availableSquares = availableSquares.replace(pieceData.square, "");
      }
    }

    //Bishop Logic

    //White Bishop
    if (
      pieceData.type === "Bishop" &&
      pieceData.id.includes("W") &&
      pieceData.square
    ) {
      let currentFileNum = formatSquareNum(
        pieceData.square.split("").splice(0, 1).toString()
      );
      let currentRow = parseInt(
        pieceData.square.split("").splice(1, 1).toString()
      );

      let toFile = currentFileNum;
      let toRow = currentRow;
      let includesBlack = false;

      while (
        piecesLocationW.includes(
          formatSquareFile(toFile + 1) + (toRow + 1).toString()
        ) === false &&
        includesBlack === false &&
        toFile + 1 < 9 &&
        toRow + 1 < 9
      ) {
        toFile += 1;
        toRow += 1;

        availableSquares += formatSquareFile(toFile) + toRow.toString();

        if (
          piecesLocationB.includes(formatSquareFile(toFile) + toRow.toString())
        ) {
          includesBlack = true;
        }
      }

      toFile = currentFileNum;
      toRow = currentRow;
      includesBlack = false;
      while (
        piecesLocationW.includes(
          formatSquareFile(toFile - 1) + (toRow + 1).toString()
        ) === false &&
        includesBlack === false &&
        toFile - 1 > 0 &&
        toRow + 1 < 9
      ) {
        toFile -= 1;
        toRow += 1;

        availableSquares += formatSquareFile(toFile) + toRow.toString();

        if (
          piecesLocationB.includes(formatSquareFile(toFile) + toRow.toString())
        ) {
          includesBlack = true;
        }
      }

      toFile = currentFileNum;
      toRow = currentRow;
      includesBlack = false;
      while (
        piecesLocationW.includes(
          formatSquareFile(toFile + 1) + (toRow - 1).toString()
        ) === false &&
        includesBlack === false &&
        toFile + 1 < 9 &&
        toRow - 1 > 0
      ) {
        toFile += 1;
        toRow -= 1;

        availableSquares += formatSquareFile(toFile) + toRow.toString();

        if (
          piecesLocationB.includes(formatSquareFile(toFile) + toRow.toString())
        ) {
          includesBlack = true;
        }
      }

      toFile = currentFileNum;
      toRow = currentRow;
      includesBlack = false;
      while (
        piecesLocationW.includes(
          formatSquareFile(toFile - 1) + (toRow - 1).toString()
        ) === false &&
        includesBlack === false &&
        toFile - 1 > 0 &&
        toRow - 1 > 0
      ) {
        toFile -= 1;
        toRow -= 1;

        availableSquares += formatSquareFile(toFile) + toRow.toString();

        if (
          piecesLocationB.includes(formatSquareFile(toFile) + toRow.toString())
        ) {
          includesBlack = true;
        }
      }
    }

    //Black Bishop
    if (
      pieceData.type === "Bishop" &&
      pieceData.id.includes("B") &&
      pieceData.square
    ) {
      let currentFileNum = formatSquareNum(
        pieceData.square.split("").splice(0, 1).toString()
      );
      let currentRow = parseInt(
        pieceData.square.split("").splice(1, 1).toString()
      );

      let toFile = currentFileNum;
      let toRow = currentRow;
      let includesWhite = false;

      while (
        piecesLocationB.includes(
          formatSquareFile(toFile + 1) + (toRow + 1).toString()
        ) === false &&
        includesWhite === false &&
        toFile + 1 < 9 &&
        toRow + 1 < 9
      ) {
        toFile += 1;
        toRow += 1;

        availableSquares += formatSquareFile(toFile) + toRow.toString();

        if (
          piecesLocationW.includes(formatSquareFile(toFile) + toRow.toString())
        ) {
          includesWhite = true;
        }
      }

      toFile = currentFileNum;
      toRow = currentRow;
      includesWhite = false;
      while (
        piecesLocationB.includes(
          formatSquareFile(toFile - 1) + (toRow + 1).toString()
        ) === false &&
        includesWhite === false &&
        toFile - 1 > 0 &&
        toRow + 1 < 9
      ) {
        toFile -= 1;
        toRow += 1;

        availableSquares += formatSquareFile(toFile) + toRow.toString();

        if (
          piecesLocationW.includes(formatSquareFile(toFile) + toRow.toString())
        ) {
          includesWhite = true;
        }
      }

      toFile = currentFileNum;
      toRow = currentRow;
      includesWhite = false;
      while (
        piecesLocationB.includes(
          formatSquareFile(toFile + 1) + (toRow - 1).toString()
        ) === false &&
        includesWhite === false &&
        toFile + 1 < 9 &&
        toRow - 1 > 0
      ) {
        toFile += 1;
        toRow -= 1;

        availableSquares += formatSquareFile(toFile) + toRow.toString();

        if (
          piecesLocationW.includes(formatSquareFile(toFile) + toRow.toString())
        ) {
          includesWhite = true;
        }
      }

      toFile = currentFileNum;
      toRow = currentRow;
      includesWhite = false;
      while (
        piecesLocationB.includes(
          formatSquareFile(toFile - 1) + (toRow - 1).toString()
        ) === false &&
        includesWhite === false &&
        toFile - 1 > 0 &&
        toRow - 1 > 0
      ) {
        toFile -= 1;
        toRow -= 1;

        availableSquares += formatSquareFile(toFile) + toRow.toString();

        if (
          piecesLocationW.includes(formatSquareFile(toFile) + toRow.toString())
        ) {
          includesWhite = true;
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
