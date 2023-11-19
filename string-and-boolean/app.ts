const string: string = 'Hello typeScript';

function transform(str: string, uppercase: boolean): string {
  if (uppercase) {
    return str.toUpperCase();
  }
  return str.toLowerCase();
}

const isUppercase: boolean = true;

console.log(transform(string, isUppercase));
console.log(transform(string, false));

const arrowTransform = (str: string, uppercase: boolean): string => {
  if (uppercase) {
    return str.toUpperCase();
  }
  return str.toLowerCase();
};
