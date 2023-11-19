const person = {
    name: 'Kirill',
    age: 29,
    surname: 'Zhiganov',
    address: {
        city: 'Moscow',
        street: 'Lenina',
    },
};
let temp = 'any string';
const fullName = (obj) => {
    return obj.name + ' ' + obj.surname;
};
console.log(fullName(person));
