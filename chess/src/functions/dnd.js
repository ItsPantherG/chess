function dragPiece(event, isMouseDown) {
  if (isMouseDown) {
    const piecePos = {
      top: event.nativeEvent.clientX - 86,
      left: event.nativeEvent.clientY - 84,
    };
    return piecePos;
  }
  return;
}

export default dragPiece;
