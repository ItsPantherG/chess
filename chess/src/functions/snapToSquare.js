function snapToSquare(piecePosition) {
  if (piecePosition[0] < 93 && piecePosition[1] < 93) return "a8";
  if (piecePosition[0] < 93 && piecePosition[1] < 157) return "a7";
  if (piecePosition[0] < 93 && piecePosition[1] < 219) return "a6";
  if (piecePosition[0] < 93 && piecePosition[1] < 283) return "a5";
  if (piecePosition[0] < 93 && piecePosition[1] < 346) return "a4";
  if (piecePosition[0] < 93 && piecePosition[1] < 410) return "a3";
  if (piecePosition[0] < 93 && piecePosition[1] < 470) return "a2";
  if (piecePosition[0] < 93 && piecePosition[1] < 510) return "a1";

  if (piecePosition[0] < 157 && piecePosition[1] < 93) return "b8";
  if (piecePosition[0] < 157 && piecePosition[1] < 157) return "b7";
  if (piecePosition[0] < 157 && piecePosition[1] < 219) return "b6";
  if (piecePosition[0] < 157 && piecePosition[1] < 283) return "b5";
  if (piecePosition[0] < 157 && piecePosition[1] < 346) return "b4";
  if (piecePosition[0] < 157 && piecePosition[1] < 410) return "b3";
  if (piecePosition[0] < 157 && piecePosition[1] < 470) return "b2";
  if (piecePosition[0] < 157 && piecePosition[1] < 510) return "b1";

  if (piecePosition[0] < 219 && piecePosition[1] < 93) return "c8";
  if (piecePosition[0] < 219 && piecePosition[1] < 157) return "c7";
  if (piecePosition[0] < 219 && piecePosition[1] < 219) return "c6";
  if (piecePosition[0] < 219 && piecePosition[1] < 283) return "c5";
  if (piecePosition[0] < 219 && piecePosition[1] < 346) return "c4";
  if (piecePosition[0] < 219 && piecePosition[1] < 410) return "c3";
  if (piecePosition[0] < 219 && piecePosition[1] < 470) return "c2";
  if (piecePosition[0] < 219 && piecePosition[1] < 510) return "c1";

  if (piecePosition[0] < 283 && piecePosition[1] < 93) return "d8";
  if (piecePosition[0] < 283 && piecePosition[1] < 157) return "d7";
  if (piecePosition[0] < 283 && piecePosition[1] < 219) return "d6";
  if (piecePosition[0] < 283 && piecePosition[1] < 283) return "d5";
  if (piecePosition[0] < 283 && piecePosition[1] < 346) return "d4";
  if (piecePosition[0] < 283 && piecePosition[1] < 410) return "d3";
  if (piecePosition[0] < 283 && piecePosition[1] < 470) return "d2";
  if (piecePosition[0] < 283 && piecePosition[1] < 510) return "d1";

  if (piecePosition[0] < 346 && piecePosition[1] < 93) return "e8";
  if (piecePosition[0] < 346 && piecePosition[1] < 157) return "e7";
  if (piecePosition[0] < 346 && piecePosition[1] < 219) return "e6";
  if (piecePosition[0] < 346 && piecePosition[1] < 283) return "e5";
  if (piecePosition[0] < 346 && piecePosition[1] < 346) return "e4";
  if (piecePosition[0] < 346 && piecePosition[1] < 410) return "e3";
  if (piecePosition[0] < 346 && piecePosition[1] < 470) return "e2";
  if (piecePosition[0] < 346 && piecePosition[1] < 510) return "e1";

  if (piecePosition[0] < 410 && piecePosition[1] < 93) return "f8";
  if (piecePosition[0] < 410 && piecePosition[1] < 157) return "f7";
  if (piecePosition[0] < 410 && piecePosition[1] < 219) return "f6";
  if (piecePosition[0] < 410 && piecePosition[1] < 283) return "f5";
  if (piecePosition[0] < 410 && piecePosition[1] < 346) return "f4";
  if (piecePosition[0] < 410 && piecePosition[1] < 410) return "f3";
  if (piecePosition[0] < 410 && piecePosition[1] < 470) return "f2";
  if (piecePosition[0] < 410 && piecePosition[1] < 510) return "f1";

  if (piecePosition[0] < 470 && piecePosition[1] < 93) return "g8";
  if (piecePosition[0] < 470 && piecePosition[1] < 157) return "g7";
  if (piecePosition[0] < 470 && piecePosition[1] < 219) return "g6";
  if (piecePosition[0] < 470 && piecePosition[1] < 283) return "g5";
  if (piecePosition[0] < 470 && piecePosition[1] < 346) return "g4";
  if (piecePosition[0] < 470 && piecePosition[1] < 410) return "g3";
  if (piecePosition[0] < 470 && piecePosition[1] < 470) return "g2";
  if (piecePosition[0] < 470 && piecePosition[1] < 510) return "g1";

  if (piecePosition[0] > 470 && piecePosition[1] < 93) return "h8";
  if (piecePosition[0] > 470 && piecePosition[1] < 157) return "h7";
  if (piecePosition[0] > 470 && piecePosition[1] < 219) return "h6";
  if (piecePosition[0] > 470 && piecePosition[1] < 283) return "h5";
  if (piecePosition[0] > 470 && piecePosition[1] < 346) return "h4";
  if (piecePosition[0] > 470 && piecePosition[1] < 410) return "h3";
  if (piecePosition[0] > 470 && piecePosition[1] < 470) return "h2";
  if (piecePosition[0] > 470 && piecePosition[1] < 510) return "h1";
}

export default snapToSquare;
