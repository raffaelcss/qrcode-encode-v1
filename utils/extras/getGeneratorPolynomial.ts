const POLYNOMIAL = 0x11d; // 100011101 → 285 em decimal (polinômio irreduzível)

// Cria tabelas de log e antilog para GF(256)
const createLogTables = () => {
  const logTable = new Uint8Array(256);
  const antilogTable = new Uint8Array(256);

  let value = 1;
  for (let i = 0; i < 255; i++) {
    antilogTable[i] = value;
    logTable[value] = i;

    value <<= 1;
    if (value & 0x100) {
      value ^= POLYNOMIAL;
    }
  }

  return { logTable, antilogTable };
};

export const { logTable, antilogTable } = createLogTables();

function getPartialGeneratorPolynomial(lastPolynomial: number[], e: number): number[] {
  // Multiplica tudo por x
  const firtsTerm = [...lastPolynomial, undefined];

  // Multiplica pelo segundo termo (α^e)
  const secondTerm = lastPolynomial.map(term => {
    if (term === undefined) return undefined;
    const mul = Math.abs(term) + e;
    const result = mul % 255;
    return result;
  });

  // Soma tudo
  const result = firtsTerm.map((term, i) => {
    if (i === 0 && term !== undefined) {
      return term;
    } else if (i < (firtsTerm.length - 1) && term !== undefined) {
      const sum = antilogTable[term] ^ antilogTable[secondTerm[i - 1] ?? 0];
      return logTable[(sum % 255) || 255];
      
    } else {
      return secondTerm[i - 1] ?? 0;
    }
  });

  return result;
}

// Gera o polinômio gerador com base no número de codewords
export const getGeneratorPolynomial = (numErrorCorrectionCodewords: number): number[] => {
  let partialGeneratorPolynomial = [0, 0];
  for (let i = 1; i < numErrorCorrectionCodewords; i++) {
    partialGeneratorPolynomial = getPartialGeneratorPolynomial(partialGeneratorPolynomial, i);
  }

  return partialGeneratorPolynomial.map(term => antilogTable[term]);
};