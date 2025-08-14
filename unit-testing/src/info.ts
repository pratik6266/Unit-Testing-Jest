export function max(a: number, b: number): number {
  return a > b ? a : b;
}

export function fizzbuzz(a: number): string {
  if (a % 3 === 0 && a % 5 === 0) {
    return 'fizzbuzz';
  } else if (a % 3 === 0) {
    return 'fizz';
  } else if (a % 5 === 0) {
    return 'buzz';
  }
  return a.toString();
}