export function getFill(idx: number, iconWithFill: number[], currentCategory: number, color: string) {
  if (iconWithFill.includes(idx)) {
    if (currentCategory === idx) {
      return color;
    }
    return '#47484C';
  }
  return 'none';
}
