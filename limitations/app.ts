function log<T extends string | number>(data: T): T {
  console.log(data);
  return data;
}

let ress1 = <string>log('i am string');
let ress2 = log(42) as number;
// let ress3 = log(true);
