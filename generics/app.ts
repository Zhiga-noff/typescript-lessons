const array: Array<string> = ['a', 'b', 'c'];

const array2: Array<number> = [1, 2, 3];

const promise = new Promise<string>(resolve => {
  setTimeout(() => {
    resolve('promise has been resolve');
  });
});

promise.then(value => value);
