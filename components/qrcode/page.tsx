interface QrCodeComponentProps {
  qrVersion: number
  errorLevel: number
  dataMaskPattern: number
  dataToEncode: string
}

/*****************************************/
/*                                       */
/*        Funções auxiliares             */
/*                                       */
/*****************************************/
function getTotalNumberOfCodewords(version: number): number {
  const totalCodewords = [
    26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733,
    815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051,
    2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706,
  ]
  if (version >= 1 && version <= 40) {
    return totalCodewords[version - 1]
  } else {
    return -1
  }
}

function getErrorCorrectionCodewords(
  version: number,
  errorLevel: number
): number {
  const errorCorrectionCodewords = [
    [10, 7, 17, 13], // Versão 1
    [16, 10, 28, 22], // Versão 2
    [26, 15, 44, 36], // Versão 3
    [36, 20, 64, 52], // Versão 4
    [48, 26, 88, 72], // Versão 5
    [64, 36, 112, 96], // Versão 6
    [72, 40, 130, 108], // Versão 7
    [88, 48, 156, 132], // Versão 8
    [110, 60, 192, 160], // Versão 9
    [130, 72, 224, 192], // Versão 10
    [150, 80, 264, 224], // Versão 11
    [176, 96, 308, 260], // Versão 12
    [198, 104, 352, 288], // Versão 13
    [216, 120, 384, 320], // Versão 14
    [240, 132, 432, 360], // Versão 15
    [280, 144, 480, 408], // Versão 16
    [308, 168, 532, 448], // Versão 17
    [338, 180, 588, 504], // Versão 18
    [364, 196, 650, 546], // Versão 19
    [416, 224, 700, 600], // Versão 20
    [442, 224, 750, 644], // Versão 21
    [476, 252, 816, 690], // Versão 22
    [504, 270, 900, 750], // Versão 23
    [560, 300, 960, 810], // Versão 24
    [588, 312, 1050, 870], // Versão 25
    [644, 336, 1110, 952], // Versão 26
    [700, 360, 1200, 1020], // Versão 27
    [728, 390, 1260, 1050], // Versão 28
    [784, 420, 1350, 1140], // Versão 29
    [812, 450, 1440, 1200], // Versão 30
    [868, 480, 1530, 1290], // Versão 31
    [924, 510, 1620, 1350], // Versão 32
    [980, 540, 1710, 1440], // Versão 33
    [1036, 570, 1800, 1530], // Versão 34
    [1064, 570, 1890, 1590], // Versão 35
    [1120, 600, 1980, 1680], // Versão 36
    [1204, 630, 2100, 1770], // Versão 37
    [1260, 660, 2220, 1860], // Versão 38
    [1316, 720, 2310, 1950], // Versão 39
    [1372, 750, 2430, 2040], // Versão 40
  ]
  // Verificar se o nível está no intervalo válido (0 a 3)
  if (errorLevel < 0 || errorLevel > 3) {
    return -1
  }
  // Verificar se a versão está dentro do intervalo válido (1 a 40)
  if (version < 1 || version > errorCorrectionCodewords.length) {
    return -1
  }
  return errorCorrectionCodewords[version - 1][errorLevel]
}

// function getValueOfP(version: number, errorLevel: number): number {
//   if (version == 1){
//     s
//   }
//   return 0
// }

function getErrorCorrectionBlocks(version: number, errorLevel: number): number {
  const errorCorrectionBlocks = [
    [1, 1, 1, 1], // Versão 1
    [1, 1, 1, 1], // Versão 2
    [1, 1, 2, 2], // Versão 3
    [1, 1, 2, 4], // Versão 4
    [1, 1, 2, 4], // Versão 5
    [2, 2, 4, 4], // Versão 6
    [2, 2, 4, 6], // Versão 7
    [2, 2, 4, 6], // Versão 8
    [2, 2, 5, 8], // Versão 9
    [2, 4, 5, 8], // Versão 10
    [4, 1, 5, 8], // Versão 11
    [2, 6, 5, 8], // Versão 12
    [4, 8, 4, 8], // Versão 13
    [3, 4, 11, 11], // Versão 14
    [5, 5, 11, 11], // Versão 15
    [5, 7, 3, 11], // Versão 16
    [1, 10, 5, 11], // Versão 17
    [5, 9, 5, 11], // Versão 18
    [3, 3, 5, 11], // Versão 19
    [3, 3, 4, 16], // Versão 20
    [4, 17, 6, 16], // Versão 21
    [2, 7, 17, 34], // Versão 22
    [4, 11, 16, 16], // Versão 23
    [6, 14, 30, 14], // Versão 24
    [8, 13, 32, 22], // Versão 25
    [10, 19, 12, 33], // Versão 26
    [8, 26, 32, 28], // Versão 27
    [3, 28, 35, 18], // Versão 28
    [7, 21, 33, 31], // Versão 29
    [5, 25, 29, 23], // Versão 30
    [13, 29, 23, 19], // Versão 31
    [17, 10, 19, 19], // Versão 32
    [17, 19, 11, 46], // Versão 33
    [13, 23, 59, 59], // Versão 34
    [12, 22, 14, 16], // Versão 35
    [6, 10, 22, 22], // Versão 36
    [17, 24, 45, 24], // Versão 37
    [4, 32, 32, 67], // Versão 38
    [20, 22, 31, 10], // Versão 39
    [19, 34, 61, 20], // Versão 40
  ]

  // Verificar se o nível está no intervalo válido (0 a 3)
  if (errorLevel < 0 || errorLevel > 3) {
    return -1
  }
  // Verificar se a versão está dentro do intervalo válido (1 a 40)
  if (version < 1 || version > errorCorrectionBlocks.length) {
    return -1
  }
  return errorCorrectionBlocks[version - 1][errorLevel]
}

