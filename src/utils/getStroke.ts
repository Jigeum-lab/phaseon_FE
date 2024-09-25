export function getStroke(idx: number, iconWithFill: number[], currentCategory: number) {
  if (!iconWithFill.includes(idx)) {
    if (currentCategory === idx) {
      return '#247BFF';
    }
    return '#47484C';
  }
  return 'none';
}
