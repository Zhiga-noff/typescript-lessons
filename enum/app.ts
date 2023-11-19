// const ROLES = {
//   ADMIN: 'admin',
//   USER: 'user',
// };

enum Roles {
  admin,
  user,
}

const person1 = {
  role: Roles.admin,
};

const person2 = {
  role: Roles.user,
};

const check = (person: { role: Roles }) => {
  if (person.role === Roles.admin) {
    console.log('user is admin');
  } else {
    console.log('user is user');
  }
};

const temper = {
  role: 'starwars',
};

check(person1);
check(person2);