function getQRCodeSize(qrVersion: number) {
  return 4 * qrVersion + 17
}

function getFixedPatternsSize(version: number) {
  let response = 0
  // Localização
  response += 8 * 8 * 3
  // Time
  response += (version * 4 + 1) * 2
  // Alinhamento
  const alignmentPatternPositions = getAlignmentPatternPositions(version)
  if (alignmentPatternPositions.length > 0){
    response += ((alignmentPatternPositions.length ** 2) - 3) * 5 * 5
    // Alinhamentos em cima do time 
    response -= Math.floor(version / 7) * 2 * 5
  }
  return response
}

function getFormatInfoSize(version: number){
  let response = 0
  // version
  if (version >= 7)
    response += 18 * 2
  // info
  response += 15 * 2 + 1

  return response
}

function getDataModuleExceptSize(version: number){
  const A2 = getQRCodeSize(version) ** 2

  return A2 - getFixedPatternsSize(version) - getFormatInfoSize(version)
}

function getRemainderBits(version: number) {
  return getDataModuleExceptSize(version) - (getTotalNumberOfCodewords(version) * 8) 
}

// Função para fazer uma cópia profunda de um array bidimensional
function arrayDeepCopy(array: number[][]): number[][] {
  return array.map((row) => [...row]) // Copia cada linha do array
}

function decimalToBitsArray(qtdBits: number, value: number) {
  // Converte o número decimal para uma string binária
  let binarioStr = value.toString(2)

  // Preenche com zeros à esquerda para garantir que o comprimento seja igual aos bits solicitados
  binarioStr = binarioStr.padStart(qtdBits, '0')

  // Converte a string binária em um array de números (bits)
  const binarioArray = binarioStr.split('').map((bit) => parseInt(bit, 10))

  return binarioArray
}

// Função para obter o grau de um polinômio (posição do bit mais significativo)
function polynomialDegree(pol: number): number {
  let grau = -1
  let polCopy = pol // Cria cópia do valor para nao modificar o original
  while (polCopy > 0) {
    polCopy = polCopy >> 1
    grau++
  }
  return grau
}
// Função para obter o restante de uma divisão polinomial
function polyRemainder(cima: number, baixo: number): number {
  let cimaCopy = cima // Cópia

  // Realizar a divisão polinomial
  while (polynomialDegree(cimaCopy) >= polynomialDegree(baixo)) {
    const offset = polynomialDegree(cimaCopy) - polynomialDegree(baixo)
    // Deslocar o divisor para a esquerda para alinhar com o dividendo
    const offsetBaixo = baixo << offset
    // Subtrair (XOR) o divisor deslocado do dividendo
    cimaCopy = cimaCopy ^ offsetBaixo
  }
  // O resto da divisão
  const remainder = cimaCopy

  return remainder
}

function stringToAscii(str: string): number[] {
  const asciiCodes: number[] = []

  // Itera sobre cada caractere da string e obtém o código ASCII
  for (let i = 0; i < str.length; i++) {
    asciiCodes.push(str.charCodeAt(i))
  }

  return asciiCodes
}

/*****************************************/
/*                                       */
/*        Padrões fixos                  */
/*                                       */
/*****************************************/

function timingPatterns(data: number[][], qrVersion: number) {
  const patternPosition = 6
  const lastIndex = getQRCodeSize(qrVersion) - 1
  // Horizontal
  for (let i = 0; i <= lastIndex; i++) {
    data[patternPosition][i] = (i + 1) % 2
  }
  // Vertical
  for (let i = 0; i <= lastIndex; i++) {
    data[i][patternPosition] = (i + 1) % 2
  }
}

