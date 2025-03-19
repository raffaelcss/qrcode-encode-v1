import { decimalToBitsArray } from "../extras/decimalToBitsArray";
import { getQRCodeSize } from "../extras/getQRCodeSize";
import { polyRemainder } from "./polyRemainder";

function getFormatInformationBits(
  errorLevel: number,
  dataMaskPattern: number
): number[] {
  const errorBits = errorLevel << 13 // Shift de 13 -> XX0 0000 0000 0000
  const maskBits = dataMaskPattern << 10 // Shift de 10 -> 00X XX00 0000 0000

  // Or binário
  let result = errorBits | maskBits

  const G = 0b000010100110111 // generator polynomial

  const bhc = polyRemainder(result, G) // BCH code

  // Aplica o XOR
  const XOR = 0b101010000010010
  result = (errorBits | maskBits | bhc) ^ XOR

  // Converter o código em um array de bits de tamanho 15
  const resultBits = decimalToBitsArray(15, result)

  // console.log("pol: " + decimalToBitsArray(15, errorBits | maskBits))
  // console.log("bhc: " + decimalToBitsArray(15, bhc))
  // console.log("result: " + decimalToBitsArray(15, result))

  return resultBits
}

//cor 5
const color = 5;
export function formatInformation(
  data: number[][],
  qrVersion: number,
  errorLevel: number,
  dataMaskPattern: number
) {
  const firstIndex = 0
  const lastIndex = getQRCodeSize(qrVersion) - 1;

  const formatInformationBits = [
    ...getFormatInformationBits(errorLevel, dataMaskPattern),
  ].reverse()

  // 0 - 7
  let dataCount = 0
  let count = 0
  while (dataCount < 8) {
    // SD
    data[lastIndex - dataCount][8] = formatInformationBits[dataCount] * color || -color
    // SE
    if (data[8][count] == null) {
      data[8][count] = formatInformationBits[dataCount] * color || -color
      dataCount++
    }
    count++
  }

  // 8 - 14
  count = 0
  while (dataCount < 15) {
    // IE
    data[8][lastIndex - 15 + dataCount + 1] = formatInformationBits[dataCount] * color || -color
    // SE
    if (data[8 - count][8] == null) {
      data[8 - count][8] = formatInformationBits[dataCount] * color || -color
      dataCount++
    }
    count++
  }
  // 15 Ever Black
  data[8][lastIndex - 7] = 1;
}