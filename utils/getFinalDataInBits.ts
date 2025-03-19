import { decimalToBitsArray } from "./extras/decimalToBitsArray";
import { getRequiredReminderBits } from "./extras/getRequiredReminderBits";

export function getFinalDataInBits(qrVersion: number, organizedMessageGroups: number[], organizedEcGroups: number[]): number[] {
  
  const finalDataInBits: number[] = [];
  //Bits de mensagem
  organizedMessageGroups.forEach(byte => {
    const bits = decimalToBitsArray(8, byte);
    bits.forEach(bit => {
      finalDataInBits.push(bit);
    })
  });
  //Bits de correção (cor 7)
  let color = 7;
  organizedEcGroups.forEach(byte => {
    const bits = decimalToBitsArray(8, byte);
    bits.forEach(bit => {
      finalDataInBits.push(bit * color || -color);
    })
  });

  //Adiciona bits restantes por versão
  const requiredReminderBits = getRequiredReminderBits(qrVersion);
  requiredReminderBits.forEach(bit => {
    finalDataInBits.push(bit);
  })

  return finalDataInBits;
}