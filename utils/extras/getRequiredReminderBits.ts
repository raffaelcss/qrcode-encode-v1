export function getRequiredReminderBits(qrVersion: number): number[] {
  const requiredReminderBits: number[] = [];

  if (qrVersion >= 2 && qrVersion <= 6) requiredReminderBits.concat(Array(7).fill(0));
  if (qrVersion >= 14 && qrVersion <= 20) requiredReminderBits.concat(Array(3).fill(0));
  if (qrVersion >= 21 && qrVersion <= 27) requiredReminderBits.concat(Array(4).fill(0));
  if (qrVersion >= 28 && qrVersion <= 34) requiredReminderBits.concat(Array(3).fill(0));
  
  return requiredReminderBits;
}