function findPatterns(data: number[][], qrVersion: number) {
  const firstIndex = 0
  const lastIndex = getQRCodeSize(qrVersion) - 1

  // Branco
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      // SE
      data[i][j] = 0
      // SD
      data[i][lastIndex - j] = 0
      // IE
      data[lastIndex - i][j] = 0
    }
  }
  // Horizontal
  for (let i = 0; i < 7; i++) {
    // SE
    data[firstIndex][i] = 1
    data[firstIndex + 6][i] = 1
    // SD
    data[firstIndex][lastIndex - i] = 1
    data[firstIndex + 6][lastIndex - i] = 1
    // IE
    data[lastIndex - 6][i] = 1
    data[lastIndex][i] = 1
  }
  // Vertical
  for (let i = 1; i < 6; i++) {
    // SE
    data[i][firstIndex] = 1
    data[i][firstIndex + 6] = 1
    // SD
    data[i][lastIndex] = 1
    data[i][lastIndex - 6] = 1
    // IE
    data[lastIndex - i][firstIndex] = 1
    data[lastIndex - i][firstIndex + 6] = 1
  }
  // Centros
  for (let i = 2; i < 5; i++) {
    // SE
    for (let j = 2; j < 5; j++) {
      data[firstIndex + j][i] = 1
    }
    // SD
    for (let j = 2; j < 5; j++) {
      data[firstIndex + j][lastIndex - i] = 1
    }
    // IE
    for (let j = 2; j < 5; j++) {
      data[lastIndex - j][i] = 1
    }
  }
}

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

function alignmentsPatterns(
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
          data[i][j] = 1
        }
      }
      // Horizontal
      for (let i = y - 1; i <= y + 1; i++) {
        data[x - 1][i] = 0
        data[x + 1][i] = 0
      }
      data[x][y - 1] = 0
      data[x][y + 1] = 0
    }
  }
}

/*****************************************/
/*                                       */
/* Padrões de informações e versão       */
/*                                       */
/*****************************************/

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

function formatInformation(
  data: number[][],
  qrVersion: number,
  errorLevel: number,
  dataMaskPattern: number
) {
  const firstIndex = 0
  const lastIndex = getQRCodeSize(qrVersion) - 1

  const formatInformationBits = [
    ...getFormatInformationBits(errorLevel, dataMaskPattern),
  ].reverse()

  // 0 - 7
  let dataCount = 0
  let count = 0
  while (dataCount < 8) {
    // SD
    data[lastIndex - dataCount][8] = formatInformationBits[dataCount]
    // SE
    if (data[8][count] == null) {
      data[8][count] = formatInformationBits[dataCount]
      dataCount++
    }
    count++
  }

  // 8 - 14
  count = 0
  while (dataCount < 15) {
    // IE
    data[8][lastIndex - 15 + dataCount + 1] = formatInformationBits[dataCount]
    // SE
    if (data[8 - count][8] == null) {
      data[8 - count][8] = formatInformationBits[dataCount]
      dataCount++
    }
    count++
  }
  // 15 Ever Black
  data[8][lastIndex - 7] = 1
}

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

function versionInformation(data: number[][], qrVersion: number) {
  const lastIndex = getQRCodeSize(qrVersion) - 1

  if (qrVersion < 7) return

  const versionInformationBits = [
    ...getVersionInformationBits(qrVersion),
  ].reverse()

  for (let i = 0; i < 6; i++) {
    // SD // Vertical
    data[lastIndex - 10][i] = versionInformationBits[i * 3]
    data[lastIndex - 9][i] = versionInformationBits[i * 3 + 1]
    data[lastIndex - 8][i] = versionInformationBits[i * 3 + 2]
    // IE // Horizontal
    data[i][lastIndex - 10] = versionInformationBits[i * 3]
    data[i][lastIndex - 9] = versionInformationBits[i * 3 + 1]
    data[i][lastIndex - 8] = versionInformationBits[i * 3 + 2]
  }
}

/*****************************************/
/*                                       */
/* ECI Header                            */
/*                                       */
/*****************************************/

function getNumberOfBitsCharacterCount(version: number, mode: number): number {
  switch (mode) {
    case 1:
      if (version <= 9) return 10
      if (version <= 26) return 12
      return 14
    case 2:
      if (version <= 9) return 9
      if (version <= 26) return 11
      return 13
    case 4:
      if (version <= 9) return 8
      if (version <= 26) return 16
      return 16
    case 8:
      if (version <= 9) return 8
      if (version <= 26) return 10
      return 12
    default:
      return 0
  }
}

function getHeaderBits(version: number, mode: number, text: string): number[] {
  let result: number[] = []
  const len = text.length

  const modeBits = decimalToBitsArray(4, mode)
  const characterCount = getNumberOfBitsCharacterCount(version, mode)

  const countBits = decimalToBitsArray(characterCount, len)

  modeBits.forEach((bit) => {
    result.push(bit)
  })
  countBits.forEach((bit) => {
    result.push(bit)
  })
  return result
}

