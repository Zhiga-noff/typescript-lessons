function compute(p1: number | string, p2: number | string): string | number {
  if (typeof p1 === 'number' && typeof p2 === 'number') {
    return p1 + p2;
  }
  return p1.toString() + ' ' + p2.toString();
}

console.log(compute(4, 5));
console.log(compute('hello', 'world'));

function logError(err: string | string[]): string | void {
  if (Array.isArray(err)) {
    return err.reduce((acc, cur) => (acc += ' ' + cur), '');
  } else {
    console.log(err);
  }
}
