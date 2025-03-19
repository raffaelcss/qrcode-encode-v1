import { getQRCodeSize } from "../extras/getQRCodeSize"

//Cor 3
const color = 3
export function findPatterns(data: number[][], qrVersion: number) {
  const firstIndex = 0
  const lastIndex = getQRCodeSize(qrVersion) - 1

  // Branco
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      // SE
      data[i][j] = 0 || -color
      // SD
      data[i][lastIndex - j] = 0 || -color
      // IE
      data[lastIndex - i][j] = 0 || -color
    }
  }
  // Horizontal
  for (let i = 0; i < 7; i++) {
    // SE
    data[firstIndex][i] = 1 * color
    data[firstIndex + 6][i] = 1 * color
    // SD
    data[firstIndex][lastIndex - i] = 1 * color
    data[firstIndex + 6][lastIndex - i] = 1 * color
    // IE
    data[lastIndex - 6][i] = 1 * color
    data[lastIndex][i] = 1 * color
  }
  // Vertical
  for (let i = 1; i < 6; i++) {
    // SE
    data[i][firstIndex] = 1 * color
    data[i][firstIndex + 6] = 1 * color
    // SD
    data[i][lastIndex] = 1 * color
    data[i][lastIndex - 6] = 1 * color
    // IE
    data[lastIndex - i][firstIndex] = 1 * color
    data[lastIndex - i][firstIndex + 6] = 1 * color
  }
  // Centros
  for (let i = 2; i < 5; i++) {
    // SE
    for (let j = 2; j < 5; j++) {
      data[firstIndex + j][i] = 1 * color
    }
    // SD
    for (let j = 2; j < 5; j++) {
      data[firstIndex + j][lastIndex - i] = 1 * color
    }
    // IE
    for (let j = 2; j < 5; j++) {
      data[lastIndex - j][i] = 1 * color
    }
  }
}