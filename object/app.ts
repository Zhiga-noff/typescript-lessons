const person: {
  name: string;
  age: number;
  surname: string;
  address: { city: string; street?: string };
} = {
  name: 'Kirill',
  age: 29,
  surname: 'Zhiganov',
  address: {
    city: 'Moscow',
    street: 'Lenina',
  },
};

let temp: any = 'any string';

const fullName = (obj: { name: string; surname: string }): string => {
  return obj.name + ' ' + obj.surname;
};

console.log(fullName(person));
