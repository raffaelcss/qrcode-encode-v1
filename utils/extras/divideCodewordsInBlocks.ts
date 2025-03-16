import { ErrorCorrectionType } from "@/types/errorCorrection-type";
import { getNumberOfBlocksInGroup1, getNumberOfBlocksInGroup2, getNumberOfDataCodewordsInEachBlocksOfGroup1, getNumberOfDataCodewordsInEachBlocksOfGroup2 } from "./blockInformations";

export function divideCodewordsInBlocks(version: number, qrErrorLevel: ErrorCorrectionType, codeWords: number[]): number[][][] {
  
  const numberOfBlocksInGroup1 = getNumberOfBlocksInGroup1(version, qrErrorLevel);
  const numberOfDataCodewordsInEachBlocksOfGroup1 = getNumberOfDataCodewordsInEachBlocksOfGroup1(version, qrErrorLevel);
  const numberOfBlocksInGroup2 = getNumberOfBlocksInGroup2(version, qrErrorLevel);
  const numberOfDataCodewordsInEachBlocksOfGroup2 = getNumberOfDataCodewordsInEachBlocksOfGroup2(version, qrErrorLevel);

  const copyOfCodeWords: number[] = [...codeWords];
  
  const group1: number[][] = [];
  //Montando grupo 1
  for (let i = 0; i < numberOfBlocksInGroup1; i++) {
    //Repete a quantidade de blocos
    const block: number[] = []; 
    for (let j = 0; j < numberOfDataCodewordsInEachBlocksOfGroup1; j++){
      //Repete a quantidade de codewords
      block.push(copyOfCodeWords.shift() as number)  //Copia o codeword para o bloco
    }
    group1.push(block); //copia o bloco para o grupo
  }
  const group2: number[][] = [];
  //Montando grupo 2
  for (let i = 0; i < numberOfBlocksInGroup2; i++) {
    //Repete a quantidade de blocos
    const block: number[] = []; 
    for (let j = 0; j < numberOfDataCodewordsInEachBlocksOfGroup2; j++){
      //Repete a quantidade de codewords
      block.push(copyOfCodeWords.shift() as number)  //Copia o codeword para o bloco
    }
    group2.push(block); //copia o bloco para o grupo
  }

  return [group1, group2];
}