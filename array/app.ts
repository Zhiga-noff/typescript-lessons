const names: string[] = ['Kirill', 'Ivan', 'Igor'];

names.push('eva');

for (let name of names) {
  console.log(name.toUpperCase());
}

const result = names
  .filter(n => n !== 'Igor')
  .map(n => n.length)
  .reduce((acc, cur) => (acc += cur), 0);

console.log(result);

const objArr: {
  name: string;
  age: number;
  address: { city: string; street: string };
}[] = [
  {
    name: 'Kirill',
    age: 30,
    address: {
      city: 'Moscow',
      street: 'Lenina',
    },
  },
  {
    name: 'Kirill',
    age: 30,
    address: {
      city: 'Moscow',
      street: 'Lenina',
    },
  },
  {
    name: 'Kirill',
    age: 30,
    address: {
      city: 'Moscow',
      street: 'Lenina',
    },
  },
  {
    name: 'Kirill',
    age: 30,
    address: {
      city: 'Moscow',
      street: 'Lenina',
    },
  },
];
