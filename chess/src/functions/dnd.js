function dragPiece(event, isMouseDown) {
  if (isMouseDown) {
    const piecePos = {
      left: event.nativeEvent.clientX - 25,
      top: event.nativeEvent.clientY - 25,
    };
    return piecePos;
  }
  return;
}

export default dragPiece;
