import { decimalToBitsArray } from "../extras/decimalToBitsArray";

export function encodeNumericMode(input: string): number[] {
  //Divide em grupo de 3
  const groups = input.match(/\d{1,3}/g) || [];
  const encodedBinary: number[] = [];

  //Codifica conforme a quantidade de bits necessária
  groups.forEach(group => {
    const number = parseInt(group, 10);
    const length = number.toFixed(0).length;
    if (length === 3) {
      encodedBinary.push(...decimalToBitsArray(10, number));
    } else if (length === 2) {
      encodedBinary.push(...decimalToBitsArray(7, number));
    } else {
      encodedBinary.push(...decimalToBitsArray(4, number));
    }
  });

  return encodedBinary;
}
