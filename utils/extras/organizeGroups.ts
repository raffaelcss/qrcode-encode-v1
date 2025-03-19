import { ErrorCorrectionType } from '@/types/errorCorrection-type'
import {
  getNumberOfBlocksInGroup1,
  getNumberOfBlocksInGroup2,
  getNumberOfDataCodewordsInEachBlocksOfGroup1,
  getNumberOfDataCodewordsInEachBlocksOfGroup2,
} from './blockInformations'

export function getOrganizedCodeWords(
  qrVersion: number,
  qrErrorLevel: ErrorCorrectionType,
  unorganizedCodeWords: number[][][]
): number[] {
  const numberOfBlocksInGroup1 = getNumberOfBlocksInGroup1(
    qrVersion,
    qrErrorLevel
  )
  const numberOfDataCodewordsInEachBlocksOfGroup1 =
    getNumberOfDataCodewordsInEachBlocksOfGroup1(qrVersion, qrErrorLevel)
  const numberOfBlocksInGroup2 = getNumberOfBlocksInGroup2(
    qrVersion,
    qrErrorLevel
  )
  const numberOfDataCodewordsInEachBlocksOfGroup2 =
    getNumberOfDataCodewordsInEachBlocksOfGroup2(qrVersion, qrErrorLevel)

  const greaterNumberOfCodewordsPerBlock = Math.max(numberOfDataCodewordsInEachBlocksOfGroup1, numberOfDataCodewordsInEachBlocksOfGroup2);
  const greaterNumberOfBlockPerGroup = Math.max(numberOfBlocksInGroup1, numberOfBlocksInGroup2);

  const organizedCodeWords: number[] = []

  //Cada codeword
  
  for (let i=0; i < greaterNumberOfCodewordsPerBlock; i++){
    //Pegando bloco
    for (let j=0; j < greaterNumberOfBlockPerGroup; j++){
      //Pegando por grupo
      for (let k=0; k < unorganizedCodeWords.length; k++){
        if (unorganizedCodeWords[k])
          if (unorganizedCodeWords[k][j])
            if (unorganizedCodeWords[k][j][i])
              organizedCodeWords.push(unorganizedCodeWords[k][j][i]);
      }
    }
  }

  return organizedCodeWords
}
