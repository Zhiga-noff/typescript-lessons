// type User = {
//   name: string;
//   age: number;
//   hobbies: string[];
// };

type CallbackFn = (data: string[]) => void;

interface User {
  name: string;
  age: number;
  hobbies: string[];
}

interface Address {
  city: string;
  street: string;
}

interface FullUser extends User, Address {
  date: Date;
}

const person: FullUser = {
  name: 'Kirill',
  age: 30,
  hobbies: ['a', 'b', 'c'],
  city: 'Moscow',
  street: 'Lenina',
  date: new Date(),
};

interface UserMap {
  [id: number]: FullUser;

  date?: Date;
}

const userMap = {
  1: person,
  2: person,
  3: person,
} as UserMap;
