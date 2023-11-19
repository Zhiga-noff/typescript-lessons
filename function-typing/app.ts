function loger(data: any): void {
  console.log(data);
}

function summer(a: number, b: number, callback: (d: any) => void): number {
  const result = a + b;
  callback(result);
  return result;
}

let fn: (n10: number, n2: number, cb: (d: any) => void) => number;

fn = summer;

loger(fn(1, 2, loger));
