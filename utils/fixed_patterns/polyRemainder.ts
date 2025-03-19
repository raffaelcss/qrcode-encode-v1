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
export function polyRemainder(cima: number, baixo: number): number {
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