/*****************************************/
/*                                       */
/* Dados e correção                      */
/*                                       */
/*****************************************/

function getFinalData(version: number, mode: number, text: string): number[] {
  let result: number[] = []
  let data: number[] = []
  const header: number[] = getHeaderBits(version, mode, text)
  const ascii: number[] = stringToAscii(text)
  const terminator: number[] = new Array(4).fill(0)

  // ASCII para Bits
  ascii.forEach((byte) => {
    decimalToBitsArray(8, byte).forEach((bit) => {
      data.push(bit)
    })
  })

  // Preenchendo os dados
  header.forEach((bit) => {
    result.push(bit)
  })
  data.forEach((bit) => {
    result.push(bit)
  })
  terminator.forEach((bit) => {
    result.push(bit)
  })

  return result
}

function snake(data: number[][], qrVersion: number, content: number[]) {
  const firstIndex = 0
  const lastIndex = getQRCodeSize(qrVersion) - 1

  let countContent = 0
  let countRow = 0
  let countCol = 0
  let up = true
  while (countContent < content.length) {
    const mod = countRow % 2
    const div = Math.floor(countRow / 2)

    // console.log(`countContent: ${countContent}`)
    // console.log(`countRow: ${countRow}`)
    // console.log(`countCol: ${countCol}`)
    // console.log(`up: ${up}`)
    // console.log(`mod: ${mod}`)
    // console.log(`div: ${div}`)
    // console.log(" ")

    if (lastIndex - div < 0) {
      up = !up
      countRow = 0
      countCol++
      continue
    }
    // Subindo
    if (up && data[lastIndex - mod - 2 * countCol][lastIndex - div] == null) {
      data[lastIndex - mod - 2 * countCol][lastIndex - div] =
        content[countContent]
      countContent++
    }
    // Descendo
    if (!up && data[lastIndex - mod - 2 * countCol][div] == null) {
      data[lastIndex - mod - 2 * countCol][div] = content[countContent]
      countContent++
    }
    countRow++
  }
}

function mask(data: number[][], fix: number[][], dataMaskPattern: number) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      let invert = false
      switch (dataMaskPattern) {
        case 0:
          invert = (i + j) % 2 == 0
          break
        case 1:
          invert = i % 2 == 0
          break
        case 2:
          invert = j % 3 == 0
          break
        case 3:
          invert = (i + j) % 3 == 0
          break
        case 4:
          invert = (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0
          break
        case 5:
          invert = ((i * j) % 2) + ((i * j) % 3) == 0
          break
        case 6:
          invert = (((i * j) % 2) + ((i * j) % 3)) % 2 == 0
          break
        case 7:
          invert = (((i + j) % 2) + ((i * j) % 3)) % 2 == 0
          break
        default:
          break
      }
      if (invert && fix[j][i] == null) {
        data[j][i] = data[j][i] != 1 ? 1 : 0
      } else {
        data[j][i] = data[j][i] ?? 0
      }
    }
  }
}

export default function QrCodeComponent(props: QrCodeComponentProps) {
  const { qrVersion, errorLevel, dataMaskPattern, dataToEncode } = props
  const size = getQRCodeSize(qrVersion)

  // [x][y]
  let data: number[][] = Array.from(
    { length: size },
    () => Array(size).fill(null) // Inicializando com null para visualizar progresso
  )

  let alignments: number[] = []

  timingPatterns(data, qrVersion)
  findPatterns(data, qrVersion)
  alignmentsPatterns(data, qrVersion, alignments)
  formatInformation(data, qrVersion, errorLevel, dataMaskPattern)
  versionInformation(data, qrVersion)

  const finalData: number[] = getFinalData(qrVersion, 4, dataToEncode)

  const fix = arrayDeepCopy(data)
  snake(data, qrVersion, finalData)
  // mask(data, fix, dataMaskPattern)

  return (
    <div id="qr-code" className="flex size-[32rem] bg-white">
      <div className="quiet-zone flex-[4_4_0%]"/>
      {data.map((col, i) => (
        <div key={i} className="flex flex-1 flex-col text-xs">
          <div className="quiet-zone flex-[4_4_0%]"/>
          {col.map((bit, j) => (
            <div
              className={`flex-1 text-center ${
                bit == 1
                  ? 'bg-black text-white'
                  : bit == 0
                    ? 'bg-white'
                    : 'bg-slate-400'
              }`}
              key={j}
            >
              {/* bit */}
            </div>
          ))}
          <div className="quiet-zone flex-[4_4_0%]"/>
        </div>
      ))}
      <div className="quiet-zone flex-[4_4_0%]"/>
    </div>
  )
}
