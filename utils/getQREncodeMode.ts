import { QREncodeModeType } from "@/types/qrMode-type";

export function getQREncodeMode(text: string): QREncodeModeType {
  const alphanumericTable = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";

  // Check numeric mode
  if (/^[0-9]+$/.test(text)) {
      return QREncodeModeType.NUMERIC;
  }

  // Check alphanumeric mode
  if (text.split('').every(char => alphanumericTable.includes(char))) {
      return QREncodeModeType.ALPHANUMERIC;
  }

  // Check byte mode (ISO 8859-1)
  try {
      new TextEncoder().encode(text);
      return QREncodeModeType.BYTE;
  } catch (e) {
      throw new Error("The string contains characters that cannot be encoded in ISO 8859-1");
  }
}