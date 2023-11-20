const obj = {
  a: 1,
  b: 2,
  c: 'a',
  key: 42,
};

const obj2 = { test: 1000 };

function getValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key];
}

const resr1 = getValue(obj, 'key');
const resr2 = getValue(obj2, 'test');
