import { QREncodeModeType } from "@/types/qrMode-type"

export function getQtdBitsCharacterCount(version: number, encodeMode: QREncodeModeType): number {
  switch (encodeMode) {
    case QREncodeModeType.NUMERIC:
      if (version <= 9) return 10
      if (version <= 26) return 12
      return 14
    case QREncodeModeType.ALPHANUMERIC:
      if (version <= 9) return 9
      if (version <= 26) return 11
      return 13
    case QREncodeModeType.BYTE:
      if (version <= 9) return 8
      return 16
    default:
      return 0
  }
}