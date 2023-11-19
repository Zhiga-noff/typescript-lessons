// const ROLES = {
//   ADMIN: 'admin',
//   USER: 'user',
// };
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 0] = "admin";
    Roles[Roles["user"] = 1] = "user";
})(Roles || (Roles = {}));
const person1 = {
    role: Roles.admin,
};
const person2 = {
    role: Roles.user,
};
const check = (person) => {
    if (person.role === Roles.admin) {
        console.log('user is admin');
    }
    else {
        console.log('user is user');
    }
};
const temper = {
    role: 'starwars',
};
check(person1);
check(person2);
