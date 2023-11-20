interface IProduct {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}

const totalPrice = <T extends IProduct>({
  price,
  discount,
  isInstallment,
  months,
}: T): number => {
  let result: number = price;

  if (isInstallment) {
    result = price - result * (discount / 100);
  }

  result = result / months;

  return result;
};

const price = totalPrice({
  price: 100_000,
  discount: 25,
  isInstallment: true,
  months: 12,
});

console.log(price); // 6250
