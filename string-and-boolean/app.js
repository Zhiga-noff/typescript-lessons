const string = 'Hello typeScript';
function transform(str, uppercase) {
    if (uppercase) {
        return str.toUpperCase();
    }
    return str.toLowerCase();
}
const isUppercase = true;
console.log(transform(string, isUppercase));
console.log(transform(string, false));
const arrowTransform = (str, uppercase) => {
    if (uppercase) {
        return str.toUpperCase();
    }
    return str.toLowerCase();
};
