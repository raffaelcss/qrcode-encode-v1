import { getQRCodeSize } from "../extras/getQRCodeSize"

//Cor 2
const color = 2
export function timingPatterns(data: number[][], qrVersion: number) {
  const patternPosition = 6
  const lastIndex = getQRCodeSize(qrVersion) - 1
  // Horizontal
  for (let i = 0; i <= lastIndex; i++) {
    const bit = (i + 1) % 2
    data[patternPosition][i] = bit * color || -color
  }
  // Vertical
  for (let i = 0; i <= lastIndex; i++) {
    const bit = (i + 1) % 2
    data[i][patternPosition] = bit * color || -color
  }
}