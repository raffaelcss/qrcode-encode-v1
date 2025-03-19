import { ErrorCorrectionType } from "@/types/errorCorrection-type";
import { getInitialBits } from "./getInitialBits";

export function getMessagePolynomial(text: string, qrErrorLevel: ErrorCorrectionType){
  const encodedText = [...getInitialBits(text, qrErrorLevel)];

  const messagePolynomial = [];

  //Transforma cada 8 bits em um numero decimal
  for (let i = 0; i < encodedText.length / 8; i++){
    const binaryArray = [];
    for (let j = (i*8); j < ((i*8)+8); j++){
      binaryArray.push(encodedText[j]);
    }
    const decimalNumber = binaryArray.reduce((decimal, bit, index) => {
      return decimal + bit * Math.pow(2, 7 - index);
    }, 0);
    messagePolynomial.push(decimalNumber);
  }
  return messagePolynomial;
}