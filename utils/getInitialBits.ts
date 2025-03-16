import { QREncodeModeType } from "@/types/qrMode-type"
import { decimalToBitsArray } from "./extras/decimalToBitsArray"
import { getQtdBitsCharacterCount } from "./getQtdBitsCharacterCount"
import { determineQREncodeMode } from "./determineQREncodeMode";
import { getMinimumQRVersion } from "./getMinimumQRVersion";
import { ErrorCorrectionType } from "@/types/errorCorrection-type";
import { encodeNumericMode } from "./encoders/encodeNumericMode";
import { encodeAlphanumericMode } from "./encoders/encodeAlphanumericMode";
import { encodeByteMode } from "./encoders/encodeByteMode";
import { padArrayRight } from "./extras/padArray";
import { getTotalNumberOfDataCodewords } from "./extras/blockInformations";

export function getHeaderBits(version: number, encodeMode: QREncodeModeType, text: string): number[] {
  const result: number[] = [];
  const qtdCharacter = text.length;

  const encodeModeValue = encodeMode == QREncodeModeType.NUMERIC ? 1 : (encodeMode == QREncodeModeType.ALPHANUMERIC ? 2 : 4);
  const encodeModeBits = decimalToBitsArray(4, encodeModeValue);
  const qtdBitsCharacterCount = getQtdBitsCharacterCount(version, encodeMode);

  const countBits = decimalToBitsArray(qtdBitsCharacterCount, qtdCharacter);

  encodeModeBits.forEach((bit) => {
    result.push(bit);
  })
  countBits.forEach((bit) => {
    result.push(bit);
  })
  return result
}

export function encodeText(text: string, qrEncodeMode: QREncodeModeType){
  const encodedText : number[] = [];
  switch (qrEncodeMode) {
    case QREncodeModeType.NUMERIC:
      encodedText.push(...encodeNumericMode(text))
      break;
    case QREncodeModeType.ALPHANUMERIC:
      encodedText.push(...encodeAlphanumericMode(text))
      break;
  
    default:
      encodedText.push(...encodeByteMode(text))
      break;
  }

  return encodedText;
}

export function getInitialBits(text: string, qrErrorLevel: ErrorCorrectionType): number[] {
  const version = getMinimumQRVersion(text, qrErrorLevel);
  const qrEncodeMode = determineQREncodeMode(text);
  const headerBits = getHeaderBits(version || 1, qrEncodeMode, text);
  const qtdFinalBits = getTotalNumberOfDataCodewords(version, qrErrorLevel) * 8;

  const encodedText = [...encodeText(text, qrEncodeMode)];

  const finalBits = [...headerBits, ...encodedText];

  //Adiciona terminador
  const dif = qtdFinalBits - finalBits.length;
  // console.log(`Qtd: ${finalBits.length} Cert: ${qtdFinalBits} dif: ${dif}`)
  for(let i=0; i < Math.min(dif, 4); i++){
    finalBits.push(0)
  }

  //Faz se tornar multiplo de 8
  const mod = finalBits.length % 8;
  // console.log(`Qtd: ${finalBits.length} Mod: ${mod}`)
  for(let i=0; i < (8 - mod); i++){
    finalBits.push(0)
  }
  // console.log(`Qtd: ${finalBits.length}`)

  //Adiciona a sequência de 236 e 17 alternativamente até dar a qtd de bytes
  //Esses numeros vem do padrão do QR, são arbitrarios
  const finalDif = qtdFinalBits - finalBits.length;
  const qtdAdd = finalDif / 8;
  // console.log(`Qtd: ${finalBits.length} Cert: ${qtdFinalBits} Add: ${qtdAdd}`)
  let alternate = false;
  for(let i=0; i < qtdAdd; i++){
    if (!alternate) {
      finalBits.push(...decimalToBitsArray(8, 236));
    } else {
      finalBits.push(...decimalToBitsArray(8, 17));
    }
    alternate = !alternate;
  }
  // console.log(`Qtd: ${finalBits.length} Cert: ${qtdFinalBits}`)

  return finalBits;
}