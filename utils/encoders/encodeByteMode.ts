import { decimalToBitsArray } from "../extras/decimalToBitsArray";

export function encodeByteMode(input: string): number[] {
  const encoded: number[] = [];

  for (let i = 0; i < input.length; i++) {
    const charCode = input.charCodeAt(i);

    if (charCode > 0xFF) {
      throw new Error(
        `O caractere '${input[i]}' na posição ${i} não pode ser codificado em ISO 8859-1.`
      );
    }

    const bitsArray = decimalToBitsArray(8, charCode);
    encoded.push(...bitsArray);
  }

  return encoded;
}
