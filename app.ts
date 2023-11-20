type IProduct = {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
};

const totalPrice = <T extends IProduct>({
  price,
  discount,
  isInstallment,
  months,
}: T): number => {
  const res = 0;
  return res;
};

// const price = totalPrice({
//   price: 100000,
//   discount: 25,
//   isInstallment: true,
//   months: 12,
// });

// console.log(price); // 6250
