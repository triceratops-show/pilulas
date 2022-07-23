export function applyStyle(
  style:
    | React.CSSProperties
    | ((fps: number, frame: number) => React.CSSProperties)
    | undefined,
  fps: number,
  frame: number
) {
  if (typeof style === 'function') {
    return style(fps, frame);
  }

  return style;
}
