import { decimalToBitsArray } from "../extras/decimalToBitsArray";

const alphaNumericTable: { [char: string]: number } = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
  'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14,
  'F': 15, 'G': 16, 'H': 17, 'I': 18, 'J': 19,
  'K': 20, 'L': 21, 'M': 22, 'N': 23, 'O': 24,
  'P': 25, 'Q': 26, 'R': 27, 'S': 28, 'T': 29,
  'U': 30, 'V': 31, 'W': 32, 'X': 33, 'Y': 34,
  'Z': 35, ' ': 36, '$': 37, '%': 38, '*': 39,
  '+': 40, '-': 41, '.': 42, '/': 43, ':': 44
};

export function encodeAlphanumericMode(input: string): number[] {
  const upperInput = input.toUpperCase();
  const pairs: number[] = [];

  for (let i = 0; i < upperInput.length; i += 2) {
    if (i + 1 < upperInput.length) {
      const firstValue = alphaNumericTable[upperInput[i]];
      const secondValue = alphaNumericTable[upperInput[i + 1]];
      const numericValue = (firstValue * 45) + secondValue;
      pairs.push(...decimalToBitsArray(11, numericValue));
    } else {
      const singleValue = alphaNumericTable[upperInput[i]];
      pairs.push(...decimalToBitsArray(6, singleValue));
    }
  }

  return pairs;
}