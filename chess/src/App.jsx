import React, { useState } from "react";
import "./css/App.css";
import Board from "./components/board";

function App() {
  const [piecePosition, setPiecePositon] = useState(0);
  const [snapTo, setSnapTo] = useState("a1");

  function piecePos(pos, isMouseDown) {
    setPiecePositon(pos);
    if (isMouseDown) return snapToSquare();
  }

  function snapToSquare() {
    if (piecePosition[0] < 32 && piecePosition[1] < 32) return setSnapTo("a8");
    if (piecePosition[0] < 32 && piecePosition[1] < 95) return setSnapTo("a7");
    if (piecePosition[0] < 32 && piecePosition[1] < 157) return setSnapTo("a6");
    if (piecePosition[0] < 32 && piecePosition[1] < 220) return setSnapTo("a5");
    if (piecePosition[0] < 32 && piecePosition[1] < 282) return setSnapTo("a4");
    if (piecePosition[0] < 32 && piecePosition[1] < 345) return setSnapTo("a3");
    if (piecePosition[0] < 32 && piecePosition[1] < 407) return setSnapTo("a2");
    if (piecePosition[0] < 32 && piecePosition[1] < 470) return setSnapTo("a1");

    if (piecePosition[0] < 95 && piecePosition[1] < 32) return setSnapTo("b8");
    if (piecePosition[0] < 95 && piecePosition[1] < 95) return setSnapTo("b7");
    if (piecePosition[0] < 95 && piecePosition[1] < 157) return setSnapTo("b6");
    if (piecePosition[0] < 95 && piecePosition[1] < 220) return setSnapTo("b5");
    if (piecePosition[0] < 95 && piecePosition[1] < 282) return setSnapTo("b4");
    if (piecePosition[0] < 95 && piecePosition[1] < 345) return setSnapTo("b3");
    if (piecePosition[0] < 95 && piecePosition[1] < 407) return setSnapTo("b2");
    if (piecePosition[0] < 95 && piecePosition[1] < 470) return setSnapTo("b1");

    if (piecePosition[0] < 157 && piecePosition[1] < 32) return setSnapTo("c8");
    if (piecePosition[0] < 157 && piecePosition[1] < 95) return setSnapTo("c7");
    if (piecePosition[0] < 157 && piecePosition[1] < 157)
      return setSnapTo("c6");
    if (piecePosition[0] < 157 && piecePosition[1] < 220)
      return setSnapTo("c5");
    if (piecePosition[0] < 157 && piecePosition[1] < 282)
      return setSnapTo("c4");
    if (piecePosition[0] < 157 && piecePosition[1] < 345)
      return setSnapTo("c3");
    if (piecePosition[0] < 157 && piecePosition[1] < 407)
      return setSnapTo("c2");
    if (piecePosition[0] < 157 && piecePosition[1] < 470)
      return setSnapTo("c1");

    if (piecePosition[0] < 220 && piecePosition[1] < 32) return setSnapTo("d8");
    if (piecePosition[0] < 220 && piecePosition[1] < 95) return setSnapTo("d7");
    if (piecePosition[0] < 220 && piecePosition[1] < 157)
      return setSnapTo("d6");
    if (piecePosition[0] < 220 && piecePosition[1] < 220)
      return setSnapTo("d5");
    if (piecePosition[0] < 220 && piecePosition[1] < 282)
      return setSnapTo("d4");
    if (piecePosition[0] < 220 && piecePosition[1] < 345)
      return setSnapTo("d3");
    if (piecePosition[0] < 220 && piecePosition[1] < 407)
      return setSnapTo("d2");
    if (piecePosition[0] < 220 && piecePosition[1] < 470)
      return setSnapTo("d1");

    if (piecePosition[0] < 282 && piecePosition[1] < 32) return setSnapTo("e8");
    if (piecePosition[0] < 282 && piecePosition[1] < 95) return setSnapTo("e7");
    if (piecePosition[0] < 282 && piecePosition[1] < 157)
      return setSnapTo("e6");
    if (piecePosition[0] < 282 && piecePosition[1] < 220)
      return setSnapTo("e5");
    if (piecePosition[0] < 282 && piecePosition[1] < 282)
      return setSnapTo("e4");
    if (piecePosition[0] < 282 && piecePosition[1] < 345)
      return setSnapTo("e3");
    if (piecePosition[0] < 282 && piecePosition[1] < 407)
      return setSnapTo("e2");
    if (piecePosition[0] < 282 && piecePosition[1] < 470)
      return setSnapTo("e1");

    if (piecePosition[0] < 345 && piecePosition[1] < 32) return setSnapTo("f8");
    if (piecePosition[0] < 345 && piecePosition[1] < 95) return setSnapTo("f7");
    if (piecePosition[0] < 345 && piecePosition[1] < 157)
      return setSnapTo("f6");
    if (piecePosition[0] < 345 && piecePosition[1] < 220)
      return setSnapTo("f5");
    if (piecePosition[0] < 345 && piecePosition[1] < 282)
      return setSnapTo("f4");
    if (piecePosition[0] < 345 && piecePosition[1] < 345)
      return setSnapTo("f3");
    if (piecePosition[0] < 345 && piecePosition[1] < 407)
      return setSnapTo("f2");
    if (piecePosition[0] < 345 && piecePosition[1] < 470)
      return setSnapTo("f1");

    if (piecePosition[0] < 407 && piecePosition[1] < 32) return setSnapTo("g8");
    if (piecePosition[0] < 407 && piecePosition[1] < 95) return setSnapTo("g7");
    if (piecePosition[0] < 407 && piecePosition[1] < 157)
      return setSnapTo("g6");
    if (piecePosition[0] < 407 && piecePosition[1] < 220)
      return setSnapTo("g5");
    if (piecePosition[0] < 407 && piecePosition[1] < 282)
      return setSnapTo("g4");
    if (piecePosition[0] < 407 && piecePosition[1] < 345)
      return setSnapTo("g3");
    if (piecePosition[0] < 407 && piecePosition[1] < 407)
      return setSnapTo("g2");
    if (piecePosition[0] < 407 && piecePosition[1] < 470)
      return setSnapTo("g1");

    if (piecePosition[0] > 407 && piecePosition[1] < 32) return setSnapTo("h8");
    if (piecePosition[0] > 407 && piecePosition[1] < 95) return setSnapTo("h7");
    if (piecePosition[0] > 407 && piecePosition[1] < 157)
      return setSnapTo("h6");
    if (piecePosition[0] > 407 && piecePosition[1] < 220)
      return setSnapTo("h5");
    if (piecePosition[0] > 407 && piecePosition[1] < 282)
      return setSnapTo("h4");
    if (piecePosition[0] > 407 && piecePosition[1] < 345)
      return setSnapTo("h3");
    if (piecePosition[0] > 407 && piecePosition[1] < 407)
      return setSnapTo("h2");
    if (piecePosition[0] > 407 && piecePosition[1] < 470)
      return setSnapTo("h1");
  }

  return (
    <div className="app">
      <Board piecePos={piecePos} snapPieceTo={snapTo} />
    </div>
  );
}

export default App;
