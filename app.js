const totalPrice = ({ price, discount, isInstallment, months, }) => {
    let result = price;
    if (isInstallment) {
        result = price - result * (discount / 100);
    }
    result = result / months;
    return result;
};
const price = totalPrice({
    price: 100000,
    discount: 25,
    isInstallment: true,
    months: 12,
});
console.log(price); // 6250
