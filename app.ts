function isBoolean(value: string | boolean): value is boolean {
  return typeof value === 'boolean';
}

function isString(value: string | boolean): value is string {
  return typeof value === 'string';
}

function logFlag(flag: string | boolean): void {
  if (isBoolean(flag)) {
    console.log('Hey this is boolean');
  } else if (isString(flag)) {
    console.log('Hey this is string');
  }
}

console.log(isString('text'));
console.log(isBoolean(true));
logFlag(true);
logFlag('test');
