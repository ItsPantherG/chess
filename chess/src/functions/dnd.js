function dragPiece(event, isMouseDown, offsetX, offsetY) {
  if (isMouseDown) {
    const piecePos = {
      top: event.nativeEvent.clientX - offsetX,
      left: event.nativeEvent.clientY - offsetY,
    };
    return piecePos;
  }
  return;
}

export default dragPiece;
