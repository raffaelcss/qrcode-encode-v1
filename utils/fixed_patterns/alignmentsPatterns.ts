function getAlignmentPatternPositions(version: number): number[] {
  const alignmentPatternPositions: { [key: number]: number[] } = {
    1: [],
    2: [6, 18],
    3: [6, 22],
    4: [6, 26],
    5: [6, 30],
    6: [6, 34],
    7: [6, 22, 38],
    8: [6, 24, 42],
    9: [6, 26, 46],
    10: [6, 28, 50],
    11: [6, 30, 54],
    12: [6, 32, 58],
    13: [6, 34, 62],
    14: [6, 26, 46, 66],
    15: [6, 26, 48, 70],
    16: [6, 26, 50, 74],
    17: [6, 30, 54, 78],
    18: [6, 30, 56, 82],
    19: [6, 30, 58, 86],
    20: [6, 34, 62, 90],
    21: [6, 28, 50, 72, 94],
    22: [6, 26, 50, 74, 98],
    23: [6, 30, 54, 78, 102],
    24: [6, 28, 54, 80, 106],
    25: [6, 32, 58, 84, 110],
    26: [6, 30, 58, 86, 114],
    27: [6, 34, 62, 90, 118],
    28: [6, 26, 50, 74, 98, 122],
    29: [6, 30, 54, 78, 102, 126],
    30: [6, 26, 52, 78, 104, 130],
    31: [6, 30, 56, 82, 108, 134],
    32: [6, 34, 60, 86, 112, 138],
    33: [6, 30, 58, 86, 114, 142],
    34: [6, 34, 62, 90, 118, 146],
    35: [6, 30, 54, 78, 102, 126, 150],
    36: [6, 24, 50, 76, 102, 128, 154],
    37: [6, 28, 54, 80, 106, 132, 158],
    38: [6, 32, 58, 84, 110, 136, 162],
    39: [6, 26, 54, 82, 110, 138, 166],
    40: [6, 30, 58, 86, 114, 142, 170],
  }
  return alignmentPatternPositions[version] || []
}

//Cor 4
const color = 4
export function alignmentsPatterns(
  data: number[][],
  qrVersion: number,
  alignments: number[]
) {
  // Descobrir como aparecem
  alignments = getAlignmentPatternPositions(qrVersion)

  for (let k = 0; k < alignments.length; k++) {
    for (let l = 0; l < alignments.length; l++) {
      const x = alignments[k]
      const y = alignments[l]

      // Saltar findPatterns
      if (k == 0 && l == 0) continue // SE
      if (k == alignments.length - 1 && l == 0) continue // SD
      if (k == 0 && l == alignments.length - 1) continue // IE

      // Preto
      for (let i = x - 2; i <= x + 2; i++) {
        for (let j = y - 2; j <= y + 2; j++) {
          data[i][j] = 1 * color
        }
      }
      // Horizontal
      for (let i = y - 1; i <= y + 1; i++) {
        data[x - 1][i] = 0 || -color
        data[x + 1][i] = 0 || -color
      }
      data[x][y - 1] = 0 || -color
      data[x][y + 1] = 0 || -color
    }
  }
}