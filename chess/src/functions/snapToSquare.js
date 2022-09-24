function snapToSquare(piecePosition) {
  if (piecePosition[0] < 32 && piecePosition[1] < 32) return "a8";
  if (piecePosition[0] < 32 && piecePosition[1] < 95) return "a7";
  if (piecePosition[0] < 32 && piecePosition[1] < 157) return "a6";
  if (piecePosition[0] < 32 && piecePosition[1] < 220) return "a5";
  if (piecePosition[0] < 32 && piecePosition[1] < 282) return "a4";
  if (piecePosition[0] < 32 && piecePosition[1] < 345) return "a3";
  if (piecePosition[0] < 32 && piecePosition[1] < 407) return "a2";
  if (piecePosition[0] < 32 && piecePosition[1] < 470) return "a1";

  if (piecePosition[0] < 95 && piecePosition[1] < 32) return "b8";
  if (piecePosition[0] < 95 && piecePosition[1] < 95) return "b7";
  if (piecePosition[0] < 95 && piecePosition[1] < 157) return "b6";
  if (piecePosition[0] < 95 && piecePosition[1] < 220) return "b5";
  if (piecePosition[0] < 95 && piecePosition[1] < 282) return "b4";
  if (piecePosition[0] < 95 && piecePosition[1] < 345) return "b3";
  if (piecePosition[0] < 95 && piecePosition[1] < 407) return "b2";
  if (piecePosition[0] < 95 && piecePosition[1] < 470) return "b1";

  if (piecePosition[0] < 157 && piecePosition[1] < 32) return "c8";
  if (piecePosition[0] < 157 && piecePosition[1] < 95) return "c7";
  if (piecePosition[0] < 157 && piecePosition[1] < 157) return "c6";
  if (piecePosition[0] < 157 && piecePosition[1] < 220) return "c5";
  if (piecePosition[0] < 157 && piecePosition[1] < 282) return "c4";
  if (piecePosition[0] < 157 && piecePosition[1] < 345) return "c3";
  if (piecePosition[0] < 157 && piecePosition[1] < 407) return "c2";
  if (piecePosition[0] < 157 && piecePosition[1] < 470) return "c1";

  if (piecePosition[0] < 220 && piecePosition[1] < 32) return "d8";
  if (piecePosition[0] < 220 && piecePosition[1] < 95) return "d7";
  if (piecePosition[0] < 220 && piecePosition[1] < 157) return "d6";
  if (piecePosition[0] < 220 && piecePosition[1] < 220) return "d5";
  if (piecePosition[0] < 220 && piecePosition[1] < 282) return "d4";
  if (piecePosition[0] < 220 && piecePosition[1] < 345) return "d3";
  if (piecePosition[0] < 220 && piecePosition[1] < 407) return "d2";
  if (piecePosition[0] < 220 && piecePosition[1] < 470) return "d1";

  if (piecePosition[0] < 282 && piecePosition[1] < 32) return "e8";
  if (piecePosition[0] < 282 && piecePosition[1] < 95) return "e7";
  if (piecePosition[0] < 282 && piecePosition[1] < 157) return "e6";
  if (piecePosition[0] < 282 && piecePosition[1] < 220) return "e5";
  if (piecePosition[0] < 282 && piecePosition[1] < 282) return "e4";
  if (piecePosition[0] < 282 && piecePosition[1] < 345) return "e3";
  if (piecePosition[0] < 282 && piecePosition[1] < 407) return "e2";
  if (piecePosition[0] < 282 && piecePosition[1] < 470) return "e1";

  if (piecePosition[0] < 345 && piecePosition[1] < 32) return "f8";
  if (piecePosition[0] < 345 && piecePosition[1] < 95) return "f7";
  if (piecePosition[0] < 345 && piecePosition[1] < 157) return "f6";
  if (piecePosition[0] < 345 && piecePosition[1] < 220) return "f5";
  if (piecePosition[0] < 345 && piecePosition[1] < 282) return "f4";
  if (piecePosition[0] < 345 && piecePosition[1] < 345) return "f3";
  if (piecePosition[0] < 345 && piecePosition[1] < 407) return "f2";
  if (piecePosition[0] < 345 && piecePosition[1] < 470) return "f1";

  if (piecePosition[0] < 407 && piecePosition[1] < 32) return "g8";
  if (piecePosition[0] < 407 && piecePosition[1] < 95) return "g7";
  if (piecePosition[0] < 407 && piecePosition[1] < 157) return "g6";
  if (piecePosition[0] < 407 && piecePosition[1] < 220) return "g5";
  if (piecePosition[0] < 407 && piecePosition[1] < 282) return "g4";
  if (piecePosition[0] < 407 && piecePosition[1] < 345) return "g3";
  if (piecePosition[0] < 407 && piecePosition[1] < 407) return "g2";
  if (piecePosition[0] < 407 && piecePosition[1] < 470) return "g1";

  if (piecePosition[0] > 407 && piecePosition[1] < 32) return "h8";
  if (piecePosition[0] > 407 && piecePosition[1] < 95) return "h7";
  if (piecePosition[0] > 407 && piecePosition[1] < 157) return "h6";
  if (piecePosition[0] > 407 && piecePosition[1] < 220) return "h5";
  if (piecePosition[0] > 407 && piecePosition[1] < 282) return "h4";
  if (piecePosition[0] > 407 && piecePosition[1] < 345) return "h3";
  if (piecePosition[0] > 407 && piecePosition[1] < 407) return "h2";
  if (piecePosition[0] > 407 && piecePosition[1] < 470) return "h1";
}

export default snapToSquare;
