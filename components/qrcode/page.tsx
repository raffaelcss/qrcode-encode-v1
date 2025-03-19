import { getQRCodeSize } from "@/utils/extras/getQRCodeSize"
import { alignmentsPatterns } from "@/utils/fixed_patterns/alignmentsPatterns"
import { findPatterns } from "@/utils/fixed_patterns/findPatterns"
import { formatInformation } from "@/utils/fixed_patterns/formatInformation"
import { timingPatterns } from "@/utils/fixed_patterns/timingPatterns"
import { versionInformation } from "@/utils/fixed_patterns/versionInformation"
import { mask } from "@/utils/snake_and_mask/mask"
import { snake } from "@/utils/snake_and_mask/snake"

interface QrCodeComponentProps {
  qrVersion: number
  errorLevel: number
  dataMaskPattern: number
  finalData: number[]
  colored: boolean
  bordered: boolean
}

/*****************************************/
/*                                       */
/*        Funções auxiliares             */
/*                                       */
/*****************************************/

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

// Função para fazer uma cópia profunda de um array bidimensional
function arrayDeepCopy(array: number[][]): number[][] {
  return array.map((row) => [...row]) // Copia cada linha do array
}

/*****************************************/
/*                                       */
/*        Padrões fixos                  */
/*                                       */
/*****************************************/

/*****************************************/
/*                                       */
/* Padrões de informações e versão       */
/*                                       */
/*****************************************/

/*****************************************/
/*                                       */
/* ECI Header                            */
/*                                       */
/*****************************************/

/*****************************************/
/*                                       */
/* Dados e correção                      */
/*                                       */
/*****************************************/

export default function QrCodeComponent(props: QrCodeComponentProps) {
  const { bordered, qrVersion, errorLevel, dataMaskPattern, finalData, colored } = props
  const size = getQRCodeSize(qrVersion)

  // [x][y] De cima pra baixo da esquerda pra direita
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

  const fix = arrayDeepCopy(data)
  snake(data, qrVersion, finalData)
  // mask(data, fix, dataMaskPattern)

  if (!colored) {
    data = data.map(col => col.map(bit => {
      if (bit <= 0) return 0
      else return 1
    }))
  }

  return (
    <div id="qr-code" className="flex size-[32rem] bg-white">
      <div className="quiet-zone flex-[4_4_0%]"/>
      {data.map((col, i) => (
        <div key={i} className="flex flex-1 flex-col text-[8px]">
          <div className="quiet-zone flex-[4_4_0%]"/>
          {col.map((bit, j) => (
            <div
              className={`flex-1 text-center ${bordered ? "border" : ""} ${
                bit == 0
                ? 'bg-white'
                : bit == 1
                ? 'bg-black text-white'
                : bit == -2
                ? 'bg-red-100'
                : bit == 2
                ? 'bg-red-700 text-white'
                : bit == -3
                ? 'bg-blue-100'
                : bit == 3
                ? 'bg-blue-700 text-white'
                : bit == -4
                ? 'bg-green-100'
                : bit == 4
                ? 'bg-green-700 text-white'
                : bit == -5
                ? 'bg-orange-100'
                : bit == 5
                ? 'bg-orange-500 text-white'
                : bit == -6
                ? 'bg-pink-100'
                : bit == 6
                ? 'bg-pink-500 text-white'
                : bit == -7
                ? 'bg-yellow-100'
                : bit == 7
                ? 'bg-yellow-700 text-white'

                : 'bg-slate-400'
              }`}
              key={j}
            >
              {bit}
            </div>
          ))}
          <div className="quiet-zone flex-[4_4_0%]"/>
        </div>
      ))}
      <div className="quiet-zone flex-[4_4_0%]"/>
    </div>
  )
}
