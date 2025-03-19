import { decimalToBitsArray } from "../extras/decimalToBitsArray"
import { getQRCodeSize } from "../extras/getQRCodeSize"
import { polyRemainder } from "./polyRemainder"

function getVersionInformationBits(qrVersion: number): number[] {
  const qrVersionBits = qrVersion << 12 // Shift de 12 -> XX XXXX 0000 0000 0000

  let result = qrVersionBits

  const G = 0b000001111100100101 // generator polynomial

  const golay = polyRemainder(result, G) // Goley code

  // OR binário
  result = qrVersionBits ^ golay

  // Converter o código em um array de bits de tamanho 18
  const resultBits = decimalToBitsArray(18, result)

  // console.log("pol: " + decimalToBitsArray(18, qrVersionBits))
  // console.log("golay: " + decimalToBitsArray(18, golay))
  // console.log("result: " + decimalToBitsArray(18, result))

  return resultBits
}

//cor 6
const color = 6;
export function versionInformation(data: number[][], qrVersion: number) {
  const lastIndex = getQRCodeSize(qrVersion) - 1

  if (qrVersion < 7) return

  const versionInformationBits = [
    ...getVersionInformationBits(qrVersion),
  ].reverse()

  for (let i = 0; i < 6; i++) {
    // SD // Vertical
    data[lastIndex - 10][i] = versionInformationBits[i * 3] * color || -color
    data[lastIndex - 9][i] = versionInformationBits[i * 3 + 1] * color || -color
    data[lastIndex - 8][i] = versionInformationBits[i * 3 + 2] * color || -color
    // IE // Horizontal
    data[i][lastIndex - 10] = versionInformationBits[i * 3] * color || -color
    data[i][lastIndex - 9] = versionInformationBits[i * 3 + 1] * color || -color
    data[i][lastIndex - 8] = versionInformationBits[i * 3 + 2] * color || -color
  }
}