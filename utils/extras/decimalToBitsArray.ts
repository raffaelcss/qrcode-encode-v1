export function decimalToBitsArray(qtdBits: number, value: number) {
  // Converte o número decimal para uma string binária
  let binarioStr = value.toString(2)

  // Preenche com zeros à esquerda para garantir que o comprimento seja igual aos bits solicitados
  binarioStr = binarioStr.padStart(qtdBits, '0')

  // Converte a string binária em um array de números (bits)
  const binarioArray = binarioStr.split('').map((bit) => parseInt(bit, 10))

  return binarioArray
}