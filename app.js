function isBoolean(value) {
    return typeof value === 'boolean';
}
function isString(value) {
    return typeof value === 'string';
}
function logFlag(flag) {
    if (isBoolean(flag)) {
        console.log('Hey this is boolean');
    }
    else if (isString(flag)) {
        console.log('Hey this is string');
    }
}
console.log(isString('text'));
console.log(isBoolean(true));
logFlag(true);
logFlag('test');
