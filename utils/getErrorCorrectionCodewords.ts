import { antilogTable, logTable } from './getGeneratorPolynomial'

function etapa(generatorPolynomial: number[], lastXOR: number[]){
    
    const alfaGeneratorPolynomial = generatorPolynomial.map((term) => logTable[term])
    const alfaLastXOR = lastXOR.map((term) => logTable[term])
  
    //Pega o principal termo do lastXOR
    const mainTermLastXOR = alfaLastXOR[0];

    //Multiplica o polinomio gerador pelo termo
    let a1 = alfaGeneratorPolynomial.map(term => {
        const mul = term + mainTermLastXOR;
        return (mul % 255);
    })

    a1 = a1.map(term => antilogTable[term]);

    //XOR com messagePolynomial
    let b1 = a1.map((term, i) => term ^ lastXOR[i]);
    //Remover 0 a esquerda
    // Encontra o índice do primeiro elemento diferente de zero
    const pZero = b1.findIndex(num => num !== 0);
    b1 = pZero !== -1 ? b1.slice(pZero) : [];

    return b1;
}


function getErrorCorrectionCodewords(
  messagePolynomial: number[],
  generatorPolynomial: number[],
  qtdECCodeWords: number
): number[] {

  //Multiplicar mensagem pela quantidade de CodeWords de correção
  const multMessagePolynomial = messagePolynomial.concat(Array(qtdECCodeWords).fill(undefined));
  //Multiplicar gerador pra ficar igual da mensagem
  const dif = multMessagePolynomial.length - generatorPolynomial.length;

  const multGeneratorPolynomial = generatorPolynomial.concat(Array(dif).fill(undefined));
  
  let result = [...multMessagePolynomial];
  for (let i=0; i < 16; i++){
    result = etapa(multGeneratorPolynomial, result);
  }
  //remover a multiplicação realizada antes
  for (let i=0; i < dif; i++){
    result.pop();
  }

  return result;
}

export function getErrorCorrectionCodewordsInBlocks(
  messageGroups: number[][][],
  generatorPolynomial: number[],
  numErrorCorrectionCodewords: number
): number[][][] {
  const ecGroups: number[][][] = [];
  messageGroups.forEach(group => {
    const ecGroup: number[][] = [];
    group.forEach(block => {
      const ecBlock = getErrorCorrectionCodewords(block, generatorPolynomial, numErrorCorrectionCodewords)
      ecGroup.push(ecBlock);
    })
    ecGroups.push(ecGroup);
  });

  return ecGroups;
}
