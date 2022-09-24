function dragPiece(event, isMouseDown) {
  if (isMouseDown) {
    const piecePos = {
      left: event.nativeEvent.clientX - 86,
      top: event.nativeEvent.clientY - 84,
    };
    return piecePos;
  }
  return;
}

export default dragPiece;
